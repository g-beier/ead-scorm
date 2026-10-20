/* Kit de componentes para pacotes SCORM do curso (Moodle, Campo Escola Virtual).
   Funções puras de montagem de HTML e comportamento reutilizável. O conteúdo fica sempre fora deste arquivo.
   Depende de: scorm.js (objeto Scorm). Uso: carregar scorm.js, kit.js e, se houver iframe no Moodle, moodle.js. */
var Kit = (function () {
  "use strict";

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function $(root, sel) { return (root || document).querySelector(sel); }
  function $$(root, sel) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- texto e listas ---------- */
  /* lista(itens, cls, opcoes): cls = "check" | "cruz" | "" ; opcoes.mencao(textoEscapado) -> html (opcional) para transformar menções. */
  function lista(itens, cls, opcoes) {
    var mencao = opcoes && opcoes.mencao;
    return '<ul class="lista ' + (cls || "") + '">' + itens.map(function (t) {
      var s = esc(t);
      return "<li>" + (mencao ? mencao(s) : s) + "</li>";
    }).join("") + "</ul>";
  }

  /* Ícone de corrente para links externos (decorativo; o texto para leitor de tela fica no link). */
  var ICONE_LINK = '<svg class="ico-link" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false">' +
    '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* Referências: texto simples ou { titulo, detalhe, url }. Com url, o título vira link em nova aba. */
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

  /* Bloco "O que muda / O que não muda" (duas colunas que quebram em uma só em telas estreitas). */
  function dois(colunas) {
    return '<div class="dois">' + colunas.map(function (c) {
      return '<div class="card ' + (c.cls || "") + '"><h3>' + (c.icone ? '<span class="ic">' + esc(c.icone) + "</span>" : "") +
        esc(c.titulo) + "</h3>" + lista(c.itens, c.lista || "") + "</div>";
    }).join("") + "</div>";
  }

  /* ---------- quiz de múltipla escolha com retorno por alternativa ---------- */
  /* cfg: { enunciado, opcoes: [{ texto, correta, fb }], onVerificado(tudoCerto) }
     Marcar uma correta mostra o fb em verde; marcar errada mostra "Errado. " + fb em vermelho;
     deixar de marcar uma correta mostra "Faltou marcar esta. " + fb. */
  function quiz(el, cfg) {
    el.innerHTML =
      '<p class="quiz-enunciado">' + esc(cfg.enunciado) + "</p>" +
      '<div class="quiz-opcoes"></div>' +
      '<div class="quiz-resultado" aria-live="polite"></div>' +
      '<div class="acoes">' +
      '<button class="btn" type="button" data-q="verificar">Verificar respostas</button>' +
      '<button class="btn sec" type="button" data-q="refazer" hidden>Tentar de novo</button></div>';
    var box = $(el, ".quiz-opcoes");
    cfg.opcoes.forEach(function (o, i) {
      var lab = document.createElement("label");
      lab.className = "opcao";
      lab.innerHTML = '<input type="checkbox" data-i="' + i + '"> ' + esc(o.texto) + '<span class="fb" hidden></span>';
      box.appendChild(lab);
    });
    var resultado = $(el, ".quiz-resultado");
    var btnVerificar = $(el, '[data-q="verificar"]');
    var btnRefazer = $(el, '[data-q="refazer"]');

    function reabilitar() {
      $$(el, "input").forEach(function (inp) {
        inp.disabled = false;
        inp.parentNode.classList.remove("ok", "erro");
        inp.parentNode.querySelector(".fb").hidden = true;
      });
    }

    btnVerificar.addEventListener("click", function () {
      var inputs = $$(el, "input");
      var algum = inputs.some(function (inp) { return inp.checked; });
      if (!algum) {
        resultado.innerHTML = '<div class="resultado parcial">Marque ao menos uma alternativa antes de verificar.</div>';
        return;
      }
      var tudoCerto = true;
      inputs.forEach(function (inp, i) {
        var o = cfg.opcoes[i];
        var marcado = inp.checked;
        var lab = inp.parentNode;
        var fb = lab.querySelector(".fb");
        lab.classList.remove("ok", "erro");
        fb.hidden = true;
        inp.disabled = true;
        if (marcado === o.correta) {
          if (o.correta) { lab.classList.add("ok"); fb.textContent = o.fb; fb.hidden = false; }
        } else {
          tudoCerto = false;
          lab.classList.add("erro");
          fb.textContent = (o.correta ? "Faltou marcar esta. " : "Errado. ") + o.fb;
          fb.hidden = false;
        }
      });
      btnVerificar.hidden = true;
      btnRefazer.hidden = false;
      resultado.innerHTML = tudoCerto
        ? '<div class="resultado bom">' + esc(cfg.msgAcerto || "Muito bem: sua resposta coincide com o esperado.") + "</div>"
        : '<div class="resultado parcial">' + esc(cfg.msgRevisar || "Alguns pontos merecem revisão. Veja os comentários nas alternativas.") + "</div>";
      if (cfg.onVerificado) cfg.onVerificado(tudoCerto);
    });

    btnRefazer.addEventListener("click", function () {
      reabilitar();
      resultado.innerHTML = "";
      btnVerificar.hidden = false;
      btnRefazer.hidden = true;
    });
  }

  /* ---------- reflexão com envio ao LMS ---------- */
  /* cfg: { id, minChars (10), maxChars (500), opcional (true), aviso, enviada (bool), onEnviada(texto) }
     O texto vai para o Relatório de interações do Moodle pelo Scorm.gravarResposta (dividido em partes de 250). */
  function reflexao(el, cfg) {
    var MIN = cfg.minChars || 10, MAX = cfg.maxChars || 500;
    if (cfg.enviada) {
      el.innerHTML = '<p class="enviada">✓ Reflexão enviada. Obrigado por compartilhar.</p>';
      return;
    }
    el.innerHTML =
      '<label class="nota" style="display:block;margin-bottom:6px">Escreva sua reflexão' + (cfg.opcional === false ? "" : " (opcional)") + ".</label>" +
      '<textarea maxlength="' + MAX + '" rows="4"></textarea>' +
      '<p class="nota" aria-live="polite">0/' + MAX + "</p>" +
      (cfg.aviso ? '<p class="nota aviso-refl">' + esc(cfg.aviso) + "</p>" : "") +
      '<div class="acoes"><button class="btn" type="button" disabled>Enviar reflexão</button></div>' +
      '<div role="status" aria-live="polite"></div>';
    var ta = $(el, "textarea"), cont = $(el, "p.nota[aria-live]"), btn = $(el, "button"), status = $(el, '[role="status"]');
    ta.addEventListener("input", function () {
      cont.textContent = ta.value.length + "/" + MAX;
      btn.disabled = ta.value.replace(/\s+/g, " ").replace(/^ | $/g, "").length < MIN;
    });
    btn.addEventListener("click", function () {
      if (!Scorm.gravarResposta(cfg.id, ta.value)) {
        status.innerHTML = '<div class="resultado parcial">Não foi possível enviar agora. Seu texto continua na tela: tente novamente.</div>';
        return;
      }
      ta.readOnly = true;
      btn.hidden = true;
      status.innerHTML = '<p class="enviada">✓ Reflexão enviada. Obrigado por compartilhar.</p>';
      if (cfg.onEnviada) cfg.onEnviada(ta.value);
    });
  }

  /* ---------- progresso e navegação ---------- */
  /* els: { num, total, fill, barra, menuNum, menuTotal, mini } (ids dos elementos; só os presentes são atualizados) */
  function progresso(els, feitas, total) {
    var pct = total ? Math.round((feitas / total) * 100) : 0;
    function set(id, txt) { var e = document.getElementById(id); if (e) e.textContent = txt; }
    function style(id, w) { var e = document.getElementById(id); if (e) e.style.width = w; }
    set(els.num, feitas); set(els.total, total);
    set(els.menuNum, feitas); set(els.menuTotal, total);
    style(els.fill, pct + "%"); style(els.mini, pct + "%");
    var b = document.getElementById(els.barra);
    if (b) b.setAttribute("aria-valuenow", pct);
  }

  /* Monta as etapas em uma <ul> (cada item é um botão com data-view). onIr(id) é chamado no clique. */
  function montarMenu(ul, etapas, onIr) {
    ul.innerHTML = "";
    etapas.forEach(function (v) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = v.rotulo;
      b.setAttribute("data-view", v.id);
      b.addEventListener("click", function () { onIr(v.id); });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  /* Marca a etapa atual (aria-current) e centraliza o botão quando a barra rola na horizontal (celular). */
  function marcarAtual(ul, id) {
    $$(ul, "button").forEach(function (b) {
      if (b.getAttribute("data-view") === id) {
        b.setAttribute("aria-current", "page");
        ul.scrollLeft = b.parentNode.offsetLeft - (ul.clientWidth - b.offsetWidth) / 2;
      } else {
        b.removeAttribute("aria-current");
      }
    });
  }

  /* Mostra uma seção (<section class="view" id="v-<id>">) e esconde as outras. */
  function mostrarView(ids, id) {
    ids.forEach(function (x) {
      var sec = document.getElementById("v-" + x);
      if (sec) sec.hidden = (x !== id);
    });
  }

  /* Marca o pacote como concluído no LMS (chamar só quando a regra de conclusão do pacote for cumprida). */
  function concluir() {
    if (Scorm.get("cmi.core.lesson_status") !== "completed") Scorm.set("cmi.core.lesson_status", "completed");
    Scorm.commit();
  }

  return {
    esc: esc,
    lista: lista,
    listaRefs: listaRefs,
    dois: dois,
    quiz: quiz,
    reflexao: reflexao,
    progresso: progresso,
    montarMenu: montarMenu,
    marcarAtual: marcarAtual,
    mostrarView: mostrarView,
    concluir: concluir,
    ICONE_LINK: ICONE_LINK
  };
})();
