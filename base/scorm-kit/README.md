# Kit de componentes SCORM (Curso Técnico de Gestão de UEL)

Componentes extraídos do estudo de caso "Comportamento sexualizado inadequado entre jovens no escotismo" (UD 4, Leitura 3). Servem de base para os próximos pacotes SCORM 1.2 do Moodle (Campo Escola Virtual).

## Conteúdo do kit

```
exemplo.html          demonstração de todos os componentes (abrir no navegador para testar)
css/kit.css           tokens (cores, raio, fontes) e classes dos componentes
js/kit.js             funções: listas, referências, dois blocos, quiz, reflexão, progresso, menu
js/moodle.js          ajuste de altura e largura dentro do iframe do Moodle (sem alterações do original)
js/scorm.js           wrapper SCORM 1.2 com fallback em localStorage (sem alterações do original)
fonts/                Poppins e Krona One (licença OFL, incluída)
```

## Catálogo de componentes

| Componente | Como usar | Onde aparece no estudo de caso |
|---|---|---|
| Cabeçalho com progresso | `.topo`, `.progresso`, `.barra` e `Kit.progresso(...)` | Topo de todas as telas |
| Barra de etapas | `Kit.montarMenu(ul, etapas, onIr)` e `Kit.marcarAtual(ul, id)` | Menu fixo abaixo do cabeçalho |
| Cartão (neutro, destaque, alerta, pergunta) | `.card` + `.destaque` / `.alerta` / `.alerta.forte` / `.pergunta` | Início, caso-base, variações |
| Duas colunas | `Kit.dois([{titulo, itens, cls, icone, lista}, ...])` | "O que muda" e "O que não muda" |
| Lista com marcas | `Kit.lista(itens, "check" / "cruz")` | Objetivos, deveres, "O que NÃO fazer" |
| Quiz com retorno por alternativa | `Kit.quiz(elemento, {enunciado, opcoes, onVerificado})` | Quiz do caso-base (múltipla escolha) |
| Passos recolhíveis | `<details class="passo">` com `.num` e `.corpo` | Fluxo básico, seis passos |
| Grade de cartões | `.grade` > `button.cartao` (`.vista` quando já explorado) | Mapa de variações |
| Pense antes / revelar | `.pense` + botão que mostra `#analise` | Cada variação |
| Síntese em destaque | `.sintese-uma` | Frase final de cada variação |
| Reflexão com envio ao LMS | `Kit.reflexao(elemento, {id, aviso, enviada, onEnviada})` | Pergunta reflexiva |
| Tabela que vira blocos | `<table>` com `td[data-label]` | Síntese (celular mostra blocos) |
| Três destaques | `.tres` > `div` (+ `small`) | Ideia central |
| Referências com link | `Kit.listaRefs([...])`; item com `url` abre em nova aba | Tela de referências |
| Conclusão | `.conclusao` e `Kit.concluir()` | Fim das variações |
| Altura no Moodle | `MoodleAltura.ajustar()` (automático ao carregar) | Iframe do player |

## Como montar um pacote novo

1. Copiar a pasta `scorm-kit` e renomear o que for do pacote (título em `imsmanifest.xml`).
2. Criar um `data.js` com o conteúdo (o estudo de caso usa o objeto `CONTEUDO`; a estrutura é livre).
3. Escrever `app.js` que chama as funções do `Kit`, com a navegação e a regra de conclusão do pacote.
4. Ajustar `index.html` às seções (`<section class="view" id="v-...">`).
5. Empacotar com `imsmanifest.xml` apontando para os arquivos reais (raiz do zip = arquivos do pacote).
6. Testar no navegador em largura de computador e de celular, e dentro do Moodle.

## Regras que o kit já cumpre

- Acessível: botões e links com texto claro; alvos de toque de 44px; foco visível; leitor de tela avisado em links externos.
- Uma única barra de rolagem; sem modal; blocos quebram em telas estreitas.
- Conclusão só depois de visitar todas as seções exigidas; progresso gravado para retomada.
- Textos na tela passam por `Kit.esc` (sem HTML injetado). Respostas gravadas no LMS são divididas em partes de 250 caracteres (limite de 255 do SCORM 1.2).

## Identidade visual: divergências a confirmar

O kit segue o estudo de caso aprovado pelo cliente. Isso diverge do guia `guia-visual-paginas-moodle.md` do projeto e da skill `scorm-estudo-de-caso-escotismo`, que pedem cantos retos, sem sombras, sem degradês, sem cinza e com a fonte do tema do Moodle. Pontos em que o kit diverge dessas regras:

- Cantos arredondados (8px a 10px).
- Sombras (menu, hover dos cartões).
- Degradê na faixa tricolor do rodapé.
- Cinzas (`#dcdde8`, `#5b5d73`, `#f2f2f7`) em bordas e textos secundários.
- Fontes Poppins e Krona One, carregadas pelo próprio pacote (o guia diz para herdar a fonte do tema).
- Cabeçalho e menu em faixa de largura total, não alinhados à coluna do conteúdo.

Decisão pendente: manter duas identidades (páginas HTML do guia e SCORMs com este visual) ou unificar. Enquanto isso, o kit não muda estas cores; elas estão centralizadas em `:root` no `css/kit.css`.

## Limitações conhecidas

- Testado em Chromium (computador 1200px e celular 375px), sem erros de JavaScript e sem rolagem horizontal. Não testado dentro de um Moodle real.
- Sem LMS, o `scorm.js` grava em `localStorage`; no Moodle, usa a API SCORM 1.2 da janela pai.
- `Kit.concluir()` só marca o status; a regra de quando concluir fica no pacote.
