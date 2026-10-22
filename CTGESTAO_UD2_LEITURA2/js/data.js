/* Conteúdo: UD 2 – Diagnóstico e planejamento anual · Leitura 2 (Pesquisa). Fonte: PDF da leitura. */
window.CONTEUDO = {
  contexto: "Curso Técnico de Gestão de UELs · UD 2 – Diagnóstico e planejamento anual",
  slides: [
    { tipo: "capa",
      kicker: "Curso Técnico de Gestão de UELs",
      titulo: "Diagnóstico e planejamento anual da UEL",
      sub: "UD 2 – Pesquisa" },

    { kicker: "Planejamento",
      titulo: "Planejar a partir do presente",
      paras: ["A diretoria conduz o planejamento anual da UEL. Esse planejamento responde a quatro perguntas."],
      cards: [
        { cor: "navy", titulo: "Onde estamos", paras: ["Qual é a situação atual, lida nos registros que a UEL já tem."] },
        { cor: "yellow", titulo: "O que tratar", paras: ["Desse retrato, o que a diretoria escolhe para o ano."] },
        { cor: "navy", titulo: "Quem e quando", paras: ["Qual ação, qual cargo e em que momento do calendário."] },
        { cor: "yellow", titulo: "Como saber", paras: ["A que dado a diretoria volta, ao longo do ano, para ver se avançou."] }
      ] },

    { kicker: "Diagnóstico",
      titulo: "O diagnóstico é um retrato",
      paras: ["Diagnóstico é a descrição breve da situação atual. Não é auditoria, não é julgamento de pessoas e não é um sistema novo de medidas."],
      destaque: "Serve para a diretoria nomear os desafios principais do ano. Usa os registros que a rotina já produz: efetivo, permanência, frequência, adultos, calendário e rotinas formais.",
      modais: [{ id: "m-quem-le", botao: "Quem faz a leitura", titulo: "Quem faz a leitura",
        paras: [
          "<strong>O retrato é feito por quem vive a UEL.</strong>",
          "A diretoria e os escotistas conhecem a situação e o resultado de tentativas anteriores. São também quem vai sustentar as soluções. Façamos um Plano de Grupo chama essa leitura de diagnóstico da situação atual."
        ] }],
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/facamos_um_plano_de_grupo-1.pdf' target='_blank' rel='noopener'>Façamos um Plano de Grupo</a>" },

    { kicker: "Dados",
      titulo: "Efetivo, permanência e frequência",
      cards: [
        { cor: "navy", titulo: "Efetivo", paras: ["Quantos jovens há, por seção, e se o número subiu, ficou ou caiu. Um total estável pode esconder entradas e saídas no mesmo período."] },
        { cor: "yellow", titulo: "Permanência", paras: ["Quem saiu. Sem esse registro, o efetivo não diz se a UEL retém os jovens que recebe."] },
        { cor: "navy", titulo: "Frequência", paras: ["Entre os registrados, quem está nas atividades. Efetivo alto com frequência baixa não é a mesma situação que efetivo pequeno com frequência alta."] }
      ] },

    { kicker: "Dados",
      titulo: "Adultos e rotinas também entram",
      cards: [
        { cor: "navy", titulo: "Adultos", paras: ["O programa do ano depende das equipes. Entram no retrato as funções vagas, os acordos que vencem e as formações previstas que não começaram. Isso muda o que a diretoria pode prometer às seções."] },
        { cor: "yellow", titulo: "Rotinas formais", paras: ["Entram o calendário vigente, a data da Assembleia ou do ato que a substitui, e os prazos da secretaria que a diretoria já conhece. Uma rotina que ninguém sabe descrever também faz parte do retrato."] }
      ] },

    { kicker: "Causa",
      titulo: "O número não explica a causa",
      cards: [
        { cor: "navy", titulo: "Fato", paras: ["O que está registrado: um número, uma data, uma fala anotada de escotista ou de jovem."] },
        { cor: "yellow", titulo: "Hipótese", paras: ["A explicação que se tira do fato. Serve para decidir o que confirmar. Não fecha a causa."] },
        { cor: "navy", titulo: "Falta", paras: ["O registro não existe, ou a escuta não foi feita. A falta entra no retrato. Não se preenche com suposição."] }
      ],
      destaque: "Escotistas e jovens dizem o que o número não mostra, quando essa escuta ficou registrada. “A frequência caiu porque perderam o interesse” não é um fato. O fato, se a UEL o tem, é a frequência." },

    { kicker: "Prioridades",
      titulo: "Prioridade é uma escolha",
      paras: ["O retrato costuma mostrar mais do que uma diretoria voluntária consegue tratar em um ano. Escolher poucas prioridades é parte do planejamento, não falta de ambição. O que não foi escolhido permanece visível e espera."],
      cards: [
        { cor: "navy", titulo: "Com base no retrato", paras: ["A prioridade nomeia um desafio que os registros sustentam. A diretoria sabe dizer qual fato a sustenta."] },
        { cor: "yellow", titulo: "Desejo", paras: ["Não há registro que a sustente. Só vira prioridade se a primeira ação for obter o dado que falta."] }
      ] },

    { kicker: "Ação",
      titulo: "Da prioridade à ação",
      lista: [
        "a prioridade nomeia o desafio; a ação nomeia o que a diretoria fará;",
        "o responsável é um cargo, não “a diretoria” em abstrato e não uma pessoa;",
        "o momento é uma data ou um período do calendário, não “ao longo do ano”;",
        "o acompanhamento é o dado a que a diretoria volta. Se esse dado não se move, a prioridade não avançou, ainda que a lista de atividades esteja cheia."
      ] },

    { kicker: "Calendário",
      titulo: "O Calendário de Grupo",
      paras: ["É o lugar em que as ações escolhidas encontram as datas que a UEL não controla: atividades de grupo, datas regionais e nacionais, Assembleia e prazos da secretaria."],
      cards: [
        { cor: "navy", titulo: "Nacional", paras: ["Até 31 de julho do ano anterior (Estatuto da UEB, art. 19, IV)."] },
        { cor: "navy", titulo: "Regional", paras: ["Até 30 de setembro do ano anterior (art. 28, IX)."] },
        { cor: "yellow", titulo: "Grupo", paras: ["Até 30 de novembro, com cópia à Diretoria Regional (art. 36, IX)."] }
      ],
      destaque: "O calendário de grupo só marca data regional ou nacional que já exista. Se ainda não chegou, o retrato registra a falta. Não se inventa a data.",
      modais: [{ id: "m-grupo-secoes", botao: "O grupo e as seções", titulo: "O grupo e as seções",
        paras: [
          "<strong>O calendário de grupo vem antes do ciclo da seção.</strong>",
          "As seções conhecem o calendário antes do primeiro ciclo de programa do ano, porque consideram as ações do grupo ao organizar as suas (Façamos um Plano de Grupo).",
          "Nas patrocinadas, quem aprova o calendário segue a organização da patrocinadora (Estatuto da UEB, art. 31, parágrafo único)."
        ] }],
      fonte: "Fonte: <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/Estatuto_2024_Atualizado.pdf' target='_blank' rel='noopener'>Estatuto da UEB</a>; <a href='https://www.escoteiros.org.br/wp-content/uploads/2020/07/facamos_um_plano_de_grupo-1.pdf' target='_blank' rel='noopener'>Façamos um Plano de Grupo</a>" },

    { kicker: "Acompanhamento",
      titulo: "Aprovar não encerra o ano",
      paras: ["A aprovação do calendário abre o acompanhamento. Ao longo do ano, a diretoria volta ao dado que sustentou cada prioridade. No fim do ano, o que se observou alimenta o diagnóstico seguinte."],
      cards: [
        { cor: "navy", titulo: "É leitura da diretoria", paras: ["A diretoria confere as prioridades que ela mesma escolheu, com o mesmo tipo de registro que usou no retrato."] },
        { cor: "yellow", titulo: "Alimenta o ano seguinte", paras: ["No fim do ano, o retrato do que aconteceu é o ponto de partida do diagnóstico seguinte. O dado que não se moveu continua visível."] }
      ] },

    { kicker: "Planos",
      titulo: "Quando já existe Plano de Grupo",
      paras: ["Algumas UELs têm um plano para mais de um ano. O diagnóstico anual não refaz esse plano. Diante de cada meta já escrita, o retrato atual leva a uma de três decisões."],
      cards: [
        { cor: "navy", titulo: "Confirmar", paras: ["O retrato sustenta a meta como está. A ação e o momento entram no calendário do ano."] },
        { cor: "navy", titulo: "Ajustar", paras: ["A meta continua, mas o prazo, o alcance ou o responsável mudam por causa do retrato."] },
        { cor: "navy", titulo: "Substituir", paras: ["O retrato já não sustenta a meta. Outra prioridade ocupa o lugar dela neste ano."] }
      ],
      modais: [{ id: "m-sem-plano", botao: "Sem plano plurianual", titulo: "Sem plano plurianual",
        paras: [
          "<strong>UEL sem Plano de Grupo também planeja o ano.</strong>",
          "A falta de um plano para mais de um ano não impede nem o calendário do ano. O retrato e as prioridades do ano bastam."
        ] }] },

    { tipo: "fim",
      titulo: "O ano cabe no retrato",
      texto: "Prioridade sem registro é desejo. Ação sem data não entra no calendário." }
  ]
};
