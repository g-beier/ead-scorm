# Instruções para o assistente de IA: EAD SCORM

## Contexto

- Pacotes SCORM 1.2 para o Moodle do Campo Escola Virtual (CEV) dos Escoteiros do Brasil.
- Os pacotes fazem parte do curso técnico de Gestão de UEL. Cada pacote roda num iframe do Moodle.
- O projeto de referência no Claude é "Curso Técnico - Gestão de UEL", com os guias de páginas HTML.

## Antes de criar ou alterar um pacote

1. Ler `docs/guia-visual-scorm.md` (identidade visual e componentes).
2. Ler `docs/principios-scorm.md` (regras gerais de qualquer pacote do curso).
3. Ler o `README.md` da pasta do projeto, se existir.

## Identidade visual

- O estilo aprovado pelo cliente é o do estudo de caso de proteção: cantos arredondados, Poppins e Krona One, sombras leves, rodapé tricolor. Tokens em `:root` do `kit.css`.
- Seguir apenas o estilo aprovado. Não usar as regras do guia de páginas HTML (cantos retos, sem sombras, fonte do tema) nos SCORMs.
- Não mudar cores, fontes ou formas de um pacote aprovado sem pedido explícito.

## Componentes

- Usar o kit de `base/scorm-kit/` e as funções `Kit.*` (quiz, reflexão, menu, progresso, listas, referências, conclusão).
- Não reescrever componentes que já existem no kit. Se faltar um componente, criá-lo no kit (em `base/`) e só depois usá-lo no projeto.
- Ajuste de altura no Moodle: `moodle.js` (`MoodleAltura`).

## Verificação antes de entregar

- `node --check` em todos os `.js`.
- Abrir no Chromium (Playwright em `/opt/pw-browsers/chromium`): checar erros de JavaScript, navegação, quiz, reflexão e conclusão.
- Medir em 1200px e 375px: sem rolagem horizontal e com uma só barra de rolagem. A altura do iframe no Moodle é de cerca de 666,5px.
- Gerar os zips com `python3 build.py` na raiz do repositório. Ele cria `dist/<projeto>.zip` com o manifesto na raiz e confere os arquivos citados no manifesto. Não criar zips à mão.

## Cuidados

- Não inventar URLs. Referências sem URL aparecem como texto simples.
- Não commitar no Git sem pedido do usuário.
- Textos de reflexão enviados pelos alunos não podem conter nomes ou dados de casos reais; o aviso do pacote já informa isso.
- Questões de proteção infantojuvenil: manter o foco no fluxo de proteção, nunca em detalhes do caso.
