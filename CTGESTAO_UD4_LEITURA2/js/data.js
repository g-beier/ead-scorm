/* Conteúdo: UD 4 – Papel do DME · Leitura 2 (Pesquisa). Fonte: PDF da leitura. */
window.CONTEUDO = {
  contexto: "Curso Técnico de Gestão de UELs · UD 4 – Papel do DME",
  slides: [
    { tipo: "capa",
      kicker: "Curso Técnico de Gestão de UELs",
      titulo: "O que o DME vê na seção",
      sub: "UD 4 – Pesquisa" },

    { kicker: "Rotina",
      titulo: "Uma rotina, não uma inspeção",
      paras: ["O DME acompanha a aplicação do programa nas seções. Visita uma reunião, conversa com os escotistas e relata à diretoria o que pede decisão."],
      destaque: "Orientar e supervisionar não é conduzir a atividade no lugar da seção, nem avaliar o desempenho de um escotista. O objeto da visita é o programa: o que aconteceu, o que faltou e o que a diretoria precisa tratar.",
      fonte: "Fonte: Perfis de cargos e funções – nível local" },

    { kicker: "Registro",
      titulo: "A visita registra o que foi visto",
      lista: [
        "o que funciona, com o fato que o sustenta;",
        "o que falta, quando o registro da reunião não mostra;",
        "o sinal que pede atenção, sem transformar fala em causa."
      ],
      destaque: "Uma fala ouvida é um fato: alguém disse algo. Esse fato não explica, sozinho, um número do ciclo. Sem outro registro, a explicação é hipótese.",
      modais: [{ id: "m-tres-perguntas", botao: "Três perguntas da visita", titulo: "Três perguntas da visita",
        paras: [
          "<strong>O roteiro cabe nestas três.</strong>",
          "O ciclo tem participação dos jovens, ou a lista de atividades chegou pronta?",
          "Os elementos do método aparecem na reunião, ou só alguns?",
          "O programa do período contempla os quatro eixos, ou um eixo quase não aparece no que foi feito?"
        ] }] },

    { kicker: "Método",
      titulo: "Os elementos, em conjunto",
      colunas: 2,
      paras: ["O método funciona quando os elementos aparecem juntos. A visita nota a presença, não dá aula sobre cada um."],
      cards: [
        { cor: "navy", titulo: "1. Promessa e Lei", breve: "Comportamento e valores, com base na Promessa e na Lei." },
        { cor: "yellow", titulo: "2. Aprender fazendo", breve: "Atividades práticas, em que o jovem age, avalia e aprende." },
        { cor: "navy", titulo: "3. Progressão pessoal", breve: "Metas próprias e conquistas de distintivos ao longo do tempo." },
        { cor: "yellow", titulo: "4. Sistema de equipes", breve: "Protagonismo juvenil, com funções e decisões na equipe." },
        { cor: "navy", titulo: "5. Suporte do adulto", breve: "Apoio do adulto que orienta, sem decidir pelo jovem." },
        { cor: "yellow", titulo: "6. Marco simbólico", breve: "Cerimônias e celebrações que marcam a passagem de etapas." },
        { cor: "navy", titulo: "7. Natureza", breve: "Atividades externas e contato com o ambiente natural." },
        { cor: "yellow", titulo: "8. Envolvimento comunitário", breve: "Serviço e relação com a comunidade, além do grupo." }
      ],
      fonte: "Fonte: Método Escoteiro" },

    { kicker: "Atividade",
      titulo: "Ligue cada pergunta ao elemento",
      paras: ["Cada pergunta é uma que o DME pode fazer na visita, para ver se o elemento aparece na reunião. Escolha o elemento do método que ela ajuda a observar."],
      quiz: [
        { pergunta: "Os jovens conhecem a Promessa e a Lei e as relacionam às decisões do dia a dia da seção?",
          opcoes: ["Natureza", "Promessa e Lei", "Marco simbólico", "Suporte do adulto"], correta: 1,
          explica: "A Promessa e a Lei orientam a conduta e as escolhas. Sem elas, a seção fica sem referência comum." },
        { pergunta: "Os jovens planejam, fazem e avaliam a atividade com as próprias mãos, ou só assistem?",
          opcoes: ["Sistema de equipes", "Envolvimento comunitário", "Aprender fazendo", "Progressão pessoal"], correta: 2,
          explica: "Aprender fazendo é o jovem agindo e refletindo sobre o que fez, e não apenas recebendo instruções." },
        { pergunta: "Há metas pessoais acompanhadas ao longo do ano, com registro do avanço de cada jovem?",
          opcoes: ["Marco simbólico", "Progressão pessoal", "Promessa e Lei", "Natureza"], correta: 1,
          explica: "A progressão pessoal acompanha o avanço de cada jovem, com metas e registro ao longo do tempo." },
        { pergunta: "Os jovens se organizam em equipes, com funções e responsabilidades que se alternam?",
          opcoes: ["Suporte do adulto", "Aprender fazendo", "Sistema de equipes", "Natureza"], correta: 2,
          explica: "No sistema de equipes, o jovem assume funções e responsabilidades, e elas se revezam." },
        { pergunta: "Os jovens sentem que há um adulto por perto para apoiar, sem decidir por eles?",
          opcoes: ["Envolvimento comunitário", "Marco simbólico", "Suporte do adulto", "Sistema de equipes"], correta: 2,
          explica: "O adulto apoia, orienta e acompanha, mas quem decide e conduz é o jovem." },
        { pergunta: "Há momentos que marcam a passagem, como cerimônias, celebrações ou o início de uma nova etapa?",
          opcoes: ["Natureza", "Progressão pessoal", "Aprender fazendo", "Marco simbólico"], correta: 3,
          explica: "O marco simbólico dá sentido à passagem de uma etapa para outra, com um momento que o jovem reconhece." },
        { pergunta: "A atividade acontece ao ar livre, com contato com a natureza e com a percepção do efeito das próprias escolhas?",
          opcoes: ["Promessa e Lei", "Natureza", "Suporte do adulto", "Sistema de equipes"], correta: 1,
          explica: "A natureza é o cenário em que o jovem aprende a observar e a cuidar do ambiente, e percebe o efeito das suas escolhas." },
        { pergunta: "A seção se relaciona com a comunidade, com serviço, parcerias e convites às famílias e à vizinhança?",
          opcoes: ["Marco simbólico", "Envolvimento comunitário", "Promessa e Lei", "Aprender fazendo"], correta: 1,
          explica: "O envolvimento comunitário leva a seção para fora do grupo, com serviço e parcerias." }
      ] },

    { kicker: "Eixos",
      titulo: "Quatro eixos, não quatro provas",
      colunas: 2,
      paras: ["A progressão pessoal se organiza em eixos. O DME vê se o programa do período os contempla. Não confere requisito por requisito."],
      cards: [
        { cor: "navy", titulo: "Habilidades para a Vida", paras: ["Preparar o jovem para os desafios do presente e do futuro."] },
        { cor: "yellow", titulo: "Meio Ambiente", paras: ["Entender a natureza e o efeito das próprias escolhas."] },
        { cor: "navy", titulo: "Paz e Desenvolvimento", paras: ["Convivência, respeito e participação na sociedade."] },
        { cor: "yellow", titulo: "Saúde e Bem-estar", paras: ["Cuidado consigo e com os outros."] }
      ],
      fonte: "Fonte: Progressão pessoal" },

    { kicker: "Causa",
      titulo: "O número não fecha a causa",
      paras: ["Os indicadores do ciclo dizem o que aconteceu: frequência, efetivo, ciclos completados. A visita diz o que foi visto na reunião. Um não prova o outro."],
      cards: [
        { cor: "navy", titulo: "Fato", paras: ["O indicador mostra uma queda. Na visita, ouve-se uma falta ou um desejo. São dois registros distintos."] },
        { cor: "yellow", titulo: "Hipótese", paras: ["Ligar um ao outro é hipótese. Ela se confirma em conversa e em outros registros. Não se escreve como causa."] }
      ] },

    { kicker: "Relato",
      titulo: "O que se leva à diretoria",
      lista: [
        "o observado, em frases curtas, com data e fato;",
        "a hipótese, marcada como tal, para confirmar;",
        "o encaminhamento: o que a diretoria decide, e não o que um escotista “deveria ser”;",
        "os pontos que vão ao CDE, ou ao órgão similar, porque pedem tratamento conjunto."
      ],
      destaque: "O CDE, ou o órgão similar que a UEL já tem, recebe os pontos que pedem tratamento conjunto. Não recebe o julgamento de uma pessoa." },

    { kicker: "Conversa",
      titulo: "Os pontos da conversa",
      paras: ["Antes de conversar com os escotistas, o DME separa os pontos. Cada ponto nomeia um fato do programa e uma pergunta. Não nomeia uma pessoa."],
      cards: [
        { cor: "navy", titulo: "Programa", paras: ["Um fato do ciclo e uma pergunta: como os jovens entram na escolha da próxima atividade?"] },
        { cor: "yellow", titulo: "Progressão", paras: ["O que o registro mostra e o que a equipe ainda não registra. A pergunta confirma; não acusa."] },
        { cor: "navy", titulo: "Condição", paras: ["O que a seção precisou e não teve. A pergunta é o que a diretoria passa a prever."] }
      ] },

    { tipo: "fim",
      titulo: "Ver não é concluir",
      texto: "Fala ouvida é fato. Explicação sem outro registro é hipótese." }
  ]
};
