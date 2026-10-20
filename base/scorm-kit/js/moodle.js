/* Ajuste de altura e largura dentro do player do Moodle (extraído do estudo de caso, sem alterações de lógica). */
var MoodleAltura = (function () {
  "use strict";
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

  return { ajustar: ajustarAlturaAuto, irAoTopo: irAoTopo };
})();
