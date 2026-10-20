# EAD SCORM

Repositório de pacotes SCORM 1.2 para o Moodle dos Escoteiros do Brasil, o Campo Escola Virtual (CEV).

Cada curso ou unidade de estudo é um pacote SCORM independente, em uma pasta própria. Os pacotes compartilham um kit de componentes visuais e de comportamento (quiz, reflexão, progresso, referências), para que o estilo seja o mesmo em todos os cursos.

## Estrutura

```
ead-scorm/
├── README.md              este arquivo
├── .claude/               documentação para o assistente de IA (instruções e guias)
│   ├── CLAUDE.md          regras e contexto lidos automaticamente pelo assistente
│   └── docs/              guias de estilo e de princípios dos pacotes
├── base/
│   └── scorm-kit/         kit compartilhado: CSS, JavaScript, fontes e exemplo
├── build.py               gera os zips dos pacotes em dist/
├── dist/                  pacotes .zip prontos para subir no Moodle (gerado pelo build)
└── <CURSO>_UD<n>_LEITURA<n>/   um pacote por pasta, descompactado (ex.: CTGESTAO_UD1_LEITURA2/)
```

## Gerar os pacotes para o Moodle

O Moodle só aceita o pacote SCORM como `.zip`, com o `imsmanifest.xml` na raiz. Por isso os projetos ficam descompactados no repositório e o script gera os zips:

```
python3 build.py
```

- Cada pasta de projeto com `imsmanifest.xml` vira `dist/<projeto>.zip`.
- Antes de compactar, o script confere se o manifesto é XML válido e se todos os arquivos citados nele existem. Projeto com erro não gera zip, e o script termina com erro.
- Para subir no Moodle, use o zip de `dist/`, não a pasta.
- A pasta `dist/` não é versionada no Git (está no `.gitignore`).

## Como criar um projeto novo

1. Criar uma pasta no padrão `CURSO_UD_LEITURA`, em maiúsculas e sem acentos (ex.: `CTGESTAO_UD2_LEITURA1/`). Os cursos são `MAPIJ` (Módulo de Aperfeiçoamento em Proteção Infantojuvenil) e `CTGESTAO` (Curso Técnico de Gestão de UEL).
2. Copiar `base/scorm-kit/` para dentro dela, ou apenas os arquivos necessários (`css/kit.css`, `js/kit.js`, `js/moodle.js`, `js/scorm.js`, `fonts/`).
3. Escrever o conteúdo em `js/data.js` e a lógica em `js/app.js`.
4. Montar o `index.html` e o `imsmanifest.xml` (SCORM 1.2, com todos os arquivos listados).
5. Testar no navegador em computador (1200px) e celular (375px).
6. Gerar o zip com os arquivos do pacote na raiz do zip, sem pasta extra.

Antes de começar, leia `.claude/CLAUDE.md` e os guias em `.claude/docs/`.

## Convenções

- Textos em português do Brasil.
- Conteúdo jurídico (artigos, leis, regras) só com o que a fonte oficial diz. Não completar de memória.
- Mudanças no kit são feitas em `base/` e depois copiadas para os projetos. Não editar o kit dentro de um projeto.
- Não alterar o visual de um pacote aprovado pelo cliente sem pedido explícito.

## Estado atual

- Estilo: o visual do estudo de caso de proteção no escotismo foi aprovado pelo cliente (cantos arredondados, Poppins e Krona One). É o padrão para os SCORMs.
- Decisão: seguimos apenas o estilo aprovado pelo cliente. O guia de páginas HTML do projeto não se aplica aos pacotes SCORM.
- Git: o repositório foi iniciado, ainda sem commits.
