(function () {
  // Cada fluxo vira uma tela própria, com a sua sugestão
  function expandirFluxos(slides) {
    var out = [];
    slides.forEach(function (s) {
      if (!s.fluxos || s.fluxos.length < 2) { out.push(s); return; }
      var n = s.fluxos.length;
      s.fluxos.forEach(function (f, k) {
        var ultimo = (k === n - 1);
        out.push({
          kicker: (s.kicker || "") + " · " + (k + 1) + " de " + n,
          titulo: s.titulo,
          paras: k === 0 ? s.paras : null,
          fluxos: [f],
          contraste: ultimo ? s.contraste : null,
          destaque: ultimo ? s.destaque : null,
          fonte: ultimo ? s.fonte : null
        });
      });
    });
    return out;
  }

  var C = { contexto: window.CONTEUDO.contexto, slides: expandirFluxos(window.CONTEUDO.slides) };
  var stage = document.getElementById("stage");
  var modaisBox = document.getElementById("modais");
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var bar = document.getElementById("bar");
  var counter = document.getElementById("counter");
  var contexto = document.getElementById("contexto");
  var total = C.slides.length;
  var current = 0;

  // Progresso que define a conclusão
  var visitadas = {};      // índices de telas já exibidas
  var abertos = {};        // ids de modais já abertos
  var fluxosOk = {};       // índices de fluxos cuja sugestão foi lida
  var totalModais = 0;
  var totalFluxos = 0;
  var totalQuiz = 0;
  var qRes = {};           // índice da pergunta -> opção escolhida
  var quizUI = [];
  var quizDaTela = {};     // índice da tela -> perguntas dela
  var fluxosDaTela = {};   // índice da tela -> fluxos dela
  var modaisDaTela = {};   // índice da tela -> ids dos modais dela
  var avisos = {};         // índice da tela -> aviso de "falta fazer algo para avançar"
  var quizAvisos = {};     // índice da tela -> aviso "responda para avançar"         // referências de tela de cada pergunta
  var concluido = false;

  contexto.textContent = C.contexto;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function paras(parent, lista, cls) {
    (lista || []).forEach(function (t) { parent.appendChild(el("p", cls, t)); });
  }

  function lista(parent, itens) {
    if (!itens || !itens.length) return;
    var ul = el("ul");
    itens.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    parent.appendChild(ul);
  }

  var CORES = ["navy", "green", "red", "yellow"];

  // Embaralha índices, garantindo que a ordem não seja a da solução
  function embaralhar(n) {
    var ordem = [];
    for (var i = 0; i < n; i++) ordem.push(i);
    if (n < 2) return ordem;
    for (var tent = 0; tent < 20; tent++) {
      for (var k = ordem.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var t = ordem[k]; ordem[k] = ordem[j]; ordem[j] = t;
      }
      var igual = ordem.every(function (v, idx) { return v === idx; });
      if (!igual) break;
    }
    return ordem;
  }

  function criarCard(f, solIdx) {
    var li = el("li", "drag-card c-" + CORES[solIdx % CORES.length]);
    li.setAttribute("tabindex", "0");
    li.setAttribute("data-id", solIdx);
    li.appendChild(el("span", "drag-text", f.passos[solIdx]));
    return li;
  }

  // Bloco interativo: arrastar os cards e conferir a ordem
  function renderFluxo(f, idx) {
    var n = f.passos.length;
    var bloco = el("div", "flow-block");
    bloco.setAttribute("data-fluxo", idx);
    bloco.appendChild(el("p", "flow-name", f.nome));
    bloco.appendChild(el("p", "flow-help", "Arraste os cards para colocar os passos na ordem em que acontecem. Também dá para usar as setas ↑ ↓ do teclado."));

    var ol = el("ol", "drag-list");
    ol.setAttribute("aria-label", "Ordem dos passos: " + f.nome);
    embaralhar(n).forEach(function (solIdx) { ol.appendChild(criarCard(f, solIdx)); });
    bloco.appendChild(ol);

    var acoes = el("div", "flow-actions");
    var bVer = el("button", "btn-act", "Verificar ordem");
    bVer.type = "button";
    var bEmb = el("button", "btn-act sec", "Embaralhar");
    bEmb.type = "button";
    acoes.appendChild(bVer);
    acoes.appendChild(bEmb);
    bloco.appendChild(acoes);

    var fb = el("p", "feedback");
    fb.setAttribute("aria-live", "polite");
    bloco.appendChild(fb);

    // Sugestão em accordion: fechada por padrão; pode ser recolhida após a leitura
    var det = el("details", "sugestao");
    var resumo = el("summary", null, "Ver sugestão e o porquê");
    det.appendChild(resumo);
    var corpo = el("div", "sug-corpo");
    var solOl = el("ol", "sug-list");
    f.passos.forEach(function (p) { solOl.appendChild(el("li", null, p)); });
    corpo.appendChild(el("h3", null, "Sugestão de ordem"));
    corpo.appendChild(solOl);
    corpo.appendChild(el("p", "porque", "<strong>Por quê:</strong> " + f.porque));
    corpo.appendChild(el("p", "nota", "Esta é uma sugestão. Outra UEL pode definir uma sequência diferente, desde que cada passo tenha um responsável."));
    if (f.nota) corpo.appendChild(el("div", "nota-fluxo", f.nota));
    det.appendChild(corpo);
    bloco.appendChild(det);

    det.addEventListener("toggle", function () {
      if (det.open && !fluxosOk[idx]) {
        fluxosOk[idx] = true;
        atualizarNav();
        verificarConclusao();
        salvarEstado();
        if (lmsOn) Scorm.commit();
      }
    });

    function ordemAtual() {
      return Array.prototype.map.call(ol.children, function (li) { return Number(li.getAttribute("data-id")); });
    }

    bVer.addEventListener("click", function () {
      var ord = ordemAtual();
      var fora = 0;
      ord.forEach(function (v, pos) { if (v !== pos) fora++; });
      if (fora === 0) {
        fb.className = "feedback ok";
        fb.textContent = "Ordem correta. Veja abaixo por que ela funciona.";
        det.open = true;
      } else {
        fb.className = "feedback erro";
        fb.textContent = (fora === 1 ? "1 passo está fora de lugar." : fora + " passos estão fora de lugar.") + " Tente de novo ou abra a sugestão.";
      }
    });

    bEmb.addEventListener("click", function () {
      while (ol.firstChild) ol.removeChild(ol.firstChild);
      embaralhar(n).forEach(function (solIdx) { ol.appendChild(criarCard(f, solIdx)); });
      fb.className = "feedback";
      fb.textContent = "";
    });

    // ---------- Arrastar: o card acompanha o ponteiro e os demais abrem espaço ----------
    var arrastando = null;
    var grab = 0;           // distância entre o ponteiro e o topo do card no momento do clique
    var olTop = 0;

    function posicionar(y) {
      var alvo = (y - grab) - (olTop + arrastando.offsetTop);
      arrastando.style.transform = "translateY(" + alvo + "px)";
    }

    // Guarda a posição de layout (offsetTop) de cada card que não está sendo arrastado
    function capturar() {
      return Array.prototype.filter.call(ol.children, function (c) { return c !== arrastando; })
        .map(function (c) { return { el: c, top: c.offsetTop }; });
    }

    // Animação: cada card volta da posição antiga para a nova
    function animar(antes) {
      antes.forEach(function (item) {
        var d = item.top - item.el.offsetTop;
        if (Math.abs(d) < 0.5) return;
        item.el.style.transition = "none";
        item.el.style.transform = "translateY(" + d + "px)";
        void item.el.offsetHeight; // força o navegador a aplicar o estado inicial
        item.el.style.transition = "transform 0.2s ease";
        item.el.style.transform = "";
      });
    }

    ol.addEventListener("pointerdown", function (e) {
      var li = e.target.closest(".drag-card");
      if (!li || e.button > 0) return;
      e.preventDefault();
      arrastando = li;
      grab = e.clientY - li.getBoundingClientRect().top;
      olTop = ol.getBoundingClientRect().top;
      li.classList.add("dragging");
      li.style.transition = "none";
      li.style.zIndex = "2";
      ol.setPointerCapture(e.pointerId);
      posicionar(e.clientY);
    });

    ol.addEventListener("pointermove", function (e) {
      if (!arrastando) return;
      var y = e.clientY;
      olTop = ol.getBoundingClientRect().top;

      // Procura a posição: antes do primeiro card cujo meio esteja abaixo do ponteiro
      var alvo = null;
      var itens = Array.prototype.slice.call(ol.children);
      for (var k = 0; k < itens.length; k++) {
        var it = itens[k];
        if (it === arrastando) continue;
        var meio = olTop + it.offsetTop + it.offsetHeight / 2;
        if (y < meio) { alvo = it; break; }
      }

      var mudou = alvo
        ? arrastando.nextElementSibling !== alvo
        : ol.lastElementChild !== arrastando;

      if (mudou) {
        var antes = capturar();
        if (alvo) ol.insertBefore(arrastando, alvo);
        else ol.appendChild(arrastando);
        animar(antes);
      }
      posicionar(y);
    });

    function soltar() {
      if (!arrastando) return;
      var li = arrastando;
      arrastando = null;
      li.classList.remove("dragging");
      // Assenta o card na posição final
      li.style.transition = "transform 0.18s ease";
      li.style.transform = "";
      setTimeout(function () { li.style.transition = ""; li.style.zIndex = ""; }, 200);
    }
    ol.addEventListener("pointerup", soltar);
    ol.addEventListener("pointercancel", soltar);

    // Teclado: setas movem o card focado
    ol.addEventListener("keydown", function (e) {
      var li = e.target.closest(".drag-card");
      if (!li) return;
      if (e.key === "ArrowUp" && li.previousElementSibling) {
        e.preventDefault();
        ol.insertBefore(li, li.previousElementSibling);
        li.focus();
      } else if (e.key === "ArrowDown" && li.nextElementSibling) {
        e.preventDefault();
        ol.insertBefore(li.nextElementSibling, li);
        li.focus();
      }
    });

    return bloco;
  }

  function aplicarQuiz(ui, escolha) {
    var q = ui.q, btns = ui.btns, fb = ui.fb;
    btns.forEach(function (b) { b.disabled = true; });
    btns[q.correta].classList.add("certa");
    if (escolha !== q.correta) btns[escolha].classList.add("errada");
    fb.className = "quiz-fb " + (escolha === q.correta ? "ok" : "erro");
    fb.textContent = (escolha === q.correta ? "Correto. " : "Não é esse. ") + q.explica;
  }

  function renderQuiz(s, idx) {
    quizDaTela[idx] = [];
    var wrap = el("div", "quiz");
    s.quiz.forEach(function (q) {
      var qi = totalQuiz++;
      quizDaTela[idx].push(qi);
      var box = el("div", "quiz-q");
      box.appendChild(el("p", "quiz-pergunta", q.pergunta));
      var ops = el("div", "quiz-opcoes");
      var btns = [];
      var fb = el("p", "quiz-fb");
      fb.setAttribute("aria-live", "polite");
      q.opcoes.forEach(function (txt, oi) {
        var b = el("button", "quiz-opc", txt);
        b.type = "button";
        b.addEventListener("click", function () {
          if (qRes[qi] !== undefined) return;
          qRes[qi] = oi;
          aplicarQuiz(quizUI[qi], oi);
          atualizarNav();
          verificarConclusao();
          salvarEstado();
          if (lmsOn) Scorm.commit();
        });
        btns.push(b);
        ops.appendChild(b);
      });
      box.appendChild(ops);
      box.appendChild(fb);
      wrap.appendChild(box);
      quizUI[qi] = { q: q, btns: btns, fb: fb };
    });
    return wrap;
  }

  function restaurarQuiz() {
    Object.keys(qRes).forEach(function (k) {
      if (quizUI[k]) aplicarQuiz(quizUI[k], qRes[k]);
    });
  }

  // Roteiro em linha do tempo, no formato de percurso do guia visual
  function renderLinha(itens) {
    var box = el("div", "timeline");
    var cores = ["navy", "green", "red", "yellow"];
    itens.forEach(function (it, i) {
      var row = el("div", "tl-row");
      row.appendChild(el("div", "tl-n c-" + cores[i % cores.length], String(i + 1)));
      var p = el("div", "tl-p");
      p.appendChild(el("h3", null, it.titulo));
      p.appendChild(el("p", null, it.texto));
      row.appendChild(p);
      box.appendChild(row);
    });
    return box;
  }

  function renderSlide(s, idx) {
    var sec = el("section", "slide" + (s.tipo === "capa" ? " cover" : "") + (s.tipo === "fim" ? " finish" : ""));
    sec.dataset.index = idx;

    if (s.tipo === "fim") {
      var box = el("div", "finish-box");
      box.appendChild(el("h1", null, s.titulo));
      sec.appendChild(box);
      sec.appendChild(el("p", "finish-next", s.texto));
      sec.appendChild(el("p", "pendencias", ""));
      sec.setAttribute("data-fim", "1");
      return sec;
    }

    if (s.kicker) sec.appendChild(el("p", "kicker", s.kicker));
    sec.appendChild(el("h1", null, s.titulo));
    if (s.tipo === "capa") {
      sec.appendChild(el("p", "cover-sub", s.sub));
      return sec;
    }

    paras(sec, s.paras);
    lista(sec, s.lista);

    if (s.cards && s.cards.length) {
      var grid = el("div", "grid");
      s.cards.forEach(function (c) {
        var card = el("div", "card c-" + c.cor);
        if (c.titulo) card.appendChild(el("h3", null, c.titulo));
        paras(card, c.paras);
        lista(card, c.lista);
        grid.appendChild(card);
      });
      sec.appendChild(grid);
    }

    if (s.fluxos) {
      s.fluxos.forEach(function (f) {
        fluxosDaTela[idx] = (fluxosDaTela[idx] || []).concat([totalFluxos]);
        sec.appendChild(renderFluxo(f, totalFluxos));
        totalFluxos++;
      });
    }

    if (s.linha) sec.appendChild(renderLinha(s.linha));

    if (s.quiz) sec.appendChild(renderQuiz(s, idx));

    if (s.contraste) {
      var cg = el("div", "grid contraste");
      s.contraste.forEach(function (c) {
        var cc = el("div", "card c-" + c.cor);
        cc.appendChild(el("h3", null, c.titulo));
        cc.appendChild(el("p", null, c.texto));
        cg.appendChild(cc);
      });
      sec.appendChild(cg);
    }

    if (s.destaque) sec.appendChild(el("div", "callout", s.destaque));

    if (s.modais) {
      s.modais.forEach(function (m) {
        var b = el("button", "btn-more", m.botao);
        b.type = "button";
        b.setAttribute("data-modal", m.id);
        modaisDaTela[idx] = (modaisDaTela[idx] || []).concat([m.id]);
        sec.appendChild(b);
      });
    }

    var aviso = el("p", "quiz-aviso", "");
    aviso.hidden = true;
    avisos[idx] = aviso;
    sec.appendChild(aviso);

    if (s.fonte) sec.appendChild(el("p", "source", s.fonte));
    return sec;
  }

  // Telas
  C.slides.forEach(function (s, i) { stage.appendChild(renderSlide(s, i)); });

  // Modais
  C.slides.forEach(function (s) {
    (s.modais || []).forEach(function (m) {
      totalModais++;
      var ov = el("div", "overlay");
      ov.id = m.id;
      ov.hidden = true;
      var md = el("div", "modal");
      var close = el("button", "close", "×");
      close.type = "button";
      close.setAttribute("aria-label", "Fechar");
      md.appendChild(close);
      md.appendChild(el("h2", null, m.titulo));
      paras(md, m.paras);
      ov.appendChild(md);
      modaisBox.appendChild(ov);
    });
  });

  var slides = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
  var fimEl = stage.querySelector("[data-fim]");
  var pendEl = fimEl.querySelector(".pendencias");

  // ---------- Persistência (SCORM 1.2) ----------
  var lmsOn = Scorm.init();

  function salvarEstado() {
    if (!lmsOn) return;
    var estado = {
      v: Object.keys(visitadas).map(Number),
      m: Object.keys(abertos),
      f: Object.keys(fluxosOk).map(Number),
      q: qRes
    };
    Scorm.set("cmi.suspend_data", JSON.stringify(estado));
    Scorm.set("cmi.core.lesson_location", current);
  }

  function carregarEstado() {
    var raw = Scorm.get("cmi.suspend_data");
    if (raw) {
      try {
        var est = JSON.parse(raw);
        (est.v || []).forEach(function (i) { visitadas[i] = true; });
        (est.m || []).forEach(function (id) { abertos[id] = true; });
        (est.f || []).forEach(function (i) { fluxosOk[i] = true; });
        qRes = est.q || {};
      } catch (e) { /* dados inválidos: começa do zero */ }
    }
    var loc = parseInt(Scorm.get("cmi.core.lesson_location"), 10);
    if (!isNaN(loc) && loc >= 0 && loc < total) current = loc;
    concluido = (Scorm.get("cmi.core.lesson_status") === "completed");
  }

  if (lmsOn) {
    carregarEstado();
    restaurarQuiz();
    var st = Scorm.get("cmi.core.lesson_status");
    if (!st || st === "not attempted") Scorm.set("cmi.core.lesson_status", "incomplete");
    Scorm.commit();
  }

  // Conclusão: todas as telas, todos os modais e a sugestão de cada fluxo lida
  function pendencias() {
    var telas = total - Object.keys(visitadas).length;
    var mod = totalModais - Object.keys(abertos).length;
    var flu = totalFluxos - Object.keys(fluxosOk).length;
    var partes = [];
    if (telas > 0) partes.push(telas + (telas === 1 ? " tela ainda não visualizada" : " telas ainda não visualizadas"));
    if (mod > 0) partes.push(mod + (mod === 1 ? " caixa de “saiba mais” ainda não aberta" : " caixas de “saiba mais” ainda não abertas"));
    if (flu > 0) partes.push(flu + (flu === 1 ? " sugestão de tarefa ainda não lida" : " sugestões de tarefa ainda não lidas"));
    var quz = totalQuiz - Object.keys(qRes).length;
    if (quz > 0) partes.push(quz + (quz === 1 ? " pergunta ainda não respondida" : " perguntas ainda não respondidas"));
    return partes;
  }

  function verificarConclusao() {
    if (concluido) return;
    if (pendencias().length === 0) {
      concluido = true;
      if (lmsOn) Scorm.set("cmi.core.lesson_status", "completed");
    }
  }

  function atualizarFim() {
    if (concluido) {
      pendEl.textContent = "Atividade concluída. Seu progresso foi registrado.";
      return;
    }
    var p = pendencias();
    pendEl.textContent = p.length
      ? "Para concluir, falta: " + p.join(" e ") + "."
      : "";
  }

  // Indicador "há mais conteúdo abaixo": aparece só quando a tela ainda tem trecho para rolar
  var cue = el("button", "mais-cue", "↓ Role para ver o restante desta tela");
  cue.type = "button";
  cue.hidden = true;
  var rodape = document.querySelector(".footer");
  rodape.parentNode.insertBefore(cue, rodape);
  cue.addEventListener("click", function () {
    stage.scrollBy({ top: stage.clientHeight * 0.8, behavior: "smooth" });
  });

  function atualizarMais() {
    var falta = stage.scrollHeight - stage.clientHeight - stage.scrollTop;
    cue.hidden = falta < 16;
  }
  stage.addEventListener("scroll", atualizarMais, { passive: true });
  stage.addEventListener("toggle", atualizarMais, true);
  window.addEventListener("resize", atualizarMais);

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  // Cada tela libera "Próximo" só depois das ações que ela cobra:
  // perguntas respondidas, sugestões abertas e caixas "saiba mais" abertas.
  // Assim, no fim da leitura, não sobra nada para procurar.
  function pendenciaTela(i) {
    var pend = [];
    var qs = quizDaTela[i] || [];
    if (qs.some(function (qi) { return qRes[qi] === undefined; })) pend.push("Responda todas as perguntas para avançar.");
    var fl = fluxosDaTela[i] || [];
    if (fl.some(function (k) { return !fluxosOk[k]; })) pend.push("Abra a sugestão para avançar.");
    var md = modaisDaTela[i] || [];
    if (md.some(function (id) { return !abertos[id]; })) pend.push("Abra as caixas “saiba mais” para avançar.");
    return pend;
  }

  function telaBloqueada(i) {
    return pendenciaTela(i).length > 0;
  }

  function atualizarNav() {
    var p = pendenciaTela(current);
    var bloq = p.length > 0;
    nextBtn.disabled = (current === total - 1) || bloq;
    atualizarMais();
    if (avisos[current]) {
      avisos[current].textContent = p.join(" ");
      avisos[current].hidden = !bloq;
    }
  }

  function show(i) {
    if (i > current && telaBloqueada(current)) return;
    if (i < 0) i = 0;
    if (i > total - 1) i = total - 1;
    current = i;
    visitadas[i] = true;

    slides.forEach(function (s, k) { s.classList.toggle("active", k === i); });
    prevBtn.disabled = (i === 0);
    atualizarNav();
    bar.style.width = ((i + 1) / total * 100) + "%";
    counter.textContent = pad(i + 1) + " / " + pad(total);

    stage.scrollTop = 0;
    atualizarMais();

    verificarConclusao();
    if (i === total - 1) atualizarFim();
    salvarEstado();
    if (lmsOn) Scorm.commit();
  }

  prevBtn.addEventListener("click", function () { show(current - 1); });
  nextBtn.addEventListener("click", function () { if (current < total - 1) show(current + 1); });

  // ---------- Modais ----------
  function closeModals() {
    Array.prototype.forEach.call(document.querySelectorAll(".overlay"), function (o) { o.hidden = true; });
  }

  document.addEventListener("click", function (e) {
    var op = e.target.closest && e.target.closest("[data-modal]");
    if (op) {
      var id = op.getAttribute("data-modal");
      var m = document.getElementById(id);
      if (m) {
        m.hidden = false;
        abertos[id] = true;
        atualizarNav();
        verificarConclusao();
        salvarEstado();
        if (lmsOn) Scorm.commit();
        var c = m.querySelector(".close");
        if (c) c.focus();
      }
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll(".overlay"), function (o) {
    o.addEventListener("click", function (e) {
      if (e.target === o || e.target.classList.contains("close")) closeModals();
    });
  });

  // ---------- Teclado e toque ----------
  document.addEventListener("keydown", function (e) {
    if (document.querySelector(".overlay:not([hidden])")) {
      if (e.key === "Escape") closeModals();
      return;
    }
    // Setas dentro de um card arrastável movem o card, não trocam de tela
    if (e.target.closest && e.target.closest(".drag-list")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") show(current + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") show(current - 1);
  });

  var tx = null;
  stage.addEventListener("touchstart", function (e) {
    tx = e.target.closest && e.target.closest(".drag-list") ? null : e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx;
    tx = null;
    if (Math.abs(dx) > 60) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  window.addEventListener("beforeunload", function () {
    if (lmsOn) {
      salvarEstado();
      Scorm.finish();
    }
  });

  show(current);
})();
