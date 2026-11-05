/* Conteúdo: UD 17 – Secretaria, ingresso de jovens e arquivo · Leitura 2 (Pesquisa). Fonte: PPTX da leitura. */
window.CONTEUDO = {
  contexto: "Curso Técnico de Gestão de UELs · UD 17 – Secretaria, ingresso de jovens e arquivo",
  slides: [
    { tipo: "capa", kicker: "Curso Técnico de Gestão de UELs", titulo: "Secretaria, ingresso de jovens e arquivo", sub: "UD 17 – Pesquisa" },

    { kicker: "Escrituração",
      titulo: "A escrituração da UEL",
      paras: ["O P.O.R. exige que a UEL mantenha a sua escrituração atualizada (Regra 039). Uma parte é feita pelas seções; à secretaria cabe garantir que cada registro exista, esteja em dia e tenha lugar certo."],
      cards: [
        { cor: "navy", titulo: "Registros", paras: ["Efetivo, registro institucional, renovações e isenções de cada membro."] },
        { cor: "yellow", titulo: "Prazos", paras: ["O que vence todo mês e o que tem data certa no ano, até 31 de dezembro."] },
        { cor: "navy", titulo: "Arquivo", paras: ["Atas, fichas, termos e autorizações, em papel ou digitais, com guarda e acesso definidos."] }
      ],
      modais: [
        { id: "m-escrituracao", botao: "O que a Regra 039 lista", titulo: "Escrituração (Regra 039)",
          paras: [
            "A UEL mantém atualizados, entre outros: Livro de Grupo e livros das seções; fichas individuais e ficha médica de cada membro, atualizadas no sistema de registro; controle de frequência das seções e registro de presença nas atividades; livros de atas da Assembleia, da Diretoria, da Comissão Fiscal e dos órgãos das seções, atualizados no sistema; registros de progressão das seções; livro-caixa, ou registro equivalente, em sistema ou planilha."
          ] }
      ],
      fonte: "Fonte: P.O.R." },

    { kicker: "Efetivo",
      titulo: "Controle de efetivo",
      cards: [
        { cor: "navy", titulo: "Validade", paras: ["O registro institucional vale 12 meses a contar da efetivação. Cada membro tem o seu vencimento, ao longo do ano."] },
        { cor: "yellow", titulo: "Renovação", paras: ["A renovação é pedida antes do vencimento, pela UEL ou pelo próprio associado. O pagamento pode ser antecipado."] },
        { cor: "navy", titulo: "Pedido individual", paras: ["Quando o associado renova sozinho, a Diretoria tem 7 dias para aceitar ou recusar; sem resposta, a renovação é aceita."] },
        { cor: "yellow", titulo: "Jovens", paras: ["A renovação de menores de 18 anos não pode ser recusada. A recusa não pode se basear em critérios discriminatórios."] }
      ],
      fonte: "Fonte: Resolução CAN 14/2025; Resolução CAN 07/2023; P.O.R." },

    { kicker: "Registro",
      titulo: "Só pratica Escotismo quem tem registro",
      paras: ["A prática do Escotismo é exclusiva dos registrados. Permitir atividade escoteira a quem não tem registro vigente é falta grave dos dirigentes da UEL (Regra 036, III). Por isso, o vencimento dos registros é acompanhado todo mês, e não só em dezembro."],
      cards: [
        { cor: "navy", titulo: "Adultos", paras: ["Todo associado maior de 18 anos faz o curso de Proteção Infantojuvenil no CEV antes da inclusão ou da renovação do registro."] },
        { cor: "yellow", titulo: "Sem renovação", paras: ["Quem não renova fica sem seguro escoteiro e não pode participar de atividades nem agir em nome da UEB."] },
        { cor: "navy", titulo: "Mudança de categoria", paras: ["Sem renovação do ATV ou ao fim do mandato, o adulto pode mudar de categoria associativa (Estatuto, art. 42)."] }
      ],
      fonte: "Fonte: P.O.R.; Resolução CAN 07/2023; Estatuto da UEB" },

    { kicker: "Isenção",
      titulo: "Isenção e desconto",
      paras: ["A contribuição associativa anual tem isenção para famílias de baixa renda e desconto para famílias com vários membros. Os dois dependem de documentos que a UEL reúne e guarda."],
      cards: [
        { cor: "navy", titulo: "Quem tem direito", paras: ["Renda bruta familiar mensal de até 1,5 salário mínimo, ou família incluída no Bolsa Família ou no programa que o substituir."] },
        { cor: "yellow", titulo: "Todo ano", paras: ["A isenção é comprovada anualmente. Aprovada pela Região, a UEL anexa os documentos no sistema de registros."] },
        { cor: "navy", titulo: "Desconto familiar", paras: ["Na resolução de 2026, 35% a partir do terceiro associado da mesma família na mesma UEL (parentesco em 1º grau)."] }
      ],
      modais: [
        { id: "m-documentos-isencao", botao: "Clique para saber mais", titulo: "Documentos da isenção",
          paras: [
            "Resolução CAN 07/2023, art. 8º: formulário de solicitação, assinado pelo solicitante e pelo diretor-presidente da Região; renda: holerite atualizado do associado ou dos responsáveis ou, na falta dele, formulário socioeconômico avalizado pelo diretor-presidente do Grupo; programa social: comprovante de recebimento do benefício dos últimos 90 dias; documento oficial com foto do adulto ou dos responsáveis pelo jovem.",
            "São documentos sensíveis: guarda com acesso restrito."
          ] }
      ],
      fonte: "Fonte: Resolução CAN 07/2023; Resolução CAN 14/2025" },

    { kicker: "Dezembro",
      titulo: "Dezembro e o Certificado de Funcionamento",
      cards: [
        { cor: "navy", titulo: "Cotas", paras: ["A UEL pode comprar cotas de contribuição para o ano seguinte, com o valor de dezembro. Em 2025, de 1º a 15/12."] },
        { cor: "yellow", titulo: "Compensação", paras: ["O sistema de registros fecha no fim de dezembro para a compensação bancária. Em 2025, de 24/12 a 2/1."] },
        { cor: "navy", titulo: "Censo", paras: ["O censo anual considera o efetivo registrado, com boletos pagos e compensados, até 31 de dezembro."] },
        { cor: "yellow", titulo: "Certificado", paras: ["Até 31/12, a UEL cumpre os requisitos do Certificado de Autorização de Funcionamento Anual do ano seguinte."] }
      ],
      destaque: "As datas e os valores mudam a cada ano: confira a resolução do CAN sobre a contribuição associativa do ano.",
      fonte: "Fonte: Resolução CAN 14/2025; Resolução CAN 07/2023" },

    { kicker: "Ciclo",
      titulo: "O ciclo anual da secretaria",
      cards: [
        { cor: "navy", titulo: "Todo mês", paras: ["Registros e ATVs que vencem; novos membros registrados antes da primeira atividade; fichas atualizadas; arquivamento."] },
        { cor: "yellow", titulo: "Todo semestre", paras: ["Conselho de Pais de cada seção, coordenado pelo chefe de seção (Regra 038)."] },
        { cor: "navy", titulo: "Uma vez por ano", paras: ["Pedidos de isenção; Assembleia de Grupo e ata no sistema; declaração da patrocinadora, se houver; registros e títulos da UEL."] },
        { cor: "yellow", titulo: "Até 31/12", paras: ["Registros exigidos pelo Certificado efetivados e pagos; ata no sistema; cotas do ano seguinte, na primeira quinzena, se a UEL optar por elas."] }
      ],
      destaque: "Esses prazos entram no Calendário de Grupo, com data e responsável, ao lado das atividades.",
      fonte: "Fonte: P.O.R.; Resolução CAN 07/2023; Resolução CAN 14/2025" },

    { kicker: "Vagas",
      titulo: "Vagas por seção",
      paras: ["O P.O.R. fixa o efetivo máximo de cada seção. Dentro desse limite, a Diretoria decide quantas vagas abre, conforme a equipe de escotistas disponível. A solicitação de ingresso feita pela internet é encaminhada à UEL e fica sujeita à existência de vagas."],
      cards: [
        { cor: "navy", titulo: "Alcateia", paras: ["24 crianças."] },
        { cor: "yellow", titulo: "Tropa Escoteira", paras: ["32 adolescentes."] },
        { cor: "navy", titulo: "Tropa Sênior", paras: ["32 jovens."] },
        { cor: "yellow", titulo: "Clã Pioneiro", paras: ["Sem efetivo máximo."] }
      ],
      destaque: "Na Ninhada, quando houver, o efetivo máximo é de 10 crianças.",
      fonte: "Fonte: P.O.R.; Resolução CAN 07/2023" },

    { kicker: "Espera",
      titulo: "Lista de espera",
      paras: ["Não há regra nacional sobre lista de espera. A UEL que a mantém precisa de critérios próprios, definidos pela Diretoria, conhecidos pelas famílias e aplicados a todos."],
      cards: [
        { cor: "navy", titulo: "Critérios", paras: ["Por exemplo: data do pedido, irmãos já registrados, idade de ingresso. Sem exceção para filhos de dirigentes."] },
        { cor: "yellow", titulo: "Quem guarda", paras: ["A secretaria, e não só a seção. A lista é da UEL."] },
        { cor: "navy", titulo: "Dados", paras: ["Só o necessário para o contato e a prioridade. Quando o pedido é atendido ou desistido, os dados saem da lista."] },
        { cor: "yellow", titulo: "Retorno", paras: ["Contato periódico com as famílias, mesmo sem vaga, e aviso quando a idade indica outra seção."] }
      ],
      fonte: "Fonte: P.O.R.; LGPD" },

    { kicker: "Ingresso",
      titulo: "Do contato ao registro",
      cards: [
        { cor: "navy", titulo: "Contato", paras: ["A UEL responde ao pedido feito no site nacional, por e-mail ou na sede."] },
        { cor: "yellow", titulo: "Conversa", paras: ["Entrevista com a família: funcionamento, valores, compromissos."] },
        { cor: "navy", titulo: "Inscrição", paras: ["Pedido dos responsáveis, ficha de inscrição e ficha médica."] },
        { cor: "yellow", titulo: "Aceitação", paras: ["A Diretoria aceita o pedido, segundo os critérios da UEL."] },
        { cor: "navy", titulo: "Registro", paras: ["Antes de qualquer atividade, com seguro escoteiro."] }
      ],
      destaque: "A ficha individual e a ficha médica são mantidas atualizadas no sistema de registros (Regra 039). As vias em papel, quando existem, ficam no arquivo da UEL.",
      modais: [
        { id: "m-visitante-provisorio", botao: "Visitante e provisório", titulo: "Visitante e provisório",
          paras: [
            "Na resolução de 2026: registro de visitante: gratuito, feito pela UEL para quem vai conhecer o Escotismo. Vale 1 dia, sem pernoite, até 5 dias por pessoa no ano, sem seguro escoteiro. Registro provisório: até 30 dias corridos de atividades do nível local, com seguro escoteiro. Depois disso, o registro institucional, com validade de 12 meses."
          ] }
      ],
      fonte: "Fonte: Resolução CAN 07/2023; P.O.R.; Resolução CAN 14/2025" },

    { kicker: "Voluntariado",
      titulo: "Lei do Voluntariado: o essencial",
      cards: [
        { cor: "navy", titulo: "O que é (art. 1º)", paras: ["Atividade não remunerada, prestada por pessoa física a entidade pública ou a instituição privada sem fins lucrativos, com objetivos educacionais, culturais, cívicos, recreativos ou de assistência, entre outros."] },
        { cor: "yellow", titulo: "O termo (art. 2º)", paras: ["O serviço voluntário é exercido mediante termo de adesão entre a entidade e o voluntário, do qual devem constar o objeto e as condições do exercício."] },
        { cor: "navy", titulo: "Despesas (art. 3º)", paras: ["O voluntário pode ser ressarcido das despesas que comprovadamente realizar nas atividades, desde que expressamente autorizadas pela entidade."] }
      ],
      destaque: "O serviço voluntário não gera vínculo empregatício nem obrigação trabalhista, previdenciária ou afim (art. 1º, parágrafo único).",
      fonte: "Fonte: Lei 9.608/1998" },

    { kicker: "ATV",
      titulo: "O que o ATV deve conter",
      paras: ["No Escotismo, o termo de adesão é o Acordo de Trabalho Voluntário. O que conta é o conteúdo: um documento com outro nome cumpre a lei se tiver os elementos do art. 2º."],
      cards: [
        { cor: "navy", titulo: "Partes", paras: ["A entidade, identificada, e o voluntário. Os dois assinam."] },
        { cor: "yellow", titulo: "Objeto", paras: ["O serviço prestado: a função, a seção ou a área."] },
        { cor: "navy", titulo: "Condições", paras: ["Como o serviço é exercido: prazo, disponibilidade, local, compromissos das partes, forma de encerramento."] }
      ],
      modais: [
        { id: "m-convem-incluir", botao: "O que convém incluir", titulo: "O que convém incluir",
          paras: [
            "Além do que a lei exige: declaração de que o serviço é voluntário e não remunerado; a regra do ressarcimento: só despesas autorizadas antes e comprovadas; data de início e de término, e como se renova; local, data e assinatura das duas partes.",
            "Valor fixo pago todo mês, sem comprovação de despesa, não é ressarcimento."
          ] }
      ],
      fonte: "Fonte: Lei 9.608/1998; P.O.R." },

    { kicker: "Assinatura",
      titulo: "Quem assina e quando",
      cards: [
        { cor: "navy", titulo: "Associação própria", paras: ["A entidade é a própria associação, representada por quem o estatuto indicar, em geral o diretor-presidente."] },
        { cor: "yellow", titulo: "UEL integrada", paras: ["A UEL integra a personalidade jurídica da UEB. O acordo é firmado com a UEL, pelo diretor-presidente."] },
        { cor: "navy", titulo: "UEL patrocinada", paras: ["A UEL adota a personalidade jurídica da patrocinadora. Quem assina segue o convênio com a patrocinadora."] }
      ],
      destaque: "O ATV é assinado na nomeação, antes de o adulto assumir a função: aceitar e estar disposto a assinar o acordo é requisito para a nomeação (Regra 129). A cada renovação ou mudança de função, novo acordo.",
      fonte: "Fonte: Estatuto da UEB; P.O.R." },

    { kicker: "Acordo",
      titulo: "Registro do adulto e guarda do acordo",
      cards: [
        { cor: "navy", titulo: "Dois prazos", paras: ["O registro vence em 12 meses; o ATV, no prazo que ele fixar. A secretaria acompanha os dois."] },
        { cor: "yellow", titulo: "Ordem", paras: ["Primeiro o registro e o acordo; só depois o adulto atua com os jovens."] },
        { cor: "navy", titulo: "Guarda", paras: ["O ATV assinado fica no arquivo da UEL, e não com quem o assinou. Uma cópia vai para o voluntário."] },
        { cor: "yellow", titulo: "Depois do fim", paras: ["O acordo prova que o serviço foi voluntário. Convém guardá-lo pelo menos dois anos após o término (CF, art. 7º, XXIX)."] }
      ],
      fonte: "Fonte: P.O.R.; Constituição Federal; Lei 9.608/1998" },

    { kicker: "Arquivo",
      titulo: "O arquivo da UEL",
      cards: [
        { cor: "navy", titulo: "O que", paras: ["Estatuto e regulamento, atas, registros e títulos, ATVs, fichas, autorizações, termos, isenções, documentos financeiros."] },
        { cor: "yellow", titulo: "Onde", paras: ["Papel em lugar fechado na sede; digitais em pasta da UEL, com acesso por função, e não em conta pessoal."] },
        { cor: "navy", titulo: "Quem acessa", paras: ["Cada função vê o que precisa. Dados de jovens e documentos de isenção, só quem trabalha com eles."] },
        { cor: "yellow", titulo: "Quem responde", paras: ["Um responsável pelo arquivo e uma lista do que existe e de onde está."] }
      ],
      fonte: "Fonte: P.O.R.; LGPD; Política de Tratamento de Dados" },

    { kicker: "Prazos de guarda",
      titulo: "Por quanto tempo guardar",
      cards: [
        { cor: "navy", titulo: "Atas e estatuto", paras: ["Sem descarte: provam a existência, as decisões e os mandatos da associação."] },
        { cor: "yellow", titulo: "ATVs", paras: ["Enquanto vigentes e, depois, pelo menos dois anos após o término."] },
        { cor: "navy", titulo: "Fichas", paras: ["Enquanto o membro estiver ativo. Depois, elimina-se o que não é necessário, salvo obrigação legal."] },
        { cor: "yellow", titulo: "Autorizações", paras: ["Enquanto durar a finalidade para a qual foram dadas."] },
        { cor: "navy", titulo: "Financeiros", paras: ["Pelo prazo que o contador indicar."] }
      ],
      fonte: "Fonte: LGPD; Política de Tratamento de Dados; Constituição Federal" },

    { kicker: "Titulares",
      titulo: "Pedidos de acesso e de exclusão",
      cards: [
        { cor: "navy", titulo: "Acesso", paras: ["O titular, ou o responsável pelo jovem, tem direito de acesso aos próprios dados (LGPD, art. 18, II). Confirma-se quem pede."] },
        { cor: "yellow", titulo: "Exclusão", paras: ["Os dados são eliminados quando termina o tratamento, salvo os que a lei manda conservar (art. 16). No sistema nacional, o pedido segue ao encarregado: dpo@escoteiros.org.br."] },
        { cor: "navy", titulo: "Transparência", paras: ["A Política de Governança trata estatuto, atas e demonstrações contábeis como informações de transparência. O estatuto e o regulamento da UEL dizem como os associados os consultam."] }
      ],
      fonte: "Fonte: LGPD; Política de Tratamento de Dados; Política de Governança Institucional" },

    { kicker: "Roteiro",
      titulo: "Roteiro de leitura",
      lista: [
        "P.O.R.: Regras 036 (registro), 038 (Conselho de Pais), 039 (escrituração), 040 (admissão), 129 (nomeação); efetivo das seções.",
        "Resolução CAN 07/2023: arts. 1º a 8º (registro, renovação, ingresso, isenção) e 12 (Certificado).",
        "Resolução CAN 14/2025: validade do registro, visitante, provisório, desconto familiar, cotas e censo.",
        "Lei 9.608/1998: arts. 1º a 3º.",
        "Estatuto da UEB: arts. 8º (personalidade jurídica das UELs) e 42 (categorias).",
        "LGPD, arts. 6º, 16 e 18; Política de Tratamento de Dados, itens 6 e 8."
      ],
      fonte: "Fonte: P.O.R.; Resolução CAN 07/2023; Resolução CAN 14/2025; Lei 9.608/1998; Estatuto da UEB; Constituição Federal; LGPD; Política de Tratamento de Dados" },

    { tipo: "fim", titulo: "O arquivo é da UEL", texto: "Não de quem está na função." }
  ]
};
