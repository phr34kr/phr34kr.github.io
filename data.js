// =============================================================================
//  phr34kr — conteúdo do site
//  Edite ESTE arquivo para atualizar a página. Não é preciso mexer no index.html.
//  Tudo é carregado a partir de window.SITE_DATA.
// =============================================================================

window.SITE_DATA = {
  // ---------------------------------------------------------------------------
  // Ordem das seções de autor na biblioteca.
  // A biblioteca é agrupada por autor; esta lista define a ordem dos grupos.
  // Autores que não aparecem aqui caem em "Outros autores", no fim (ainda
  // ordenados por título). Para dar a um autor a sua própria seção — ou mudar
  // a ordem das seções — edite esta lista.
  // ---------------------------------------------------------------------------
  authorOrder: [
    "Karl Marx",
    "Friedrich Engels",
    "Vladimir Lenin",
    "Josef Stalin",
    "Mao Zedong",
    "Liga dos Camponeses Pobres (LCP)",
    "Partido Comunista da China (PCCh)",
    "Partido Comunista do Brasil (P.C.B.)",
    "Partido Comunista do Peru (PCP)",
    "Núcleo de estudos do marxismo-leninismo-maoismo",
    "Frente Revolucionária de Defesa dos Direitos do Povo",
    "Frantz Fanon",
    "Grupo de Estudos ao Povo Brasileiro",
    "Grupo de Estudos Vale dos Pomares",
  ],

  // ---------------------------------------------------------------------------
  // Biblioteca. Um objeto por obra.
  //   title     — título da obra
  //   author    — autor (deve casar com um item de authorOrder para ganhar seção)
  //   url        — link
  //   highlight — (opcional) true para destacar no topo, em "Em destaque"
  // ---------------------------------------------------------------------------
  books: [
    {
      title: "Manifesto do Partido Comunista",
      author: "Karl Marx e Friedrich Engels",
      url: "https://drive.google.com/file/d/1QBh960-UPWgAx_uoYq79A0zWXQxAjR88/",
    },
    {
      title: "Do Socialismo Utópico ao Socialismo Científico",
      author: "Friedrich Engels",
      url: "https://drive.google.com/file/d/1o5KqLwBqLV1SvkWg6pvCfUlyTC6owFMr/",
    },
    {
      title: "Salário, Preço e Lucro",
      author: "Karl Marx",
      url: "https://www.marxists.org/portugues/marx/1865/salario/index.htm",
    },
    {
      title: "Uma Contribuição para a Crítica da Economia Política",
      author: "Karl Marx",
      url: "https://www.marxists.org/portugues/marx/1859/contcriteconpoli/index.htm",
    },
    {
      title: "Princípios Básicos do Comunismo",
      author: "Friedrich Engels",
      url: "https://drive.google.com/file/d/1W9_pdnIm8tUglK5GXZe9h7ljcRZ4Qbyx/",
    },
    {
      title: "A Origem da Família, da Propriedade Privada e do Estado",
      author: "Friedrich Engels",
      url: "https://www.marxists.org/portugues/marx/1884/origem/index.htm",
    },
    {
      title: "Anti-Dühring",
      author: "Friedrich Engels",
      url: "https://www.marxists.org/portugues/marx/1877/antiduhring/index.htm",
    },
    {
      title: "Ludwig Feuerbach e o Fim da Filosofia Clássica Alemã",
      author: "Friedrich Engels",
      url: "https://www.marxists.org/portugues/marx/1886/mes/fim.htm",
    },
    {
      title: "O Estado e a Revolução",
      author: "Vladimir Lenin",
      url: "https://drive.google.com/file/d/1VzWIF2ztND1jjevjXBwyxgIKm0-2CreH/",
    },
    {
      title: "Que Fazer",
      author: "Vladimir Lenin",
      url: "https://www.marxists.org/portugues/lenin/1902/quefazer/",
    },
    {
      title: "Imperialismo Fase Superior do Capitalismo",
      author: "Vladimir Lenin",
      url: "https://www.marxists.org/portugues/lenin/1916/imperialismo/",
    },
    {
      title: "As Três Fontes e as Três partes Constitutivas do Marxismo",
      author: "Vladimir Lenin",
      url: "https://www.marxists.org/portugues/lenin/1913/03/tresfont.htm",
    },
    {
      title: "Marxismo e Revisionismo",
      author: "Vladimir Lenin",
      url: "https://www.marxists.org/portugues/lenin/1908/04/16.htm",
    },
    {
      title: "Sobre o Materialismo Dialético e o Materialismo Histórico",
      author: "Josef Stalin",
      url: "https://www.marxists.org/portugues/stalin/1938/09/mat-dia-hist.htm",
    },
    {
      title: "Contra o Liberalismo",
      author: "Mao Zedong",
      url: "https://www.marxists.org/portugues/mao/1937/09/07.htm",
    },
    {
      title: "Sobre a Prática",
      author: "Mao Zedong",
      url: "https://www.marxists.org/portugues/mao/1937/07/pratica.htm",
    },
    {
      title: "Sobre a Contradição",
      author: "Mao Zedong",
      url: "https://www.marxists.org/portugues/mao/1937/08/contra.htm",
    },
    {
      title: "Sobre a Ditadura da Democracia Popular",
      author: "Mao Zedong",
      url: "https://www.marxists.org/portugues/mao/1949/mes/ditadura.htm",
    },
    {
      title: "Sobre o tratamento correto das contradições no seio do povo",
      author: "Mao Zedong",
      url: "https://www.marxists.org/portugues/mao/1957/02/27.htm",
    },
    {
      title: "Citações do Presidente Mao Zedong",
      author: "Mao Zedong",
      url: "https://drive.google.com/file/d/1wi3yKVGZiLzC3nLMJghR2tjnLS3nuUxg/",
    },
    {
      title: "A Carta Chinesa",
      author: "Partido Comunista da China (PCCh)",
      url: "https://www.marxists.org/portugues/tematica/2003/mes/carta/index.htm",
    },
    {
      title: "Uma Compreensão Básica do Partido Comunista da China (PCCh)",
      author: "Partido Comunista da China (PCCh)",
      url: "https://drive.google.com/file/d/1KLkm0PbFvQjnnqqf9XiWE5HyB-rYv98C/",
    },
    {
      title: "Acerca do Pensamento Gonzalo",
      author: "Partido Comunista do Peru (PCP)",
      url: "https://serviraopovo.com.br/2021/10/13/acerca-do-pensamento-gonzalo-presidente-gonzalo-1988/",
    },
    {
      title: "Linha de Massas",
      author: "Partido Comunista do Peru (PCP)",
      url: "https://serviraopovo.com.br/2021/09/25/linha-de-massas-partido-comunista-do-peru-1988/",
    },
    {
      title: "Nosso Caminho",
      author: "Liga dos Camponeses Pobres (LCP)",
      url: "https://www.marxists.org/portugues/tematica/2018/mes/lcp.htm",
    },
    {
      title: "Eleição Não! Revolução Sim!",
      author: "Frente Revolucionária de Defesa dos Direitos do Povo",
      url: "https://serviraopovo.com.br/2015/07/22/eleicao-nao-revolucao-sim/",
    },
    {
      title: "A dupla negação da TMD: nem leninismo, nem marxismo",
      author: "Núcleo de estudos do marxismo-leninismo-maoismo",
      url: "https://drive.google.com/file/d/1gOBzf1_f07ouNFwd2ULC8fhexP3vMIoG/",
    },
    {
      title: "O Legado Imortal do Presidente Gonzalo",
      author: "Núcleo de estudos do marxismo-leninismo-maoismo",
      url: "https://serviraopovo.com.br/2023/12/21/o-legado-imortal-do-presidente-gonzalo-nucleo-de-estudos-do-mlm-2023/",
    },
    {
      title:
        "Friedrich Engels: a fundação do Comunismo, a sistematização do Marxismo e a Revolução Democrática",
      author: "Núcleo de estudos do marxismo-leninismo-maoismo",
      url: "https://anovademocracia.com.br/nemlm-friedrich-engels-a-fundacao-do-comunismo-a-sistematizacao-do-marxismo-e-a-revolucao-democratica/",
    },
    {
      title: "História do Partido Comunista (Bolchevique) da URSS",
      author: "Comissão do Comitê Central do PC(b) da URSS",
      url: "https://www.marxists.org/portugues/tematica/livros/historia/index.htm",
    },
    {
      title:
        "De Karl Marx ao marxismo - Luta de classes, luta de duas linhas e linha de massas",
      author: "Núcleo de estudos do marxismo-leninismo-maoismo",
      url: "https://serviraopovo.com.br/2024/05/09/de-karl-marx-ao-marxismo-luta-de-classes-luta-de-duas-linhas-e-linha-de-massas-nucleo-de-estudos-do-marxismo-leninismo-maoismo-2018-2020/",
    },
    {
      title:
        "História da democracia e luta de classe: Democracia Popular e Nova Democracia",
      author: "Prof. Fausto Arruda",
      url: "https://anovademocracia.com.br/historia-da-democracia-e-luta-de-classe-democracia-popular-e-nova-democracia/",
    },
    {
      title:
        "A Revolução de Nova Democracia é a força principal da Revolução Proletária Mundial",
      author: "Partido Comunista do Brasil (P.C.B.)",
      url: "https://drive.google.com/file/d/1srIBXThtHotTI_Ir82ron_GyjUlK9Dg4/",
    },
    {
      title: "Lenin e o Partido Comunista Militarizado",
      author: "Partido Comunista do Brasil (P.C.B.)",
      url: "https://serviraopovo.com.br/2018/11/28/lenin-e-o-partido-comunista-militarizado-partido-comunista-do-brasil-fracao-vermelha/",
    },
    {
      title: "A questão filosófica em Lenin",
      author: "Comitê de Redação da revista 'O Maoista'",
      url: "https://serviraopovo.com.br/2019/01/11/a-questao-filosofica-em-lenin-comite-de-redacao-da-revista-o-maoista/",
    },
    {
      title: "Um se divide em dois: a arma revolucionária de Mao Tsetung",
      author: "Antonio de Irala",
      url: "https://serviraopovo.com.br/2016/01/15/um-se-divide-em-dois-a-arma-revolucionaria-de-mao-tsetung/",
    },
    {
      title: "Sobre o Pensamento de Lenin",
      author: "Comitê Bandeira Vermelha da Alemanha",
      url: "https://serviraopovo.com.br/2019/01/07/sobre-o-pensamento-de-lenin-comite-bandeira-vermelha-alemanha/",
    },
    {
      title: "Lenin militante ilegal",
      author: "B. Vasiliev e M. Kedrov",
      url: "https://serviraopovo.com.br/2018/09/12/lenin-militante-ilegal-b-vasiliev-e-m-kedrov/",
    },
    {
      title: "Os Condenados da Terra",
      author: "Frantz Fanon",
      url: "https://drive.google.com/file/d/11ZjrYT5aGRpjRZj3HdUw75nngFfYOXsP/",
    },
    {
      title: "O Capital (Obra Completa, Vol. 123)",
      author: "Karl Marx",
      url: "https://drive.google.com/file/d/1-IMw21rNfiRFj1L0HYNMpxKrTdwDehP1/",
    },
    {
      title:
        "Algumas leituras básicas sobre as três etapas do Marxismo e sobre a realidade brasileira",
      author: "Grupo de Estudos ao Povo Brasileiro",
      url: "https://drive.google.com/file/d/1pBzq55LOvnhcnzSDWc8LC2TGr7g-8TAt/",
    },
    {
      title:
        "Guia de estudo do marxismo-leninismo-maoismo aportes de validez universal do Presidente Gonzalo",
      author: "Grupo de Estudos Vale dos Pomares",
      url: "https://drive.google.com/file/d/1kQfHSNrr4fVbIgvA3ChXW_uP7IthpMao/",
      highlight: true,
    },
    {
      title: "Introdução à Filosofia de Marx",
      author: "Sérgio Lessa e Ivo Tonet",
      url: "https://drive.google.com/file/d/1tqADWWY_rnn3wzibAkZfW7PIM1R4GrIo/",
    },
  ],

  // ---------------------------------------------------------------------------
  // Mídia — vídeos do YouTube. Um objeto por vídeo.
  //   youtube — ID do vídeo (a parte depois de v= na URL)
  //   title   — (opcional) título exibido sobre o vídeo
  // ---------------------------------------------------------------------------
  midia: [
    {
      youtube: "MKQffXlaBW0",
      title:
        "FOGO nos ANDES! A história da GUERRA POPULAR no PERU (REVOLUÇÃO PERUANA e SENDERO LUMINOSO)",
    },
  ],

  // ---------------------------------------------------------------------------
  // Organizações — sites. Um objeto por site.
  //   name    — nome exibido
  //   logo    — nome do arquivo .png no repositório
  //   url      — link
  //   tagline — frase curta
  // ---------------------------------------------------------------------------
  orgs: [
    {
      name: "A Nova Democracia",
      logo: "and.png",
      url: "https://anovademocracia.com.br",
      tagline:
        "Por uma imprensa democrática, popular, nacional e antiimperialista!",
    },
    {
      name: "Resistência Camponesa",
      logo: "resistencia.png",
      url: "https://resistenciacamponesa.com/",
      tagline: "Viva a luta combativa no campo! Morte ao latifúndio!",
    },
    {
      name: "Mov. Feminino Popular",
      logo: "mfp.png",
      url: "https://movimentofemininopopular.com.br/",
      tagline: "Organização de vanguarda e de massas de mulheres do povo",
    },
    {
      name: "Servir ao Povo",
      logo: "sap.png",
      url: "https://serviraopovo.com.br/",
      tagline:
        "Publicações marxistas-leninistas-maoistas em português do Brasil",
    },
    {
      name: "Liga Operária",
      logo: "lo.png",
      url: "https://ligaoperaria.org.br/",
      tagline: '"Os proletários nada têm a perder a não ser as suas cadeias."',
    },
  ],
};
