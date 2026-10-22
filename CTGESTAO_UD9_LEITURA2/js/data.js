/* Conteúdo: UD 9 – Acompanhamento e feedback · Leitura 2 (Pesquisa). Fonte: PDF da leitura. */
window.CONTEUDO = {
  contexto: "Curso Técnico de Gestão de UELs · UD 9 – Acompanhamento e feedback",
  slides: [
    { tipo: "capa",
      kicker: "Curso Técnico de Gestão de UELs",
      titulo: "Acompanhamento e feedback",
      sub: "UD 9 – Pesquisa" },

    { kicker: "Processo",
      titulo: "O processo de acompanhamento",
      paras: ["O acompanhamento é contínuo e personalizado. Apoia o adulto no cumprimento da função, permite avaliar o desempenho e sustenta as decisões sobre o futuro. Tem três etapas:"],
      cards: [
        { cor: "navy", titulo: "Apoio na tarefa", paras: ["Orientação desde a familiarização com a função e ao longo de todo o período."] },
        { cor: "yellow", titulo: "Avaliação", paras: ["Autoavaliação e avaliação periódica do desempenho, pelo menos uma vez por ano."] },
        { cor: "navy", titulo: "Decisões para o futuro", paras: ["O que vem a seguir, a partir do resultado da avaliação."] }
      ],
      destaque: "As três etapas formam uma sequência: sem apoio e sem avaliação, a decisão perde a base.",
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>" },

    { kicker: "Apoio",
      titulo: "Apoio na tarefa",
      lista: [
        "acompanhamento inicial, durante a familiarização com a função;",
        "acompanhamento periódico e orientação sobre as tarefas, em direção às metas do acordo;",
        "estímulo, incentivo e oportunidades de atualização e desenvolvimento;",
        "confiança na delegação: a pessoa assume a responsabilidade por projetos e atividades da função."
      ],
      destaque: "Todo voluntário precisa receber feedback sobre o trabalho que está desempenhando. O apoio respeita o ritmo e a disponibilidade de cada um.",
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>; <a href='https://escoteiros.org.br/wp-content/uploads/2021/12/captando_adultos_2021_07-12-1.pdf' target='_blank' rel='noopener'>Captando e engajando adultos para o Movimento Escoteiro</a>" },

    { kicker: "Quem",
      titulo: "Quem acompanha e quando",
      colunas: 2,
      cards: [
        { cor: "navy", titulo: "O chefe de seção", paras: ["Orienta seus assistentes e compartilha com eles as tarefas e as responsabilidades da seção."] },
        { cor: "yellow", titulo: "O diretor de métodos educativos", paras: ["Coordena a captação, a formação e o acompanhamento dos voluntários e faz reuniões de acompanhamento com os escotistas."] }
      ],
      destaque: "Uma rotina define, para cada adulto, quem acompanha, com que frequência há conversa e o que se registra. A avaliação de desempenho ocorre pelo menos uma vez por ano, especialmente na renovação do acordo, inclusive para os cargos eletivos.",
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Perfis-Cargos-e-Fun%C3%A7%C3%B5es-N%C3%ADvel-Local-set19.pdf' target='_blank' rel='noopener'>Perfis: Cargos e Funções – Nível Local</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>" },

    { kicker: "Registro",
      titulo: "O que se registra",
      paras: ["Uma ficha de acompanhamento por adulto reúne três tipos de registro:"],
      cards: [
        { cor: "navy", titulo: "Fatos observados", paras: ["O que a pessoa fez ou disse, com data, sem opinião nem julgamento."] },
        { cor: "yellow", titulo: "Relato do adulto", paras: ["O que a própria pessoa conta sobre o trabalho e o que quer desenvolver."] },
        { cor: "navy", titulo: "Combinados", paras: ["O que aperfeiçoar, como desenvolver e em que prazo."] }
      ],
      modais: [{ id: "m-fato-impressao", botao: "Fato ou impressão?", titulo: "Fato ou impressão?",
        paras: [
          "<strong>O fato pode ser conferido: o que foi feito ou dito, quando e onde. A impressão é uma leitura de quem observa.</strong>",
          "Impressão: “Ela anda desanimada.” Fato: “Faltou às duas últimas reuniões de planejamento, sem avisar.”",
          "Impressão: “Ele é desorganizado.” Fato: “O material do jogo de 5/5 não estava pronto na abertura.”",
          "Informação de outra pessoa: registra-se quem informou e verifica-se antes de usá-la numa conversa ou numa decisão."
        ] }],
      destaque: "A participação ativa do adulto é essencial: o registro não é feito só sobre ele, mas com ele.",
      fonte: "Fonte: Center for Creative Leadership – SBI; <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>" },

    { kicker: "Avaliação",
      titulo: "Avaliação de desempenho",
      lista: [
        "a referência são os objetivos da função e os comportamentos e resultados esperados;",
        "a avaliação identifica as qualidades e os pontos a desenvolver;",
        "ocorre pelo menos uma vez por ano, com a participação ativa do adulto."
      ],
      modais: [{ id: "m-avaliacao-serve", botao: "Para que serve", titulo: "Para que serve a avaliação",
        paras: [
          "<strong>A avaliação é uma prática dinâmica, que olha para o que vai bem e para o que precisa mudar.</strong>",
          "Alinha as expectativas da UEL e do adulto sobre a função.",
          "Apoia as decisões para o futuro.",
          "Orienta o planejamento de novas atividades de formação, que levem ao desempenho esperado."
        ] }],
      fluxos: [
        { nome: "Etapas da avaliação",
          passos: [
            "Autoavaliação: o adulto avalia o próprio trabalho.",
            "Conversa: a conversa compara essa visão com a de quem acompanha.",
            "Decisões e formação: o resultado orienta as decisões para o futuro e as novas atividades de formação."
          ],
          porque: "O resultado orienta as decisões para o futuro e as novas atividades de formação." } ],
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>" },

    { kicker: "Feedback",
      titulo: "Feedback",
      paras: ["Todo adulto precisa receber feedback sobre o seu trabalho e os seus resultados. O feedback indica se as ações estão ou não no caminho certo em relação aos objetivos da função, e vale para o que vai bem e para o que precisa mudar."],
      cards: [
        { cor: "navy", titulo: "Específico", paras: ["Trata de uma situação concreta e recente, não de “sempre” ou “nunca”."] },
        { cor: "yellow", titulo: "Sobre o comportamento", paras: ["Descreve o que a pessoa fez ou disse, não como ela é."] },
        { cor: "navy", titulo: "Em diálogo", paras: ["Ouve a pessoa e termina com um próximo passo combinado."] }
      ],
      destaque: "A conversa pede um clima de transparência e confiança. Quem dá feedback também precisa saber escutar e estar aberto ao que ouve.",
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>; <a href='https://escoteiros.org.br/wp-content/uploads/2021/12/captando_adultos_2021_07-12-1.pdf' target='_blank' rel='noopener'>Captando e engajando adultos para o Movimento Escoteiro</a>; Center for Creative Leadership – SBI" },

    { kicker: "Modelo",
      titulo: "Um modelo para a conversa",
      paras: ["O modelo Situação–Comportamento–Impacto, com dois passos de diálogo:"],
      fluxos: [
        { nome: "Modelo Situação–Comportamento–Impacto",
          passos: [
            "Situação: quando e onde.",
            "Comportamento: o que a pessoa fez.",
            "Impacto: o efeito no trabalho.",
            "Intenção: o que a pessoa pretendia.",
            "Combinado: o próximo passo."
          ],
          porque: "Por exemplo: “No acampamento de maio, você chegou depois da abertura, e a patrulha montou o campo sem orientação. O que aconteceu?” Depois de ouvir: “O que combinamos para o próximo acampamento?”" } ],
      fonte: "Fonte: Center for Creative Leadership – SBI" },

    { kicker: "Armadilhas",
      titulo: "Armadilhas da conversa",
      lista: [
        "generalizar: “você sempre…”, “você nunca…”;",
        "julgar a pessoa em vez do desempenho: “você é desorganizado”;",
        "usar a opinião de outra pessoa como se fosse fato;",
        "falar sem ouvir, ou descartar o que a pessoa conta;",
        "acumular tudo para o fim do acordo;",
        "conversar em público ou por mensagem num grupo;",
        "encerrar sem combinado e sem data para a próxima conversa."
      ],
      destaque: "O foco são o trabalho e os resultados, não a pessoa.",
      fonte: "Fonte: Center for Creative Leadership – SBI; <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>" },

    { kicker: "Equipe",
      titulo: "Relações na equipe",
      lista: [
        "cada adulto sabe o que lhe cabe na seção ou na diretoria;",
        "as tarefas são compartilhadas, e cada um tem oportunidade de conduzir atividades e projetos;",
        "a equipe se reúne com regularidade para planejar e avaliar junto;",
        "há momentos para que os adultos convivam e se conheçam, além das atividades com os jovens."
      ],
      destaque: "O acompanhamento favorece um clima de transparência e confiança na equipe e ajuda a identificar que ações podem estimular um trabalho com melhores resultados.",
      fonte: "Fonte: <a href='https://escoteiros.org.br/wp-content/uploads/2021/12/captando_adultos_2021_07-12-1.pdf' target='_blank' rel='noopener'>Captando e engajando adultos para o Movimento Escoteiro</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>" },

    { kicker: "Decisões",
      titulo: "Decisões para o futuro",
      cards: [
        { cor: "navy", titulo: "Renovação", paras: ["A pessoa é confirmada na função por um novo período, com objetivos revistos."] },
        { cor: "yellow", titulo: "Recolocação", paras: ["A pessoa passa a outra tarefa ou função, com novo acordo. A PNAME a chama de realocação."] },
        { cor: "navy", titulo: "Desligamento", paras: ["A pessoa é afastada da função."] }
      ],
      modais: [{ id: "m-desligamento", botao: "Desligamento", titulo: "Desligamento",
        paras: [
          "<strong>O desligamento da função também é parte da gestão de adultos e pede o mesmo cuidado das outras decisões.</strong>",
          "A exoneração é feita pelo mesmo órgão que nomeou (POR, Regra 129, VII).",
          "Quem não tem o acordo renovado pode alterar sua categoria associativa (Regra 040, VII).",
          "A não renovação do acordo não se confunde com a do registro anual, que não pode ser recusada por critério subjetivo (Regra 040, VI).",
          "Na conversa, agradece-se o trabalho feito, combina-se a passagem das tarefas e registra-se o encerramento."
        ] }],
      destaque: "A decisão parte da avaliação e é conversada antes do vencimento do acordo, para que não chegue como surpresa.",
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/POR_2025_10-2.pdf' target='_blank' rel='noopener'>P.O.R. 2025</a>" },

    { kicker: "Leitura",
      titulo: "Roteiro de leitura",
      lista: [
        "PNAME p. 17 e 18: desempenho e decisões para o futuro, as etapas do acompanhamento;",
        "APF p. 12 e 13: entendendo a função, o acompanhamento no ciclo de vida do adulto;",
        "APF p. 19, 22 e 24: entendendo a função, avaliação anual, plano de formação e feedback;",
        "Captando p. 25, 27 e 28: feedback, suporte na tarefa e ações que mantêm os adultos engajados;",
        "Perfis p. 20, 21 e 43: o chefe de seção e o diretor de métodos educativos no acompanhamento;",
        "POR: regras 040, VI e VII, e 129, VI e VII: acordo, registro e exoneração."
      ],
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Politica_Nacional_Adultos.pdf' target='_blank' rel='noopener'>PNAME (Política Nacional de Adultos no Movimento Escoteiro)</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2016/02/Manual_do_APF.pdf' target='_blank' rel='noopener'>Entendendo a função: Assessor Pessoal de Formação</a>; <a href='https://escoteiros.org.br/wp-content/uploads/2021/12/captando_adultos_2021_07-12-1.pdf' target='_blank' rel='noopener'>Captando e engajando adultos para o Movimento Escoteiro</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Perfis-Cargos-e-Fun%C3%A7%C3%B5es-N%C3%ADvel-Local-set19.pdf' target='_blank' rel='noopener'>Perfis: Cargos e Funções – Nível Local</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/POR_2025_10-2.pdf' target='_blank' rel='noopener'>P.O.R. 2025</a>" },

    { tipo: "fim",
      titulo: "Acompanhar para decidir",
      texto: "Fatos registrados, conversas regulares e decisões sem surpresa." }
  ]
};
