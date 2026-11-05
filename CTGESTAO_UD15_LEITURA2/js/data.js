/* Conteúdo: UD 15 – Política de tratamento de dados · Leitura 2 (Pesquisa). Fonte: PPTX da leitura. */
window.CONTEUDO = {
  contexto: "Curso Técnico de Gestão de UELs · UD 15 – Tratamento de dados",
  slides: [
    { tipo: "capa",
      kicker: "Curso Técnico de Gestão de UELs",
      titulo: "Política de tratamento de dados",
      sub: "UD 15 – Pesquisa" },

    { kicker: "Conceitos",
      titulo: "Dados pessoais e tratamento",
      cards: [
        { cor: "navy", titulo: "Dado pessoal", paras: ["Informação relacionada a pessoa natural identificada ou identificável: nome, endereço, telefone, foto."] },
        { cor: "yellow", titulo: "Dado sensível", paras: ["Entre outros: origem racial ou étnica, convicção religiosa, dado referente à saúde, dado biométrico."] },
        { cor: "navy", titulo: "Tratamento", paras: ["Toda operação com dados: coleta, acesso, reprodução, transmissão, arquivamento, eliminação."] }
      ],
      destaque: "A Política de Tratamento de Dados dos Escoteiros do Brasil vale para dados em qualquer mídia ou formato, inclusive arquivos em papel. Pedir, guardar, consultar e repassar uma ficha são formas de tratamento.",
      fonte: "Fonte: LGPD; Política de Tratamento de Dados" },

    { kicker: "Princípios",
      titulo: "Os princípios que orientam a ficha",
      cards: [
        { cor: "navy", titulo: "Finalidade", paras: ["Propósitos legítimos, específicos, explícitos e informados ao titular."] },
        { cor: "yellow", titulo: "Adequação", paras: ["O tratamento é compatível com as finalidades informadas."] },
        { cor: "navy", titulo: "Necessidade", paras: ["O mínimo necessário: dados pertinentes, proporcionais e não excessivos."] },
        { cor: "yellow", titulo: "Segurança", paras: ["Medidas técnicas e administrativas contra acessos não autorizados, perda ou difusão."] }
      ],
      destaque: "Na Política, os dados pedidos são usados apenas para o propósito que motivou o cadastro, conforme a Tabela de Finalidades.",
      fonte: "Fonte: LGPD; Política de Tratamento de Dados" },

    { kicker: "Bases legais",
      titulo: "Bases legais e Tabela de Finalidades",
      paras: ["Todo tratamento precisa de uma base legal. Entre as hipóteses da LGPD estão o consentimento, o cumprimento de obrigação legal, a execução de contrato e o legítimo interesse."],
      cards: [
        { cor: "navy", titulo: "Dados sensíveis", paras: ["Consentimento específico e destacado, para finalidades específicas, ou situações indispensáveis, como proteger a vida."] },
        { cor: "yellow", titulo: "Tabela", paras: ["Para cada grupo de dados do Paxtu, a Tabela indica a base legal e a finalidade."] },
        { cor: "navy", titulo: "Na UEL", paras: ["O que a ficha da UEL pede além do Paxtu também precisa de finalidade e de base."] }
      ],
      destaque: "Mesmo sem exigência de consentimento, valem os princípios e os direitos do titular.",
      modais: [
        { id: "m-tabela-finalidades", botao: "Clique para saber mais", titulo: "Tabela de Finalidades (Paxtu)",
          paras: [
            "Grupos de dados e base legal indicada: dados cadastrais pessoais e institucionais: consentimento; dados cadastrais familiares: amparo legal; dados biométricos e de saúde: consentimento; documentos e declarações dos adultos: amparo legal e legítimo interesse; conquistas, cursos e atividades: legítimo interesse.",
            "As finalidades indicadas incluem a aplicação do método, as atividades administrativas, campanhas, estudos e pesquisas."
          ] }
      ],
      fonte: "Fonte: LGPD; Tabela de Finalidades" },

    { kicker: "Crianças",
      titulo: "Dados de crianças e adolescentes",
      paras: ["O tratamento de dados de crianças e de adolescentes deve ser realizado no seu melhor interesse."],
      cards: [
        { cor: "navy", titulo: "Consentimento", paras: ["Para dados de crianças, consentimento específico e em destaque de pelo menos um dos pais ou do responsável legal."] },
        { cor: "yellow", titulo: "Sem excesso", paras: ["A participação em atividades não pode depender de informações além das estritamente necessárias."] },
        { cor: "navy", titulo: "Informação", paras: ["Simples, clara e acessível aos pais e adequada ao entendimento da criança."] }
      ],
      destaque: "Quem trata os dados deve manter pública a informação sobre os dados coletados e o seu uso.",
      fonte: "Fonte: LGPD" },

    { kicker: "Consentimento",
      titulo: "O consentimento válido",
      cards: [
        { cor: "navy", titulo: "Forma", paras: ["Por escrito ou por outro meio que demonstre a vontade do titular."] },
        { cor: "yellow", titulo: "Destaque", paras: ["Se for por escrito, em cláusula destacada das demais."] },
        { cor: "navy", titulo: "Prova", paras: ["Cabe a quem trata os dados provar que o consentimento foi obtido como a lei exige."] },
        { cor: "yellow", titulo: "Finalidade", paras: ["Refere-se a finalidades determinadas. Autorizações genéricas são nulas."] },
        { cor: "navy", titulo: "Revogação", paras: ["A qualquer momento, por procedimento gratuito e facilitado."] }
      ],
      fonte: "Fonte: LGPD" },

    { kicker: "Paxtu e UEL",
      titulo: "Dados no Paxtu e na UEL",
      cards: [
        { cor: "navy", titulo: "Informação restrita", paras: ["Os dados pessoais dos associados são informações restritas, cedidas só com autorização do titular."] },
        { cor: "yellow", titulo: "Níveis de acesso", paras: ["Os dados do ingresso ficam disponíveis aos níveis nacional, regional e local, conforme os níveis de acesso."] },
        { cor: "navy", titulo: "Registros da UEL", paras: ["As fichas individuais e a ficha médica são mantidas atualizadas no Paxtu."] }
      ],
      destaque: "Uma ficha em papel ou em planilha que repete o que o Paxtu já guarda multiplica as cópias e os riscos. Cada cópia precisa de finalidade, de local definido e de quem responda por ela.",
      fonte: "Fonte: Código de Conduta; P.O.R.; Política de Tratamento de Dados" },

    { kicker: "Segurança",
      titulo: "Acesso e segurança",
      paras: ["Quem trata dados deve adotar medidas técnicas e administrativas que os protejam de acessos não autorizados, perda, alteração ou difusão."],
      lista: [
        "cada informação tem quem precisa dela: a ficha médica, quem conduz a atividade; os documentos, quem cuida da secretaria;",
        "o acesso termina quando a função termina;",
        "fichas não circulam em grupos de mensagens nem ficam em pastas abertas;",
        "o que já não é necessário é eliminado, salvo quando há obrigação legal de guardar."
      ],
      destaque: "Um incidente de segurança que possa trazer risco ou dano relevante deve ser comunicado à autoridade nacional e aos titulares.",
      fonte: "Fonte: LGPD; Política de Tratamento de Dados" },

    { kicker: "Titular",
      titulo: "Os direitos do titular",
      paras: ["O titular, ou o responsável legal, pode pedir, a qualquer momento:"],
      lista: [
        "confirmação de que há tratamento e acesso aos dados;",
        "correção de dados incompletos, inexatos ou desatualizados;",
        "eliminação de dados desnecessários ou excessivos;",
        "informação sobre com quem os dados foram compartilhados;",
        "revogação do consentimento."
      ],
      destaque: "Nos Escoteiros do Brasil, os pedidos vão ao encarregado de dados: dpo@escoteiros.org.br. Uma associação de pequeno porte dispensada de indicar encarregado deve manter um canal de comunicação com os titulares.",
      fonte: "Fonte: LGPD; Política de Tratamento de Dados; Resolução CD/ANPD nº 2/2022" },

    { kicker: "Imagem",
      titulo: "A imagem",
      cards: [
        { cor: "navy", titulo: "Direito à imagem", paras: ["Salvo autorização, o uso da imagem pode ser proibido se atingir a honra ou se destinar a fins comerciais."] },
        { cor: "yellow", titulo: "Respeito", paras: ["O direito ao respeito da criança e do adolescente abrange a preservação da sua imagem e da sua identidade."] },
        { cor: "navy", titulo: "Estatuto", paras: ["Os associados autorizam a UEB a utilizar o direito de suas imagens em atividades escoteiras."] }
      ],
      destaque: "Para jovens, captar, guardar, usar ou divulgar imagem, voz ou dados depende de autorização prévia, expressa e informada do responsável legal, formalizada e registrada. A autorização não é genérica: liga-se a finalidades institucionais.",
      fonte: "Fonte: Código Civil; ECA; Estatuto da UEB; Manual Institucional – ECA Digital" },

    { kicker: "Autorizações",
      titulo: "Duas autorizações",
      lista: [
        "Termo do Paxtu: abrange a UEB Nacional e as Regiões. O responsável legal assina no próprio sistema. Desde 1º/9/2026, quem não assinou tem o acesso bloqueado até assinar.",
        "Termo da UEL: a UEL com personalidade jurídica própria colhe a sua autorização, em modelo específico. O documento é arquivado e inserido no Paxtu, em campo próprio.",
        "Conferência: no Paxtu, a UEL pode ver as assinaturas feitas e as pendentes."
      ],
      destaque: "A revogação vale para os usos futuros. O que foi publicado de forma legítima antes dela é preservado.",
      modais: [
        { id: "m-muda-pratica", botao: "O que muda na prática", titulo: "O que muda na prática",
          paras: [
            "Segundo as perguntas frequentes sobre o Manual: a autorização de imagem deixa de ser genérica: é prévia, expressa, formal e ligada a uma finalidade institucional; há um termo obrigatório no Paxtu e um modelo próprio para as UELs, que têm CNPJ próprio; há regras mais claras para redes sociais e grupos de mensagens; fotógrafos e terceiros que captam imagens precisam de autorização formal."
          ] }
      ],
      fonte: "Fonte: Manual Institucional – ECA Digital; Perguntas frequentes sobre o Manual; Tutorial do Paxtu" },

    { kicker: "Redes",
      titulo: "Publicações e redes sociais",
      cards: [
        { cor: "navy", titulo: "Minimização", paras: ["Mesmo com autorização, publica-se só o necessário. Evita-se a divulgação excessiva, repetitiva ou fora de contexto."] },
        { cor: "yellow", titulo: "Vedações", paras: ["Uso comercial ou para promover terceiros; situações vexatórias; localização em tempo real sem necessidade."] },
        { cor: "navy", titulo: "Perfil pessoal", paras: ["O adulto não deve publicar fotos de jovens no seu perfil. Pode compartilhar as publicações oficiais."] }
      ],
      destaque: "Perfis de patrulhas, seções e grupos são administrados por adultos. Quem fotografa a atividade, mesmo voluntário, precisa de autorização prévia, específica e formal da UEL.",
      fonte: "Fonte: Manual Institucional – ECA Digital; Perguntas frequentes sobre o Manual" },

    { kicker: "Famílias",
      titulo: "Fotos nos grupos das famílias",
      cards: [
        { cor: "navy", titulo: "Autorização", paras: ["A autorização do jovem precisa cobrir essa finalidade. Para a UEL, vale o termo próprio dela, além do termo do Paxtu."] },
        { cor: "yellow", titulo: "Quem fotografa", paras: ["O escotista que registra a atividade também precisa de autorização da UEL para essa função."] },
        { cor: "navy", titulo: "No envio", paras: ["Só as fotos necessárias, sem dados pessoais junto, e com a orientação de não repassar imagens de outros jovens."] }
      ],
      destaque: "Um grupo fechado não é uma autorização: a imagem pode ser baixada e encaminhada. O envio segue as mesmas regras de qualquer divulgação.",
      fonte: "Fonte: Manual Institucional – ECA Digital; Perguntas frequentes sobre o Manual" },

    { kicker: "Mensagens",
      titulo: "Grupos de mensagens e pedidos de retirada",
      cards: [
        { cor: "navy", titulo: "Idade mínima", paras: ["No WhatsApp, 13 anos. Abaixo disso, a comunicação é feita pelo número do responsável."] },
        { cor: "yellow", titulo: "Supervisão", paras: ["Grupos com jovens têm ao menos um adulto responsável e regras expressas de convivência."] },
        { cor: "navy", titulo: "Retirada", paras: ["Aos 18 anos, o próprio associado pode manter ou revogar a autorização. Pedida a remoção de uma publicação, ela é feita."] }
      ],
      destaque: "Diante de dúvidas, vale o princípio da precaução: a alternativa mais segura para o jovem, ainda que limite uma exposição ou uma atividade.",
      fonte: "Fonte: Manual Institucional – ECA Digital; Perguntas frequentes sobre o Manual" },

    { kicker: "Roteiro",
      titulo: "Roteiro de leitura",
      lista: [
        "Política de Tratamento de Dados: definições; coleta e usos; compartilhamento; segurança; retenção; bases legais; direitos.",
        "Tabela de Finalidades: grupos de dados do Paxtu, com base legal e finalidade.",
        "LGPD: arts. 5º, 6º, 7º, 8º, 9º, 11, 14, 18, 46 e 48.",
        "Manual ECA Digital: princípios; imagem, voz e dados; redes sociais e grupos de mensagens; captação por terceiros.",
        "Código de Conduta e P.O.R.: Código, item 5.1; P.O.R., Regra 039.",
        "Imagem: Código Civil, art. 20; ECA, art. 17; Estatuto da UEB, art. 42, §11."
      ],
      fonte: "Fonte: Política de Tratamento de Dados; Tabela de Finalidades; LGPD; Manual Institucional – ECA Digital" },

    { tipo: "fim",
      titulo: "Cada dado, uma finalidade",
      texto: "Cada imagem, uma autorização e um limite." }
  ]
};
