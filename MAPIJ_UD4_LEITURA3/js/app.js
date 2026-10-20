/* Lógica do estudo de caso: navegação, variações e registro SCORM. */
(function () {
  "use strict";

  var C = CONTEUDO;
  var TOTAL = C.variacoes.length;
  /* Quantas variações o aluno precisa revelar para a atividade ser marcada como concluída. */
  var EXIGIDAS = TOTAL;
  /* Quantas reflexões precisam ser enviadas para concluir (0 = reflexão opcional). */
  var EXIGIDAS_REFLEXOES = 0;
  var MIN_REFLEXAO = 10;     // caracteres mínimos para liberar o botão de envio
  var MAX_REFLEXAO = 500;    // dividido em partes de 250 ao gravar (limite do SCORM 1.2)

  var VIEWS = [
    { id: "inicio", rotulo: "Início" },
    { id: "caso", rotulo: "1. Caso-base" },
    { id: "fluxo", rotulo: "2. Fluxo básico" },
    { id: "variacoes", rotulo: "3. Variações" },
    { id: "sintese", rotulo: "4. Síntese" },
    { id: "refs", rotulo: "Referências" }
  ];

  var state = {
    visited: [],      // ids das variações já reveladas
    refl: [],         // ids das variações cuja reflexão já foi enviada
    view: "inicio",
    openVar: null,    // id da variação aberta (ou null = mapa)
    veioDe: null,     // id da variação de onde o aluno seguiu um link “Variação N” (para o botão de retorno)
    quizChecked: false,
    completed: false
  };

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function $(id) { return document.getElementById(id); }
  /* Transforma menções como “Variação 1” em links para a própria variação. */
  function linkar(html) {
    return html.replace(/Varia(ç|&ccedil;)(ã|&atilde;)o (\d+)/g, function (m, a, b, n) {
      return varPorId(parseInt(n, 10))
        ? '<a href="#variacao-' + n + '" class="ref-var" data-ref="' + n + '">' + m + "</a>"
        : m;
    });
  }
  function lista(itens, cls) {
    return '<ul class="lista ' + (cls || "") + '">' +
      itens.map(function (t) { return "<li>" + linkar(esc(t)) + "</li>"; }).join("") + "</ul>";
  }
  /* Referências: texto simples ou { titulo, detalhe, url }. Com url, o título vira link (nova aba) com ícone de corrente. */
  var ICONE_LINK = '<svg class="ico-link" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">' +
    '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function listaRefs(itens) {
    return '<ul class="lista refs">' + itens.map(function (r) {
      if (typeof r === "string") return "<li>" + esc(r) + "</li>";
      var texto = r.url
        ? '<a class="ref-link" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(r.titulo) + ICONE_LINK +
          '<span class="sr-only"> (abre em uma nova aba)</span></a>'
        : esc(r.titulo);
      return "<li>" + texto + (r.detalhe ? " " + esc(r.detalhe) : "") + "</li>";
    }).join("") + "</ul>";
  }
  function varPorId(id) {
    for (var i = 0; i < C.variacoes.length; i++) if (C.variacoes[i].id === id) return C.variacoes[i];
    return null;
  }
  function jaViu(id) { return state.visited.indexOf(id) !== -1; }
  function jaEnviou(id) { return state.refl.indexOf(id) !== -1; }

  /* ---------- SCORM ---------- */
  function salvar() {
    var dados = JSON.stringify({ v: state.visited, r: state.refl, w: state.view });
    Scorm.set("cmi.core.lesson_location", state.view);
    Scorm.set("cmi.suspend_data", dados);
    Scorm.commit();
  }

  function carregar() {
    var raw = Scorm.get("cmi.suspend_data");
    if (raw) {
      try {
        var d = JSON.parse(raw);
        if (d && d.v instanceof Array) state.visited = d.v.filter(function (id) { return !!varPorId(id); });
        if (d && d.r instanceof Array) state.refl = d.r.filter(function (id) { return !!varPorId(id); });
        if (d && d.w) state.view = d.w;
      } catch (e) { /* ignora dados corrompidos */ }
    }
    var status = Scorm.get("cmi.core.lesson_status");
    state.completed = (status === "completed" || status === "passed");
    if (!status || status === "not attempted") {
      Scorm.set("cmi.core.lesson_status", "incomplete");
    }
  }

  function verificarConclusao() {
    if (!state.completed && state.visited.length >= EXIGIDAS && state.refl.length >= EXIGIDAS_REFLEXOES) {
      state.completed = true;
      Scorm.set("cmi.core.lesson_status", "completed");
    }
  }

  /* ---------- progresso ---------- */
  function atualizarProgresso() {
    var n = state.visited.length;
    $("prog-num").textContent = n;
    $("prog-total").textContent = TOTAL;
    var pct = Math.round((n / TOTAL) * 100);
    $("prog-fill").style.width = pct + "%";
    $("prog-barra").setAttribute("aria-valuenow", pct);
    $("menu-num").textContent = n;
    $("menu-total").textContent = TOTAL;
    $("mini-fill").style.width = pct + "%";
  }

  /* ---------- navegação ---------- */
  function montarMenu() {
    var ul = $("menu-lista");
    ul.innerHTML = "";
    VIEWS.forEach(function (v) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = v.rotulo;
      b.setAttribute("data-view", v.id);
      b.addEventListener("click", function () {
        state.veioDe = null;
        if (v.id === "variacoes") state.openVar = null;
        mostrar(v.id);
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  function mostrar(id, semFoco) {
    state.view = id;
    VIEWS.forEach(function (v) {
      var sec = $("v-" + v.id);
      sec.hidden = (v.id !== id);
    });
    var botoes = document.querySelectorAll("#menu-lista button");
    for (var i = 0; i < botoes.length; i++) {
      if (botoes[i].getAttribute("data-view") === id) {
        botoes[i].setAttribute("aria-current", "page");
        // Em janelas estreitas o menu rola na horizontal: centraliza a etapa atual (sem mexer na rolagem da página).
        var ul = botoes[i].parentNode.parentNode;
        ul.scrollLeft = botoes[i].parentNode.offsetLeft - (ul.clientWidth - botoes[i].offsetWidth) / 2;
      } else {
        botoes[i].removeAttribute("aria-current");
      }
    }
    render(id);
    if (!semFoco) {
      irAoTopo();
      $("conteudo").focus({ preventScroll: true });
    }
    salvar();
  }

  function render(id) {
    if (id === "inicio") renderInicio();
    else if (id === "caso") renderCaso();
    else if (id === "fluxo") renderFluxo();
    else if (id === "variacoes") renderVariacoes();
    else if (id === "sintese") renderSintese();
    else if (id === "refs") renderRefs();
  }

  function ligarIr(root) {
    var els = root.querySelectorAll("[data-ir]");
    for (var i = 0; i < els.length; i++) {
      els[i].addEventListener("click", function (e) {
        var alvo = e.currentTarget.getAttribute("data-ir");
        if (alvo === "variacoes") state.openVar = null;
        mostrar(alvo);
      });
    }
  }

  /* ---------- Início ---------- */
  function renderInicio() {
    var s = $("v-inicio");
    s.innerHTML =
      "<h2>Bem-vindo(a)</h2>" +
      '<p class="lead">' + esc(C.subtitulo) + "</p>" +
      '<div class="card destaque"><h3>Objetivos</h3>' + lista(C.objetivos, "check") + "</div>" +
      '<div class="card"><h3>Como este estudo de caso funciona</h3>' +
      lista([
        "Você começa por um caso-base e decide o que o grupo deve fazer antes de ver o fluxo recomendado.",
        "Depois explora variações do mesmo caso, na ordem que preferir. Em cada uma, pense antes de revelar a análise.",
        "Em cada variação, observe o que muda e o que não muda. A ideia central aparece quando você compara todas.",
        "Ao final de cada análise há uma pergunta reflexiva. Você pode escrever e enviar sua reflexão" +
          (EXIGIDAS_REFLEXOES > 0 ? " (o envio de " + EXIGIDAS_REFLEXOES + " reflexões é necessário para concluir)." : ", mas isso é opcional."),
        "A atividade é concluída quando você tiver revelado a análise das " + EXIGIDAS + " variações."
      ]) + "</div>" +
      '<div class="acoes"><button class="btn" type="button" data-ir="caso">Começar pelo caso-base</button></div>';
    ligarIr(s);
  }

  /* ---------- Caso-base ---------- */
  function renderCaso() {
    var s = $("v-caso");
    var html =
      "<h2>Caso-base</h2>" +
      '<p class="lead">Leia o caso com atenção. Ele será o ponto de partida de todas as variações.</p>' +
      '<div class="card destaque">' + lista(C.casoBase) + "</div>" +
      '<div class="card pergunta"><h3>Pergunta disparadora</h3><p style="margin:0;font-size:1.1rem;font-weight:600">' +
      esc(C.perguntaDisparadora) + "</p></div>" +
      '<div class="card"><h3>Seu raciocínio</h3><p>' + esc(C.quiz.enunciado) + "</p>" +
      '<div id="quiz-opcoes"></div>' +
      '<div id="quiz-resultado" aria-live="polite"></div>' +
      '<div class="acoes"><button class="btn" id="quiz-verificar" type="button">Verificar respostas</button>' +
      '<button class="btn sec" id="quiz-refazer" type="button" hidden>Tentar de novo</button></div></div>' +
      '<div id="caso-depois"></div>';
    s.innerHTML = html;

    var box = $("quiz-opcoes");
    C.quiz.opcoes.forEach(function (o, i) {
      var lab = document.createElement("label");
      lab.className = "opcao";
      lab.innerHTML = '<input type="checkbox" data-i="' + i + '"> ' + esc(o.texto) + '<span class="fb" hidden></span>';
      box.appendChild(lab);
    });

    $("quiz-verificar").addEventListener("click", verificarQuiz);
    $("quiz-refazer").addEventListener("click", function () { state.quizChecked = false; renderCaso(); });
    if (state.quizChecked) mostrarDepoisQuiz();
  }

  function verificarQuiz() {
    var inputs = document.querySelectorAll("#quiz-opcoes input");
    var tudoCerto = true;
    var algum = false;
    for (var i = 0; i < inputs.length; i++) {
      var o = C.quiz.opcoes[i];
      var marcado = inputs[i].checked;
      if (marcado) algum = true;
      var lab = inputs[i].parentNode;
      var fb = lab.querySelector(".fb");
      lab.classList.remove("ok", "erro");
      fb.hidden = true;
      inputs[i].disabled = true;
      if (marcado === o.correta) {
        if (o.correta) { lab.classList.add("ok"); fb.textContent = o.fb; fb.hidden = false; }
      } else {
        tudoCerto = false;
        lab.classList.add("erro");
        fb.textContent = (o.correta ? "Faltou marcar esta. " : "Errado. ") + o.fb;
        fb.hidden = false;
      }
    }
    if (!algum) {
      for (var j = 0; j < inputs.length; j++) {
        inputs[j].disabled = false;
        inputs[j].parentNode.classList.remove("erro");
        inputs[j].parentNode.querySelector(".fb").hidden = true;
      }
      $("quiz-resultado").innerHTML = '<div class="resultado parcial">Marque ao menos uma atitude antes de verificar.</div>';
      return;
    }
    state.quizChecked = true;
    $("quiz-verificar").hidden = true;
    $("quiz-refazer").hidden = false;
    $("quiz-resultado").innerHTML = tudoCerto
      ? '<div class="resultado bom">Muito bem: sua resposta coincide com o fluxo recomendado.</div>'
      : '<div class="resultado parcial">Alguns pontos merecem revisão. Veja os comentários nas alternativas.</div>';
    mostrarDepoisQuiz();
  }

  function mostrarDepoisQuiz() {
    var d = $("caso-depois");
    d.innerHTML =
      '<div class="card"><h3>O que esse comportamento indica?</h3>' + lista(C.indica) + "</div>" +
      '<div class="card"><h3>Deveres do grupo escoteiro</h3>' + lista(C.deveres, "check") + "</div>" +
      '<div class="acoes"><button class="btn" type="button" data-ir="fluxo">Ver o fluxo básico de procedimento</button></div>';
    ligarIr(d);
  }

  /* ---------- Fluxo ---------- */
  function renderFluxo() {
    var s = $("v-fluxo");
    var passos = C.fluxo.map(function (p) {
      return '<details class="passo"><summary><span class="num">' + p.n + "</span>" + esc(p.titulo) + "</summary>" +
        '<div class="corpo">' + lista(p.itens) + "</div></details>";
    }).join("");
    s.innerHTML =
      "<h2>Fluxo básico de procedimento</h2>" +
      '<p class="lead">Seis passos que servem de referência para todas as variações. Abra cada passo.</p>' +
      passos +
      '<div class="card alerta" style="margin-top:20px"><h3>O que NÃO fazer</h3>' + lista(C.naoFazer, "cruz") + "</div>" +
      '<div class="acoes"><button class="btn" type="button" data-ir="variacoes">Explorar as variações</button></div>';
    ligarIr(s);
  }

  /* ---------- Variações ---------- */
  function renderVariacoes() {
    if (state.openVar !== null) renderDetalhe(state.openVar);
    else renderMapa();
  }

  function renderMapa() {
    var s = $("v-variacoes");
    var html =
      "<h2>Mapa de variações</h2>" +
      '<p class="lead">E se o caso fosse diferente? Escolha uma variação, pense no que muda e no que permanece, e só então revele a análise. ' +
      "Você já explorou " + state.visited.length + " de " + TOTAL + ".</p>";
    C.grupos.forEach(function (g) {
      html += '<h3 class="grupo-titulo">' + esc(g.titulo) + '</h3><p class="grupo-desc">' + esc(g.desc) + '</p><div class="grade">';
      C.variacoes.filter(function (v) { return v.grupo === g.id; }).forEach(function (v) {
        html += '<button type="button" class="cartao' + (jaViu(v.id) ? " vista" : "") + '" data-var="' + v.id + '">' +
          '<span class="tag">Variação ' + v.id + '</span><span class="tit">' + esc(v.titulo) + '</span>' +
          '<span class="ese">' + esc(v.ese) + "</span></button>";
      });
      html += "</div>";
    });
    if (state.completed) {
      html += '<div class="conclusao" style="margin-top:22px">Você explorou todas as variações. Siga para a <strong>síntese</strong>.' +
        ' <button class="btn" type="button" data-ir="sintese" style="margin-left:8px">Ir para a síntese</button></div>';
    }
    s.innerHTML = html;
    var cartoes = s.querySelectorAll("[data-var]");
    for (var i = 0; i < cartoes.length; i++) {
      cartoes[i].addEventListener("click", function (e) {
        state.veioDe = null;
        state.openVar = parseInt(e.currentTarget.getAttribute("data-var"), 10);
        renderVariacoes();
        irAoTopo();
        $("conteudo").focus({ preventScroll: true });
      });
    }
    ligarIr(s);
  }

  function blocoAnalise(v) {
    var html =
      '<div class="dois">' +
      '<div class="card col-muda"><h3><span class="ic">↻</span>O que muda</h3>' + lista(v.muda) + "</div>" +
      '<div class="card col-nao"><h3><span class="ic">⚓</span>O que não muda</h3>' + lista(v.naoMuda, "check") + "</div>" +
      "</div>";
    if (v.mais) {
      v.mais.forEach(function (m) {
        var alerta = m.estilo === "alerta";   // caixa vermelha de destaque (exceções importantes)
        html += '<div class="card' + (alerta ? " alerta forte" : "") + '" style="margin-top:16px"><h3>' +
          (alerta ? '<span class="ic">⚠</span>' : "") + esc(m.titulo) + "</h3>" + lista(m.itens) + "</div>";
      });
    }
    html += '<div class="sintese-uma">' + esc(v.sintese) + "</div>";
    html += '<div class="card pergunta"><h3>Pergunta reflexiva</h3><p style="font-weight:600">' + esc(v.pergunta) + "</p>";
    if (jaEnviou(v.id)) {
      html += '<p class="enviada">✓ Reflexão enviada. Obrigado por compartilhar.</p>';
    } else {
      html +=
        '<label for="reflexao" class="nota" style="display:block;margin-bottom:6px">Escreva sua reflexão' +
        (EXIGIDAS_REFLEXOES > 0 ? "" : " (opcional)") + ".</label>" +
        '<textarea id="reflexao" maxlength="' + MAX_REFLEXAO + '" rows="4"></textarea>' +
        '<p class="nota" id="refl-cont" aria-live="polite">0/' + MAX_REFLEXAO + "</p>" +
        '<p class="nota aviso-refl">' + esc(C.avisoReflexao || "") + "</p>" +
        '<div class="acoes"><button class="btn" type="button" id="btn-enviar-refl" disabled>Enviar reflexão</button></div>' +
        '<div id="refl-status" role="status" aria-live="polite"></div>';
    }
    html += "</div>";
    return html;
  }

  /* Liga o campo de reflexão: ao enviar, grava no Moodle (Relatório de interações) e trava o campo. */
  function ligarReflexao(v) {
    var ta = $("reflexao");
    var btn = $("btn-enviar-refl");
    if (!ta || !btn) return;
    ta.addEventListener("input", function () {
      $("refl-cont").textContent = ta.value.length + "/" + MAX_REFLEXAO;
      btn.disabled = ta.value.replace(/\s+/g, " ").replace(/^ | $/g, "").length < MIN_REFLEXAO;
    });
    btn.addEventListener("click", function () {
      var id = "variacao_" + (v.id < 10 ? "0" : "") + v.id + "_reflexao";
      var ok = Scorm.gravarResposta(id, ta.value);
      if (!ok) {
        $("refl-status").innerHTML = '<div class="resultado parcial">Não foi possível enviar agora. Seu texto continua na tela: tente novamente.</div>';
        return;
      }
      if (!jaEnviou(v.id)) state.refl.push(v.id);
      verificarConclusao();
      atualizarProgresso();
      salvar();
      ta.readOnly = true;
      btn.hidden = true;
      $("refl-status").innerHTML = '<p class="enviada">✓ Reflexão enviada. Obrigado por compartilhar.</p>';
    });
  }

  function renderDetalhe(id) {
    var v = varPorId(id);
    var s = $("v-variacoes");
    // Anterior/próxima seguem a ordem do mapa: só dentro do mesmo tema, não pela numeração do PDF.
    var doTema = C.variacoes.filter(function (x) { return x.grupo === v.grupo; });
    var idx = doTema.indexOf(v);
    var ant = idx > 0 ? doTema[idx - 1] : null;
    var prox = idx < doTema.length - 1 ? doTema[idx + 1] : null;
    var tema = "";
    C.grupos.forEach(function (g) { if (g.id === v.grupo) tema = g.titulo; });
    var revelada = jaViu(id);

    function botaoNav(alvo, seta) {
      var rot = seta === "ant" ? "← Anterior" : "Próxima →";
      return '<button class="btn sec" type="button" data-go="' + alvo.id + '"><span class="nv-rot">' + rot +
        ' · Variação ' + alvo.id + '</span><span class="nv-tit">' + esc(alvo.titulo) + "</span></button>";
    }

    s.innerHTML =
      '<div class="acoes voltar">' +
      (state.veioDe && state.veioDe !== id
        ? '<button class="btn" type="button" data-volta="' + state.veioDe + '">← Voltar à Variação ' + state.veioDe + "</button>" : "") +
      '<button class="btn sec" type="button" id="btn-mapa">← Voltar ao mapa</button></div>' +
      '<div class="detalhe-cab"><span class="tag">Variação ' + v.id + " · " + esc(v.titulo) + "</span>" +
      '<p class="nota" style="margin:8px 0 0">Tema: ' + esc(tema) + " · " + (idx + 1) + " de " + doTema.length + "</p>" +
      '<p class="ese-grande">' + esc(v.ese) + "</p></div>" +
      '<div class="card"><p style="margin:0"><strong>Ponto de partida:</strong> o caso-base, com esta única alteração.</p></div>' +
      '<div id="pense" class="pense"' + (revelada ? " hidden" : "") + ">" +
      "<h3>Pense antes de ver a análise</h3>" +
      lista([
        "O que muda neste cenário?",
        "O que o grupo continua devendo fazer, exatamente como no caso-base?"
      ]) +
      '<div class="acoes"><button class="btn" type="button" id="btn-revelar">Revelar a análise</button></div></div>' +
      '<div id="analise"' + (revelada ? "" : " hidden") + ">" + (revelada ? blocoAnalise(v) : "") + "</div>" +
      '<div class="nav-var">' +
      (ant ? botaoNav(ant, "ant") : "<span></span>") +
      (prox ? botaoNav(prox, "prox")
            : '<button class="btn" type="button" id="btn-mapa-fim"><span class="nv-rot">Fim deste tema</span><span class="nv-tit">Voltar ao mapa de variações</span></button>') +
      "</div>";

    function paraMapa() { state.veioDe = null; state.openVar = null; renderVariacoes(); irAoTopo(); }
    var volta = s.querySelector("[data-volta]");
    if (volta) volta.addEventListener("click", function (e) {
      state.openVar = parseInt(e.currentTarget.getAttribute("data-volta"), 10);
      state.veioDe = null;
      renderVariacoes();
      irAoTopo();
      $("conteudo").focus({ preventScroll: true });
    });
    $("btn-mapa").addEventListener("click", paraMapa);
    var fim = $("btn-mapa-fim");
    if (fim) fim.addEventListener("click", paraMapa);
    var rev = $("btn-revelar");
    if (rev) rev.addEventListener("click", function () { revelar(v); });
    if (revelada) ligarReflexao(v);
    var go = s.querySelectorAll("[data-go]");
    for (var i = 0; i < go.length; i++) {
      go[i].addEventListener("click", function (e) {
        state.veioDe = null;
        state.openVar = parseInt(e.currentTarget.getAttribute("data-go"), 10);
        renderVariacoes();
        irAoTopo();
        $("conteudo").focus({ preventScroll: true });
      });
    }
  }

  function revelar(v) {
    $("pense").hidden = true;
    var a = $("analise");
    a.innerHTML = blocoAnalise(v);
    a.hidden = false;
    ligarReflexao(v);
    if (!jaViu(v.id)) {
      state.visited.push(v.id);
      verificarConclusao();
      atualizarProgresso();
      salvar();
    }
    // Com o iframe na altura total, a rolagem é da página do Moodle; scrollIntoView rola os dois níveis.
    a.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- Altura automática dentro do player do Moodle ---------- */
  var frameAuto = null;   // iframe do player, quando acessível (mesma origem)

  function alturaNavbarPai() {
    try {
      var doc = frameAuto.ownerDocument;
      var nav = doc.querySelector(".navbar.fixed-top, nav.fixed-top, .navbar-fixed-top");
      return nav ? nav.offsetHeight : 0;
    } catch (e) { return 0; }
  }

  function irAoTopo() {
    if (frameAuto) {
      try {
        var pai = frameAuto.ownerDocument.defaultView;
        var topo = frameAuto.getBoundingClientRect().top - alturaNavbarPai();
        if (topo < 0) pai.scrollBy(0, topo - 8);   // só rola se o início do conteúdo saiu da tela
        return;
      } catch (e) { /* cai no padrão abaixo */ }
    }
    window.scrollTo(0, 0);
  }

  /* O tema do Moodle define #scorm_object com width: 98%, deixando uma faixa vazia ao lado.
     Como o pacote roda na mesma origem, ele mesmo corrige para 100% (e reaplica se o Moodle mexer). */
  function ajustarLarguraDoFrame(frame) {
    function aplicar() {
      if (frame.style.getPropertyValue("width") !== "100%" || frame.style.getPropertyPriority("width") !== "important") {
        frame.style.setProperty("width", "100%", "important");
      }
    }
    try {
      aplicar();
      if (typeof MutationObserver !== "undefined") {
        new MutationObserver(aplicar).observe(frame, { attributes: true, attributeFilter: ["style", "width"] });
      }
    } catch (e) { /* sem acesso ao iframe: o ajuste fica por conta do CSS do Moodle */ }
  }

  function ajustarAlturaAuto() {
    var frame = null;
    try { frame = window.frameElement; } catch (e) { frame = null; }
    if (!frame) return false;
    var pai;
    try {
      pai = frame.ownerDocument.defaultView;
      void pai.document.body;        // lança erro se for outra origem
    } catch (e) { return false; }

    ajustarLarguraDoFrame(frame);

    /* Em pop-up (janela aberta pelo Moodle, sem a barra do tema) o iframe já preenche a janela:
       a rolagem interna é a certa e a altura automática poderia cortar o conteúdo. */
    var temBarraDoMoodle = !!frame.ownerDocument.querySelector("nav.navbar, .navbar");
    var abertoPorOutraJanela = false;
    try { abertoPorOutraJanela = !!(pai.top && pai.top.opener); } catch (e) {}
    if (!temBarraDoMoodle || abertoPorOutraJanela) return false;

    frameAuto = frame;
    document.documentElement.className += " auto-altura";

    var ultima = 0;
    var aplicando = false;

    function medir() {
      return Math.ceil(document.body.getBoundingClientRect().height) + 2;
    }

    function liberarAncestrais(h) {
      var p = frame.parentElement;
      var n = 0;
      while (p && p !== frame.ownerDocument.body && n < 8) {
        try {
          var cs = pai.getComputedStyle(p);
          var fixo = parseFloat(cs.height) || 0;
          var corta = cs.overflowY === "hidden" || cs.overflowY === "auto" || cs.overflowY === "scroll";
          if (corta || (fixo > 0 && fixo < h)) {
            p.style.setProperty("height", "auto", "important");
            p.style.setProperty("max-height", "none", "important");
            p.style.setProperty("overflow", "visible", "important");
          }
        } catch (e) {}
        p = p.parentElement;
        n++;
      }
    }

    function aplicar() {
      if (aplicando) return;
      aplicando = true;
      try {
        var h = medir();
        ultima = h;
        frame.style.setProperty("height", h + "px", "important");
        frame.style.setProperty("min-height", h + "px", "important");
        frame.setAttribute("height", h);
        liberarAncestrais(h);
      } catch (e) {}
      aplicando = false;
    }

    aplicar();
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(function () { aplicar(); }).observe(document.body);
    } else {
      setInterval(aplicar, 500);
    }
    window.addEventListener("resize", aplicar);
    window.addEventListener("load", aplicar);

    // Se o Moodle reaplicar a altura dele (ao redimensionar a janela), devolve a nossa.
    if (typeof MutationObserver !== "undefined") {
      new MutationObserver(function () {
        if (!aplicando && frame.style.height !== ultima + "px") aplicar();
      }).observe(frame, { attributes: true, attributeFilter: ["style", "height"] });
    }
    return true;
  }

  /* ---------- Síntese ---------- */
  function renderSintese() {
    var s = $("v-sintese");
    var html = "<h2>Síntese</h2>";
    if (state.completed) {
      html += '<div class="conclusao"><strong>Atividade concluída.</strong> Você explorou todas as variações.</div>';
    } else {
      html += '<div class="card"><p style="margin:0">Você explorou ' + state.visited.length + " de " + TOTAL +
        " variações" + (EXIGIDAS_REFLEXOES > 0 ? " e enviou " + state.refl.length + " de " + EXIGIDAS_REFLEXOES + " reflexões" : "") +
        ". A síntese fica mais útil depois de ver todas, mas você pode consultá-la a qualquer momento. " +
        '<button class="btn sec" type="button" data-ir="variacoes" style="margin-left:6px">Voltar às variações</button></p></div>';
    }
    html +=
      '<div class="card pergunta"><h3>Antes de ver a tabela</h3>' +
      '<p style="font-weight:600;margin-top:0">Em uma frase: o que não mudou em nenhuma das variações?</p>' +
      '<button class="btn" type="button" id="btn-ideia">Mostrar a ideia central</button>' +
      '<div id="ideia" hidden>' +
      '<div class="tres"><div>PROTEGER<small>medidas de proteção antes de qualquer julgamento</small></div>' +
      '<div>REGISTRAR<small>de forma objetiva e sigilosa</small></div>' +
      '<div>COMUNICAR<small>às autoridades e aos Escoteiros do Brasil</small></div></div></div></div>' +
      "<h3>Todas as variações lado a lado</h3>" +
      '<table><thead><tr><th>#</th><th>Variação</th><th>O que ela ensina</th></tr></thead><tbody>';
    C.variacoes.forEach(function (v) {
      html += '<tr><td class="n">' + v.id + "</td><td><strong>" + esc(v.titulo) + "</strong><br><span style=\"color:var(--tinta-suave)\">" +
        esc(v.ese) + '</span></td><td data-label="O que ela ensina">' + esc(v.sintese) + "</td></tr>";
    });
    html += "</tbody></table>" +
      '<div class="card" style="margin-top:20px"><h3>Princípios que devem guiar a atuação do grupo</h3>' + lista(C.principios, "check") + "</div>" +
      '<div class="card destaque"><h3>Para levar consigo</h3>' + lista(C.levarConsigo, "check") + "</div>";
    s.innerHTML = html;
    ligarIr(s);
    $("btn-ideia").addEventListener("click", function () {
      $("ideia").hidden = false;
      this.hidden = true;
    });
  }

  /* ---------- Referências ---------- */
  function renderRefs() {
    $("v-refs").innerHTML = "<h2>Referências</h2>" + '<div class="card">' + listaRefs(C.referencias) + "</div>";
  }

  /* ---------- início ---------- */
  function iniciar() {
    Scorm.init();
    carregar();
    ajustarAlturaAuto();
    $("btn-topo").addEventListener("click", irAoTopo);
    // Links “Variação N” dentro dos textos (valem para qualquer tela, inclusive conteúdo inserido depois).
    document.addEventListener("click", function (e) {
      var el = e.target;
      while (el && el !== document && !(el.classList && el.classList.contains("ref-var"))) el = el.parentNode;
      if (!el || el === document) return;
      e.preventDefault();
      var origem = (state.view === "variacoes") ? state.openVar : null;
      state.openVar = parseInt(el.getAttribute("data-ref"), 10);
      state.veioDe = origem;
      if (state.view === "variacoes") { renderVariacoes(); irAoTopo(); $("conteudo").focus({ preventScroll: true }); }
      else mostrar("variacoes");
    });
    $("titulo-curso").textContent = C.titulo;
    if (C.rotulo) $("rotulo-curso").textContent = C.rotulo;
    $("prog-total").textContent = TOTAL;
    montarMenu();
    atualizarProgresso();
    var inicial = state.view;
    var valida = VIEWS.some(function (v) { return v.id === inicial; });
    mostrar(valida ? inicial : "inicio", true);
    Scorm.commit();
  }

  window.addEventListener("beforeunload", function () { Scorm.finish(); });
  window.addEventListener("unload", function () { Scorm.finish(); });
  window.addEventListener("pagehide", function () { Scorm.finish(); });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
