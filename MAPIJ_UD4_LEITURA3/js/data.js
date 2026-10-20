/* Conteúdo do estudo de caso. Para editar textos, altere apenas este arquivo. */
var CONTEUDO = {

  /* Linha amarela acima do título (como “UD 3 - Leitura 3” nos PDFs do módulo). */
  rotulo: "UD 4 - Leitura 3 · Estudo de caso e variações",
  titulo: "Comportamento sexualizado inadequado entre jovens no escotismo",
  subtitulo: "Estudo de caso e variações · Foco: proteção de crianças e adolescentes",

  objetivos: [
    "Compreender o que caracteriza comportamento sexualizado inadequado entre jovens.",
    "Conhecer o fluxo básico de ação do grupo escoteiro em casos de suspeita de abuso.",
    "Refletir sobre diferentes cenários e variações do mesmo caso.",
    "Fortalecer a cultura de proteção e a atuação responsável dos adultos."
  ],

  casoBase: [
    "Menino, 10 anos; menina, 10 anos; ambos crianças, do mesmo grupo escoteiro.",
    "Durante uma atividade, o menino pede para ver e tocar partes íntimas da menina.",
    "Ele diz para ela “não contar a ninguém”.",
    "A menina conta à mãe; a mãe procura o grupo e espera uma atitude.",
    "O menino tem transtornos psicológicos diagnosticados (incluindo TDAH)."
  ],

  /* Aviso mostrado abaixo do campo de reflexão. Ajuste conforme a política do curso. */
  avisoReflexao: "Ao enviar, sua reflexão é registrada na plataforma e pode ser lida pela equipe do curso. Não escreva nomes nem dados que identifiquem crianças, famílias ou casos reais. Depois de enviada, ela não pode ser editada; se você sair desta tela sem enviar, o texto é descartado.",

  perguntaDisparadora: "Quais são as primeiras atitudes que o grupo deve tomar?",

  /* Questão de múltipla seleção do caso-base */
  quiz: {
    enunciado: "Marque todas as atitudes que o grupo deve tomar nas primeiras horas.",
    opcoes: [
      { texto: "Separar os dois de forma discreta: cada um com um adulto, à vista de outros, sem ninguém isolado.", correta: true,
        fb: "Correto. A proteção imediata da menina vem primeiro, sem criar outro risco e sem dar explicações aos demais jovens." },
      { texto: "Registrar o ocorrido de forma objetiva e sigilosa (data, local, contexto, relato resumido, medidas adotadas).", correta: true,
        fb: "Correto. O registro é interno, sem julgamentos, e serve de base para a comunicação às autoridades." },
      { texto: "Comunicar ao Conselho Tutelar e relatar no Canal de Conduta dos Escoteiros do Brasil.", correta: true,
        fb: "Correto. O dever de comunicar é do grupo e de cada adulto individualmente, e não depende de prova nem de certeza." },
      { texto: "Afastar o menino preventivamente das atividades, como medida de proteção.", correta: true,
        fb: "Correto. O afastamento não é punição definitiva: dura até haver avaliação profissional e condições seguras para um eventual retorno." },
      { texto: "Chamar o menino e pedir que conte a versão dele, para entender o que houve.", correta: false,
        fb: "Conversar sobre o fato com o menino cabe à rede de proteção. O grupo não assume papel de investigador ou juiz." },
      { texto: "Reunir as duas famílias para que resolvam o assunto entre elas.", correta: false,
        fb: "O grupo não pode tratar como “questão apenas entre famílias”. As famílias são acompanhadas separadamente." },
      { texto: "Pedir que a menina repita o relato com detalhes diante dos escotistas, para registrar tudo.", correta: false,
        fb: "Isso revitimiza. Não se interroga a menina nem se pedem detalhes: a escuta cabe à rede de proteção." },
      { texto: "Tratar como “brincadeira de criança”, já que os dois têm a mesma idade.", correta: false,
        fb: "A mesma idade não significa “curiosidade natural”: o pedido de segredo mostra consciência de que era errado." }
    ]
  },

  indica: [
    "Pedido de ver/tocar partes íntimas + instrução de segredo = marcadores de risco.",
    "Indício de possível abuso ou tentativa de abuso sexual entre pares.",
    "Mesma idade não significa “curiosidade natural”: o pedido de segredo indica consciência de que é errado.",
    "Os transtornos do menino não eliminam a necessidade de proteção e notificação.",
    "Ambos são crianças (ECA, art. 2º): a resposta do Estado é pelo Conselho Tutelar, só com medidas de proteção (art. 105)."
  ],

  deveres: [
    "Proteger a menina no âmbito das atividades do grupo.",
    "Registrar o ocorrido de forma objetiva e sigilosa.",
    "Comunicar ao Conselho Tutelar e relatar no Canal de Conduta dos Escoteiros do Brasil; orientar a família (polícia, etc.).",
    "Adotar medidas internas de segurança (afastamento preventivo, supervisão).",
    "Trabalhar com as famílias de forma separada e protegida."
  ],

  fluxo: [
    { n: 1, titulo: "Proteção imediata da menina",
      itens: [
        "Separar os dois, sem criar outro risco.",
        "Cada um fica com um adulto, à vista de outros. Ninguém fica isolado, nem a menina, nem o menino.",
        "A separação é discreta e sem explicações aos demais jovens."
      ] },
    { n: 2, titulo: "Registro interno sigiloso",
      itens: [
        "Data, local, contexto.",
        "Relato resumido do que foi informado (sem julgamentos).",
        "Medidas já adotadas."
      ] },
    { n: 3, titulo: "Comunicar às autoridades e aos Escoteiros do Brasil",
      itens: [
        "Conselho Tutelar, Delegacia, Disque 100, 190 (se risco imediato).",
        "Dever de comunicar é do grupo (Lei 13.431/2017, art. 13; POR, Regra 143, V).",
        "Relato no Canal de Conduta dos Escoteiros do Brasil (Diretoria de Integridade) e aviso à Região.",
        "O grupo não pode tratar como “questão apenas entre famílias”."
      ] },
    { n: 4, titulo: "Afastamento preventivo do menino",
      itens: [
        "Medida de proteção, não punição definitiva.",
        "Vale até haver avaliação profissional e condições seguras para eventual retorno."
      ] },
    { n: 5, titulo: "Trabalho separado com as famílias",
      itens: [
        "Família da menina: proteção, escuta, apoio, encaminhamentos.",
        "Família do menino: gravidade, acompanhamento profissional, compromissos de segurança."
      ] },
    { n: 6, titulo: "Revisão de práticas de proteção no grupo",
      itens: [
        "Supervisão das atividades.",
        "Formação dos adultos em proteção infantojuvenil.",
        "Cultura de escuta e registro."
      ] }
  ],

  naoFazer: [
    "Tratar como “brincadeira de criança”.",
    "Resolver apenas “entre famílias”, sem acionar autoridades.",
    "Expor a menina (repetir o relato várias vezes ou diante de muitas pessoas).",
    "Interrogar a menina ou pedir detalhes: a escuta cabe à rede de proteção.",
    "Permitir que o menino participe normalmente, sem restrições.",
    "Assumir papel de investigador ou juiz."
  ],

  grupos: [
    { id: "jovens", titulo: "Quem são os jovens", desc: "Idade, diagnóstico e quem é o autor." },
    { id: "familias", titulo: "Como as famílias reagem", desc: "Acordo, pressão, silêncio, negativa e minimização." },
    { id: "grupo", titulo: "O que o grupo fez ou sabe", desc: "Local do fato, histórico, omissão e o que de fato ocorreu." }
  ],

  variacoes: [
    {
      id: 1, grupo: "jovens", titulo: "Os dois com 12 anos",
      ese: "E se os dois tivessem 12 anos?",
      muda: [
        "12 anos completos = adolescente (ECA, art. 2º): a mudança é jurídica, não de comportamento.",
        "A conduta pode ser apurada como ato infracional, com Ministério Público e Justiça da Infância.",
        "Respostas possíveis: remissão (art. 126) ou medida socioeducativa em meio aberto (art. 112); antes dos 12, só medidas de proteção (art. 105)."
      ],
      naoMuda: [
        "Proteger a menina.",
        "Registrar.",
        "Comunicar ao Conselho Tutelar.",
        "Afastar preventivamente o menino."
      ],
      sintese: "Muda a resposta do Estado, não o dever do grupo.",
      pergunta: "Por que um aniversário pode mudar a resposta do Estado, mas não o que o grupo deve fazer?"
    },
    {
      id: 2, grupo: "familias", titulo: "As famílias “se acertam”",
      ese: "E se os pais disserem “já nos entendemos, não levem adiante”?",
      muda: [
        "Os pais pedem que o caso não siga adiante e dizem que a questão já foi resolvida entre eles."
      ],
      naoMuda: [
        "O grupo não pode delegar às famílias a decisão sobre proteção e notificação.",
        "Mesmo com “acordo”: manter as medidas de proteção.",
        "Comunicar ao Conselho Tutelar (dever legal, não opção das famílias).",
        "Manter o registro interno."
      ],
      mais: [
        { titulo: "Base legal",
          itens: [
            "Ao “se acertarem” sem buscar apoio para os filhos, as famílias se omitem, e a omissão que ofende direito de criança é conduta ilícita (ECA, art. 5º).",
            "Essa omissão não dispensa os demais: o dever é de todos (CF, art. 227; ECA, arts. 4º e 18).",
            "Crimes sexuais contra vulneráveis: ação penal pública incondicionada (CP, art. 225)."
          ] }
      ],
      sintese: "O dever de comunicar não pertence às famílias.",
      pergunta: "Se a família não protege, quem deve proteger? E se a família protege, os demais adultos ficam dispensados?"
    },
    {
      id: 3, grupo: "familias", titulo: "Postura combativa dos pais da vítima",
      ese: "E se os pais da menina exigirem exclusão imediata, quiserem que o grupo tome partido ou ameaçarem ir à imprensa?",
      muda: [
        "Há pressão por exclusão imediata, por tomada de partido e ameaça de exposição pública."
      ],
      naoMuda: [
        "O grupo mantém postura institucional de proteção, sem entrar em “guerra de narrativas”.",
        "O afastamento preventivo é imediato e não é punição: protege enquanto o caso é avaliado.",
        "O grupo decide por critérios, não pela pressão de nenhuma das famílias."
      ],
      mais: [
        { titulo: "Como tratar a questão disciplinar",
          itens: [
            "Jovem menor de 18: a questão é tratada no próprio grupo, com instrumentos educativos e com os pais (POR, Regras 042, III, e 144, r).",
            "O processo disciplinar formal da UEB vale para maiores de 18 (Res. CAN 08/2025, art. 1º).",
            "Exclusão do associado só com justa causa, reconhecida em procedimento com defesa e recurso (Código Civil, art. 57)."
          ] },
        { titulo: "Sigilo e exposição",
          itens: [
            "Evitar exposição pública; orientar as famílias a não expor nomes, imagens e detalhes.",
            "Reforçar o sigilo interno (ECA, art. 143) e limitar o conhecimento do caso a quem precisa saber."
          ] }
      ],
      sintese: "Proteger já, sem punir já, e decidir por critérios, não por pressão.",
      pergunta: "Como explicar à família da vítima que proteger já, sem punir já, é o que garante uma decisão justa e duradoura?"
    },
    {
      id: 4, grupo: "jovens", titulo: "Menino sem transtorno psicológico",
      ese: "E se o menino não tivesse nenhum diagnóstico?",
      muda: [
        "Sem diagnóstico, a pergunta muda: de onde veio esse comportamento?",
        "Conduta sexualizada fora do comum para a idade pode indicar exposição a abuso, pornografia ou violência.",
        "Por isso a avaliação profissional é necessária nos dois casos."
      ],
      naoMuda: [
        "O diagnóstico não explica a conduta: o TDAH envolve sobretudo desatenção e impulsividade, e o pedido de segredo mostra que ele sabia que era errado.",
        "Com ou sem diagnóstico, a conduta é a mesma e pede a mesma resposta.",
        "Com diagnóstico, a rede que já atende o menino pode ajudar o grupo: com autorização da família, os profissionais podem orientar o plano de supervisão.",
        "O diagnóstico pode exigir mais supervisão, nunca menos."
      ],
      mais: [
        { titulo: "E com o menino? O que o grupo faz?",
          itens: [
            "Afasta preventivamente e explica o motivo: a medida protege também o menino; não é punição.",
            "Mantém o vínculo: segue em contato com a família e não trata o menino como caso encerrado.",
            "Encaminha para a rede: o Conselho Tutelar pode requisitar tratamento psicológico (ECA, art. 101, V) e obrigar os pais a encaminhá-lo a tratamento especializado (art. 129, VI).",
            "Condiciona o retorno a: acompanhamento profissional em andamento; plano de supervisão por escrito; nenhum contato sem supervisão com a menina; mudança de seção, se for o caso.",
            "Não faz: diagnosticar, investigar o caso com o menino, expô-lo ou excluí-lo sem processo."
          ] }
      ],
      sintese: "Com ou sem diagnóstico, a conduta e a resposta são as mesmas.",
      pergunta: "Que argumentos usar com uma família que diz “ele não tem nada, foi só uma curiosidade”?"
    },
    {
      id: 5, grupo: "grupo", titulo: "Fato fora de atividade oficial",
      ese: "E se o episódio tiver ocorrido em encontro informal de escoteiros, fora de atividade oficial do grupo?",
      muda: [
        "A responsabilidade do grupo pelo fato só existe quando ele havia assumido o cuidado.",
        "Em atividade planejada, aprovada pela diretoria e autorizada pelos pais: responde o grupo, por meio dos seus escotistas e do diretor-presidente (POR, Regra 141, V e VI).",
        "Em encontro organizado pelas famílias, respondem os pais (Código Civil, art. 932, I).",
        "Em encontro convocado por um escotista fora dessas regras, quem convocou assumiu o cuidado e também responde."
      ],
      naoMuda: [
        "Depois de saber, o dever de todos é o mesmo, onde quer que o fato tenha ocorrido.",
        "Comunicar às autoridades (Lei 13.431/2017, art. 13).",
        "Proteger o ambiente escoteiro, onde os dois continuam convivendo (POR, Regra 143, V).",
        "Proteger a menina nas atividades oficiais, registrar como informação de proteção e comunicar às autoridades."
      ],
      mais: [
        { titulo: "Ponto de atenção",
          itens: [
            "Ambos são membros do mesmo grupo; a dinâmica de relacionamento foi construída também no contexto escoteiro."
          ] }
      ],
      sintese: "O grupo responde pelo que assumiu cuidar; o dever de agir depois de saber vale sempre.",
      pergunta: "Até que ponto o grupo é responsável pelo que acontece “fora de horário”? Onde traçar a linha?"
    },
    {
      id: 6, grupo: "jovens", titulo: "Menino com 12, menina com 10",
      ese: "E se o menino tivesse 12 anos e a menina, 10?",
      muda: [
        "Duas mudanças ao mesmo tempo: ele passa a ser adolescente (ver Variação 1) e surge um desequilíbrio entre os dois.",
        "Diferença de idade, de maturidade e, em geral, de seção (Tropa e Alcateia) aumenta a preocupação.",
        "Pedido + segredo + desequilíbrio de poder: sinal mais forte de abuso entre pares.",
        "Menina menor de 14 anos: a lei penal considera o consentimento irrelevante (CP, art. 217-A, §5º)."
      ],
      naoMuda: [
        "As mesmas medidas do caso-base, com afastamento preventivo ainda mais evidente."
      ],
      sintese: "Maior desequilíbrio de poder reforça as mesmas medidas.",
      pergunta: "Em que situações uma pequena diferença de idade gera grande diferença de poder entre os jovens?"
    },
    {
      id: 7, grupo: "grupo", titulo: "Outros episódios anteriores",
      ese: "E se houver outros episódios anteriores, com ela ou com outras jovens?",
      muda: [
        "Padrão repetido aumenta a gravidade e a urgência.",
        "Reforça a necessidade de afastamento preventivo imediato e de comunicação às autoridades.",
        "Exige revisão de possíveis omissões anteriores."
      ],
      naoMuda: [
        "O fluxo básico continua o mesmo.",
        "O grupo deve buscar informações internas com cuidado, sem “investigar” por conta própria."
      ],
      sintese: "Padrão repetido aumenta a urgência, não muda o fluxo.",
      pergunta: "Que sinais o grupo poderia ter observado antes que indicavam um padrão de comportamento inadequado?"
    },
    {
      id: 8, grupo: "familias", titulo: "Menino nega e família o defende",
      ese: "E se o menino negar tudo, e a família dele disser que a menina está mentindo?",
      muda: [
        "Surge uma versão contrária: negativa do menino e acusação de mentira contra a menina."
      ],
      naoMuda: [
        "O grupo não assume papel de juiz; não decide quem diz a verdade.",
        "Afasta o menino preventivamente, mesmo com a negativa. A medida protege, não depende de confissão e não declara culpa. É temporária e é revista quando a rede de proteção se manifestar.",
        "Explica à família dele o sentido da medida: não é uma acusação; serve para proteger os dois enquanto o caso é avaliado.",
        "Não tenta obter uma confissão: conversar sobre o fato com o menino cabe à rede de proteção, não ao grupo.",
        "Trata o caso como suspeita, com base no relato da menina: para comunicar não é preciso prova nem certeza (ECA, art. 13).",
        "Comunica às autoridades e deixa que elas conduzam a apuração."
      ],
      sintese: "Afastar protege e não depende de confissão nem declara culpa.",
      pergunta: "Como explicar à família do menino que afastá-lo não significa considerá-lo culpado?"
    },
    {
      id: 9, grupo: "familias", titulo: "Menina diz que “não foi nada”",
      ese: "E se a menina minimizar o ocorrido e disser que quer continuar vendo o menino no grupo?",
      muda: [
        "A própria menina diz que não foi nada e quer manter o convívio."
      ],
      naoMuda: [
        "A fala da menina não elimina a necessidade de proteção.",
        "Crianças e adolescentes podem minimizar por medo, vergonha, pressão ou falta de compreensão.",
        "A instrução de segredo já é indicador de que algo errado ocorreu.",
        "O grupo mantém as medidas de proteção, o registro, a orientação de acompanhamento e a comunicação ao Conselho Tutelar."
      ],
      sintese: "A fala da menina não dispensa a proteção.",
      pergunta: "Como ouvir a menina sem transformá-la em “testemunha” ou “investigada”?"
    },
    {
      id: 10, grupo: "grupo", titulo: "O grupo não faz nada e o caso se repete",
      ese: "E se o grupo decidir “não criar caso” e, meses depois, houver outro episódio, talvez mais grave?",
      muda: [
        "Para a associação: responsabilidade civil por falha no dever de cuidado.",
        "Para os adultos: apuração ético-disciplinar e, em tese, responsabilidade penal por omissão de quem assumiu o cuidado (CP, art. 13, §2º).",
        "Para as vítimas: risco de reincidência e agravamento dos abusos.",
        "Para o Movimento: perda de confiança e cultura de impunidade."
      ],
      naoMuda: [
        "O dever de proteger, registrar e comunicar já existia no primeiro episódio e continua valendo."
      ],
      sintese: "Omitir-se tem consequências para as vítimas, para o grupo e para os adultos.",
      pergunta: "Que argumentos usar com um dirigente que diz “não vamos exagerar, senão vão dizer que somos um grupo de monstros”?"
    },
    {
      id: 11, grupo: "jovens", titulo: "Autor com 18 anos ou mais",
      ese: "E se quem fez o pedido fosse um pioneiro ou um escotista adulto?",
      muda: [
        "Crime em tese: estupro de vulnerável, se houve toque (CP, art. 217-A); consentimento irrelevante.",
        "Afastamento imediato e total do adulto de qualquer atividade (Res. CAN 08/2025, art. 18, §4º).",
        "Comunicação também à polícia, além do Conselho Tutelar."
      ],
      naoMuda: [
        "O dever de comunicar ao Conselho Tutelar e de relatar no Canal de Conduta dos Escoteiros do Brasil.",
        "Nunca “resolver internamente” nem esperar a apuração da instituição para comunicar."
      ],
      sintese: "Adulto: afastamento total e imediato, comunicação à polícia; nunca resolver internamente.",
      pergunta: "Por que a tentação de “resolver em casa” costuma ser maior quando o autor é um adulto querido do grupo?"
    },
    {
      id: 12, grupo: "grupo", titulo: "Só o pedido, sem toque",
      ese: "E se o menino tivesse apenas pedido, sem chegar a tocar a menina?",
      muda: [
        "O enquadramento jurídico pode ser outro, ou não haver; isso cabe às autoridades."
      ],
      naoMuda: [
        "Pedido + instrução de segredo continua sendo marcador de risco.",
        "A Lei 13.431/2017 define violência sexual de forma ampla (art. 4º, III).",
        "O dever de proteger, registrar e comunicar não muda."
      ],
      sintese: "Não é preciso ter certeza para comunicar.",
      pergunta: "Por que o grupo não precisa ter certeza sobre o que aconteceu para comunicar?"
    },
    {
      id: 13, grupo: "familias", titulo: "Mãe da vítima pede silêncio",
      ese: "E se a mãe da menina pedir que o grupo não comunique ninguém?",
      muda: [
        "A própria família da vítima pede que o caso não seja comunicado."
      ],
      naoMuda: [
        "O dever de comunicar é legal e não depende da família (Lei 13.431/2017, art. 13).",
        "Acolher o medo da família e explicar que comunicar não é expor publicamente.",
        "Informar a família antes de comunicar, sem ceder no dever (exceto quando o suposto autor é familiar: ver o alerta abaixo).",
        "Manter sigilo e registro interno."
      ],
      mais: [
        { titulo: "Isso muda quando o suposto autor é familiar", estilo: "alerta",
          itens: [
            "Se a pessoa apontada como autora do fato for um familiar, a família não é informada antes da comunicação.",
            "Avisar antes pode expor a criança a pressão para silenciar, retaliação ou novo contato com o autor.",
            "O grupo comunica diretamente às autoridades e mantém o sigilo e o registro interno."
          ] }
      ],
      sintese: "O dever de comunicar é legal e não depende da família.",
      pergunta: "Como explicar à mãe que a comunicação também protege a filha dela?"
    },
    {
      id: 14, grupo: "grupo", titulo: "Tudo aconteceu numa rede social",
      ese: "E se o pedido e a ordem de segredo tivessem acontecido por mensagem, numa rede social ou no grupo de WhatsApp da seção?",
      muda: [
        "O ambiente muda; a resposta, não: a lei inclui a exposição do corpo em foto ou vídeo por meio eletrônico (Lei 13.431/2017, art. 4º, III)."
      ],
      naoMuda: [
        "Nenhum adulto pede, recebe, guarda ou repassa a imagem: solicitar ou armazenar esse material é crime, e a exceção legal não alcança escotistas (ECA, art. 241-B, caput e § 2º).",
        "A família preserva as provas, sem apagar a conversa; o grupo registra só data, plataforma e perfis envolvidos.",
        "Comunicar ao Conselho Tutelar e ao Canal de Conduta; orientar a denúncia à plataforma, que deve remover e comunicar o conteúdo (Lei 15.211/2025, art. 27), e à SaferNet (denuncie.org.br)."
      ],
      mais: [
        { titulo: "Se foi no grupo da seção",
          itens: [
            "O adulto que administra o grupo interrompe a circulação, sem baixar nem reencaminhar.",
            "Menores de 13 anos só participam pelo número do responsável (Manual Institucional - ECA Digital)."
          ] }
      ],
      sintese: "Muda o ambiente, não o dever: proteger, registrar e comunicar, sem pedir nem guardar imagens.",
      pergunta: "O grupo de WhatsApp da seção é um espaço escoteiro? Quem cuida dele?"
    },
    {
      id: 15, grupo: "grupo", titulo: "Os dois com 10 anos, na internet",
      ese: "E se o caso-base tivesse acontecido por mensagem, entre os dois, com 10 anos cada um?",
      muda: [
        "Primeira constatação: nenhum dos dois deveria estar ali. O WhatsApp exige 13 anos, e quem tem menos de 13 só participa dos grupos pelo número do responsável (Manual Institucional - ECA Digital).",
        "A lei exige que contas de usuários de até 16 anos estejam vinculadas à de um responsável, e a plataforma deve suspender as contas abaixo da idade mínima (Lei 15.211/2025, art. 24, caput e § 4º)."
      ],
      naoMuda: [
        "Mas eles estavam lá: a resposta é a do caso-base, com os cuidados da Variação 14 (proteger, registrar, comunicar, sem pedir nem guardar imagens)."
      ],
      mais: [
        { titulo: "Com as famílias",
          itens: [
            "Orientar sobre o “cuidado ativo e contínuo” no uso da internet (Lei 15.211/2025, art. 3º, par. único).",
            "O grupo orienta, não substitui os pais."
          ] },
        { titulo: "No grupo",
          itens: [
            "Verificar se o contato entre os dois começou em algum grupo da seção com contas próprias de lobinhos e corrigir a prática."
          ] }
      ],
      sintese: "Nenhum dos dois deveria estar ali, mas a resposta é a do caso-base, com orientação às famílias e correção da prática do grupo.",
      pergunta: "Se nenhum dos dois deveria estar ali, quem falhou: as famílias, a plataforma ou também o grupo?"
    }
  ],

  principios: [
    "Prioridade absoluta à proteção de crianças e adolescentes.",
    "Não revitimizar: escuta cuidadosa, sigilo, evitar exposição.",
    "Registro e comunicação como dever institucional.",
    "Medidas de proteção antes de qualquer julgamento sobre “verdade”.",
    "Trabalho em rede: família, autoridades, Escoteiros do Brasil, serviços de saúde e assistência."
  ],

  levarConsigo: [
    "Em casos de suspeita de abuso, proteger, registrar e comunicar.",
    "“Acordo entre famílias” não substitui medidas de proteção e comunicação às autoridades.",
    "Diagnósticos médicos (ou falta deles) não definem se o grupo age ou não.",
    "Omissão pode gerar reincidência e responsabilização do grupo e dos adultos.",
    "Proteger é também proteger o próprio Movimento Escoteiro."
  ],

  referencias: [
    { titulo: "POR – Princípios, Organização e Regras", detalhe: "Escoteiros do Brasil, Capítulo 16 (Regras 042, 141, 143 e 144).",
      url: "https://escoteiros.org.br/downloads/principios-organizacao-e-regras-p-o-r" },
    { titulo: "Escoteiros do Brasil. Resolução CAN 08/2025 (Regime Disciplinar)", detalhe: "arts. 1º e 18.",
      url: "https://www.escoteiros.org.br/wp-content/uploads/2025/06/Resolucao-CAN-08_2025-Altera-o-Regime-Disciplinar-PAD.pdf" },
    { titulo: "Canal de Conduta", detalhe: "Escoteiros do Brasil.",
      url: "https://www.escoteiros.org.br/canal-de-conduta/" },
    { titulo: "Constituição Federal", detalhe: "art. 227.",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    { titulo: "Estatuto da Criança e do Adolescente (Lei 8.069/1990)", detalhe: "arts. 2º, 4º, 5º, 13, 18, 101, 105, 112, 126, 129, 143 e 241-B.",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm" },
    { titulo: "Código Civil", detalhe: "arts. 57 e 932, I.",
      url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
    { titulo: "Código Penal", detalhe: "arts. 13, §2º, 217-A e 225.",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm" },
    { titulo: "Lei 13.431/2017", detalhe: "Escuta especializada e dever de comunicar, arts. 4º, 7º e 13.",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13431.htm" },
    { titulo: "ECA Digital (Lei 15.211/2025)", detalhe: "art. 3º, parágrafo único.",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm" },
    { titulo: "Manual institucional sobre o ECA Digital", detalhe: "Escoteiros do Brasil.",
      url: "https://www.escoteiros.org.br/downloads/manual-institucional-sobre-o-eca-digital/" },
    { titulo: "SaferNet Brasil – Canal de denúncias", detalhe: "denuncie.org.br.",
      url: "https://denuncie.org.br" }
  ]
};
