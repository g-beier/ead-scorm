# Guia visual e de componentes dos pacotes SCORM

Vale para os pacotes SCORM 1.2 do curso técnico (Campo Escola Virtual). Parte do estudo de caso de proteção infantojuvenil no escotismo, aprovado pelo cliente.

## 1. Identidade

- Cores (tokens em `:root` do `kit.css`): azul-marinho `#1b1f4b`, azul escuro da barra `#12163a`, verde `#19653e`, vermelho `#a91d22`, amarelo `#fcb913`. Tintas claras: azul `#eceefa`, verde `#e3f1e9`, vermelho `#fbe9ea`, amarelo `#fff6dc`. Texto `#231f20`; secundário `#5b5d73`; bordas `#dcdde8`; fundo `#f6f6fa`.
- Fontes: Poppins (textos) e Krona One (títulos), em `fonts/` (licença OFL incluída).
- Cantos arredondados: cartões 10px, botões 8px, pílulas 99px.
- Sombras só na barra de etapas e no hover dos cartões de variação.
- Rodapé em faixa tricolor (verde, vermelho, amarelo).

## 2. Componentes

| Componente | Como usar |
|---|---|
| Cabeçalho com progresso | `.topo`, `.progresso`, `Kit.progresso(...)` |
| Barra de etapas | `Kit.montarMenu(ul, etapas, onIr)`, `Kit.marcarAtual(ul, id)` |
| Cartões | `.card` com `.destaque`, `.alerta`, `.alerta.forte`, `.pergunta` |
| Duas colunas | `Kit.dois([...])` ou `.dois` com `.col-muda` e `.col-nao` |
| Lista com marcas | `Kit.lista(itens, "check")` ou `"cruz"` |
| Quiz | `Kit.quiz(el, {enunciado, opcoes:[{texto, correta, fb}], onVerificado})` |
| Passos recolhíveis | `<details class="passo">` com `.num` e `.corpo` |
| Grade de cartões | `.grade` > `button.cartao`; `.vista` quando já explorado |
| Pense antes e revelar | `.pense` + botão que mostra a análise |
| Síntese em destaque | `.sintese-uma` |
| Reflexão enviada ao LMS | `Kit.reflexao(el, {id, aviso, enviada, onEnviada})` |
| Tabela que vira blocos | `<table>` com `td[data-label]` |
| Três destaques | `.tres` > `div` com `small` |
| Referências com link | `Kit.listaRefs([...])`; item com `url` abre em nova aba |
| Conclusão | `.conclusao`, `Kit.concluir()` |
| Altura no Moodle | `MoodleAltura.ajustar()` (automático) |

## 3. Regras de uso

- Acessível: rótulos claros, alvo de toque de 44px, foco visível, aviso de "abre em uma nova aba" para leitor de tela.
- Uma só barra de rolagem; sem modal; tabela e duas colunas viram blocos no celular.
- Conclusão só depois de visitar todas as seções exigidas; progresso gravado para retomada.
- Texto na tela sempre passa por `Kit.esc`. Respostas gravadas no LMS são divididas em partes de 250 caracteres (limite de 255 do SCORM 1.2).

## 4. Montar um pacote novo

1. Copiar o kit de `base/scorm-kit/`.
2. Escrever o conteúdo em `js/data.js` e a lógica em `js/app.js`.
3. Montar `index.html` com `<section class="view" id="v-...">`.
4. Empacotar com `imsmanifest.xml` (raiz do zip = arquivos do pacote).
5. Testar em 1200px e 375px e, por fim, dentro do Moodle.

## 5. Decisão

Seguimos apenas o estilo aprovado pelo cliente. As regras do guia de páginas HTML do projeto no Claude (cantos retos, sem sombras, sem degradês, fonte do tema) não se aplicam aos SCORMs.
