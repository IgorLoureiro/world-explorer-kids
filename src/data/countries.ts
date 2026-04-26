import type { CountrySlug } from "@/context/PassportContext";

export type CountryData = {
  slug: CountrySlug;
  name: string;
  emoji: string;
  fact: string;
  x: number; // % position on map
  y: number;
  color: string;
  capital: string;
  language: string;
  currency: string;
  story: string[];
  flagQuiz: { question: string; options: string[]; answer: string }[];
  triviaQuiz: { question: string; options: string[]; answer: string }[];
};

export const COUNTRIES: Record<CountrySlug, CountryData> = {
  brasil: {
    slug: "brasil",
    name: "Brasil",
    emoji: "🇧🇷",
    fact: "Casa da maior floresta tropical do mundo!",
    x: 33,
    y: 68,
    color: "var(--mint)",
    capital: "Brasília",
    language: "Português",
    currency: "Real (R$)",
    story: [
      "O Brasil é o maior país da América do Sul e tem mais de 200 milhões de pessoas! 🌎 Ele faz fronteira com quase todos os outros países sul-americanos, com exceção do Chile e do Equador, e o seu enorme território atravessa diferentes climas, do calor da linha do Equador ao frio do extremo sul.",
      "Aqui fica a Floresta Amazônica, a maior floresta tropical do planeta. Nela vivem animais incríveis como onças-pintadas, tucanos, preguiças, botos cor-de-rosa e milhares de espécies de plantas, insetos e peixes que ainda estão sendo descobertas pelos cientistas.",
      "O território brasileiro tem praias com águas quentes, savanas, serras, pantanais cheios de bichos, rios gigantes como o Amazonas e o São Francisco, além de cidades grandes e modernas como São Paulo, Rio de Janeiro e Brasília.",
      "Os brasileiros são conhecidos pela alegria, pelo amor ao futebol, pela música e por festas como o Carnaval, com escolas de samba, fantasias coloridas e desfiles que duram dias inteiros em várias cidades do país.",
      "Em muitas regiões, as crianças brincam de pular corda, amarelinha, soltar pipa, queimada e pega-pega. Cada estado também tem brincadeiras tradicionais, como o bumba-meu-boi no Norte e o boi-bumbá no Nordeste.",
      "A cozinha brasileira é uma mistura de influências indígenas, africanas e europeias. Pratos típicos incluem feijoada, acarajé, tapioca, moqueca, brigadeiro, pão de queijo e o famoso açaí da Amazônia. 🧀",
    ],
    flagQuiz: [
      {
        question: "Qual é a cor principal da bandeira do Brasil?",
        options: ["Vermelha", "Verde", "Azul", "Roxa"],
        answer: "Verde",
      },
      {
        question: "O que tem no centro da bandeira do Brasil?",
        options: ["Uma estrela", "Um sol", "Um círculo azul com estrelas", "Uma lua"],
        answer: "Um círculo azul com estrelas",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília",
      },
      {
        question: "Qual floresta gigante fica no Brasil?",
        options: ["Floresta Negra", "Amazônia", "Taiga", "Savana"],
        answer: "Amazônia",
      },
      {
        question: "Que esporte os brasileiros mais amam?",
        options: ["Hóquei", "Futebol", "Críquete", "Beisebol"],
        answer: "Futebol",
      },
    ],
  },
  eua: {
    slug: "eua",
    name: "Estados Unidos",
    emoji: "🇺🇸",
    fact: "Aqui fica a famosa Estátua da Liberdade! 🗽",
    x: 20,
    y: 38,
    color: "var(--coral)",
    capital: "Washington, D.C.",
    language: "Inglês",
    currency: "Dólar (US$)",
    story: [
      "Os Estados Unidos da América são formados por 50 estados, e cada um tem cultura, paisagens e até sotaques diferentes! 🌟 É um dos maiores países do mundo em território e o terceiro mais populoso, com mais de 330 milhões de pessoas.",
      "Em Nova York fica a Estátua da Liberdade, um presente da França que recebe quem chega pelo mar há mais de 130 anos. Já em Orlando estão os parques da Disney, que recebem milhões de famílias do mundo todo.",
      "O país tem desertos quentes, montanhas geladas, praias, florestas, cânions imensos como o Grand Canyon, e grandes cidades cheias de prédios altos como Nova York, Chicago e Los Angeles.",
      "Os Estados Unidos são famosos por inventar coisas como o cinema de Hollywood, o hambúrguer, o jeans, o basquete e até o avião. A NASA, agência espacial americana, foi a primeira a levar pessoas até a Lua!",
      "Muitas crianças vão à escola de ônibus amarelo, assistem a jogos de beisebol e basquete, visitam museus interativos e aprendem ciências fazendo experimentos. Falar inglês é parte da rotina desde pequenininho.",
      "Festas importantes incluem o Dia de Ação de Graças, com peru e tortas de abóbora, o Halloween com fantasias e doces, e o 4 de Julho, com fogos de artifício comemorando a independência. 🎃",
    ],
    flagQuiz: [
      {
        question: "Quantas listras tem a bandeira dos EUA?",
        options: ["7", "10", "13", "15"],
        answer: "13",
      },
      {
        question: "O que aparece no canto azul da bandeira americana?",
        options: ["Estrelas", "Uma águia", "Listras", "Um sol"],
        answer: "Estrelas",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital dos Estados Unidos?",
        options: ["Nova York", "Los Angeles", "Washington, D.C.", "Miami"],
        answer: "Washington, D.C.",
      },
      {
        question: "Onde fica a Estátua da Liberdade?",
        options: ["Chicago", "Nova York", "Boston", "Texas"],
        answer: "Nova York",
      },
      {
        question: "Que esporte foi inventado nos EUA?",
        options: ["Futebol", "Tênis", "Basquete", "Rugby"],
        answer: "Basquete",
      },
    ],
  },
  china: {
    slug: "china",
    name: "China",
    emoji: "🇨🇳",
    fact: "A Grande Muralha tem mais de 21 mil km! 🐉",
    x: 76,
    y: 40,
    color: "var(--sunshine)",
    capital: "Pequim",
    language: "Mandarim",
    currency: "Yuan (¥)",
    story: [
      "A China é o país mais populoso do mundo, com mais de 1,4 bilhão de pessoas! 🐼 Fica no continente asiático e é tão grande que tem montanhas, desertos, florestas, planícies de arroz e cidades enormes como Pequim e Xangai.",
      "A Grande Muralha da China é tão longa que sua extensão chega a mais de 21 mil quilômetros — foi construída há mais de 2.000 anos para proteger o país de invasões. Ainda hoje, milhões de turistas a visitam todos os anos.",
      "O país tem cidades supermodernas com prédios futuristas e trens-bala muito rápidos, mas também guarda templos antigos, jardins delicados, palácios imperiais e tradições milenares como o tai chi e a caligrafia.",
      "Aqui vivem os pandas-gigantes, animais símbolo do país, que adoram comer bambu o dia inteiro. Eles vivem nas florestas das montanhas e são protegidos para que não desapareçam.",
      "As festas do Ano-Novo Chinês duram 15 dias e enchem as ruas de lanternas vermelhas, danças do dragão e do leão, fogos de artifício, dinheiro em envelopes vermelhos e comidas especiais para a família.",
      "Os chineses inventaram o papel, a bússola, a pólvora, os fogos de artifício e a impressão. Hoje o país também é famoso pela tecnologia, pela seda, pelo chá e pela culinária com macarrão, dim sum e pato à Pequim. 🎆",
    ],
    flagQuiz: [
      {
        question: "Qual é a cor principal da bandeira da China?",
        options: ["Azul", "Vermelha", "Verde", "Branca"],
        answer: "Vermelha",
      },
      {
        question: "Quantas estrelas amarelas tem a bandeira da China?",
        options: ["3", "5", "7", "10"],
        answer: "5",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital da China?",
        options: ["Xangai", "Pequim", "Hong Kong", "Tóquio"],
        answer: "Pequim",
      },
      {
        question: "Qual animal fofo é símbolo da China?",
        options: ["Coala", "Panda-gigante", "Tigre-branco", "Canguru"],
        answer: "Panda-gigante",
      },
      {
        question: "O que os chineses inventaram?",
        options: ["O telefone", "A internet", "Os fogos de artifício", "O carro"],
        answer: "Os fogos de artifício",
      },
    ],
  },
  russia: {
    slug: "russia",
    name: "Rússia",
    emoji: "🇷🇺",
    fact: "É o maior país do mundo em território! ❄️",
    x: 63,
    y: 22,
    color: "var(--sky)",
    capital: "Moscou",
    language: "Russo",
    currency: "Rublo (₽)",
    story: [
      "A Rússia é o maior país do mundo em território — é tão grande que ocupa parte da Europa e parte da Ásia, e tem 11 fusos horários diferentes! ⏰ Quando uma região está acordando, a outra já está se preparando para dormir.",
      "Em Moscou, a capital, fica a Praça Vermelha, com a Catedral de São Basílio, que parece um castelo de doces coloridos. Lá também está o Kremlin, o palácio onde trabalha o presidente do país.",
      "Existem florestas imensas, lagos congelados, montanhas, vulcões e regiões tão frias que a neve permanece no chão por muitos meses. O lago Baikal é o lago mais profundo do mundo e fica na Sibéria.",
      "No inverno faz muito frio, e a Sibéria pode chegar a -50°C. Lá vivem ursos pardos, tigres-siberianos, lobos, renas e muitos outros animais adaptados ao gelo.",
      "As crianças russas gostam de patinar no gelo, brincar na neve, esquiar e ouvir histórias tradicionais como as do soldadinho de chumbo e do Pedro e o Lobo, que viraram músicas conhecidas no mundo inteiro.",
      "As bonecas Matrioskas, que cabem uma dentro da outra, são um símbolo famoso da Rússia. O país também é conhecido pelo balé, pela ópera, pela literatura e pela comida com sopa borscht, blinis e pelmeni. 🪆",
    ],
    flagQuiz: [
      {
        question: "Quais são as cores da bandeira da Rússia?",
        options: [
          "Branca, azul e vermelha",
          "Verde, branca e vermelha",
          "Azul, amarela e vermelha",
          "Preta, vermelha e dourada",
        ],
        answer: "Branca, azul e vermelha",
      },
      {
        question: "Quantas faixas horizontais tem a bandeira russa?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital da Rússia?",
        options: ["São Petersburgo", "Moscou", "Kiev", "Sochi"],
        answer: "Moscou",
      },
      {
        question: "Qual brinquedo russo cabe um dentro do outro?",
        options: ["Pião", "Matrioska", "Yo-yô", "Cubo mágico"],
        answer: "Matrioska",
      },
      {
        question: "A Rússia é o ____ país do mundo em tamanho.",
        options: ["menor", "médio", "maior", "segundo maior"],
        answer: "maior",
      },
    ],
  },
  japao: {
    slug: "japao",
    name: "Japão",
    emoji: "🇯🇵",
    fact: "Terra das cerejeiras e dos animes! 🌸",
    x: 86,
    y: 40,
    color: "var(--grape)",
    capital: "Tóquio",
    language: "Japonês",
    currency: "Iene (¥)",
    story: [
      "O Japão é um país insular formado por mais de 6.800 ilhas no Oceano Pacífico! 🏯 As quatro maiores são Honshu, Hokkaido, Kyushu e Shikoku, e nelas estão concentradas a maioria das cidades.",
      "Na primavera, as cerejeiras (sakuras) florescem e ficam todas cor-de-rosa. As pessoas fazem piqueniques embaixo delas em uma tradição chamada hanami, comemorando a beleza efêmera da natureza.",
      "O Japão mistura tradição e tecnologia, com templos antigos de madeira, jardins zen, trens-bala como o Shinkansen, robôs em cafés e cidades iluminadas como Tóquio, Osaka e Kyoto.",
      "É a terra do sushi, do ramen, do tempurá e dos animes como Pokémon, Naruto, One Piece e os filmes do Studio Ghibli, como Meu Amigo Totoro e A Viagem de Chihiro.",
      "Muitas crianças japonesas vão para a escola sozinhas, participam de festivais de verão usando yukata, soltam fogos chamados hanabi e aprendem desde cedo a se curvar para cumprimentar e respeitar os mais velhos.",
      "O Monte Fuji é uma montanha gigante, vulcão sagrado, com o topo coberto de neve a maior parte do ano. Também é famoso o origami, a arte de dobrar papel para criar bichinhos, flores e barquinhos. 🗻",
    ],
    flagQuiz: [
      {
        question: "O que tem na bandeira do Japão?",
        options: [
          "Uma estrela amarela",
          "Um círculo vermelho",
          "Listras azuis",
          "Uma cerejeira",
        ],
        answer: "Um círculo vermelho",
      },
      {
        question: "Qual a cor de fundo da bandeira do Japão?",
        options: ["Branca", "Preta", "Azul", "Verde"],
        answer: "Branca",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital do Japão?",
        options: ["Quioto", "Osaka", "Tóquio", "Sapporo"],
        answer: "Tóquio",
      },
      {
        question: "Como se chama a flor símbolo do Japão?",
        options: ["Tulipa", "Sakura (cerejeira)", "Girassol", "Orquídea"],
        answer: "Sakura (cerejeira)",
      },
      {
        question: "Qual comida é típica do Japão?",
        options: ["Pizza", "Sushi", "Taco", "Hambúrguer"],
        answer: "Sushi",
      },
    ],
  },
  africadosul: {
    slug: "africadosul",
    name: "África do Sul",
    emoji: "🇿🇦",
    fact: "Casa do Big Five e de paisagens africanas incríveis! 🦁",
    x: 54,
    y: 80,
    color: "var(--sunshine)",
    capital: "Pretória",
    language: "11 idiomas (incl. Zulu, Inglês)",
    currency: "Rand (R)",
    story: [
      "A África do Sul fica no extremo sul do continente africano e é banhada por dois oceanos: o Atlântico e o Índico. É um dos países mais coloridos do mundo, com 11 idiomas oficiais e muitos povos diferentes vivendo juntos.",
      "Aqui ficam grandes parques naturais, como o Kruger, onde vive o Big Five: leão, elefante, leopardo, búfalo e rinoceronte. Crianças do mundo todo sonham em fazer um safári por aqui!",
      "O país tem três capitais: Pretória (administrativa), Cidade do Cabo (legislativa) e Bloemfontein (judicial). A Cidade do Cabo é famosa pela Table Mountain, uma montanha com topo bem chato e plano.",
      "Nelson Mandela, um dos maiores líderes da história mundial, lutou para acabar com a separação injusta entre as pessoas (chamada apartheid) e ensinou o valor da igualdade e da paz.",
      "As crianças sul-africanas amam jogar críquete, rugby e futebol. A culinária mistura influências africanas, indianas e europeias, com pratos como o bobotie e o braai (churrasco típico).",
      "A música e as danças tradicionais, como o gumboot e os ritmos zulus, fazem parte das festas. Dizer “Sawubona” em zulu significa “eu te vejo” — uma forma bonita de cumprimentar! ✨",
    ],
    flagQuiz: [
      {
        question: "Quantas cores tem a bandeira da África do Sul?",
        options: ["3", "4", "5", "6"],
        answer: "6",
      },
      {
        question: "Que formato aparece na bandeira da África do Sul?",
        options: ["Um círculo", "Uma letra Y deitada", "Uma estrela", "Uma cruz"],
        answer: "Uma letra Y deitada",
      },
    ],
    triviaQuiz: [
      {
        question: "Quem foi um líder famoso da África do Sul?",
        options: ["Gandhi", "Nelson Mandela", "Churchill", "Lincoln"],
        answer: "Nelson Mandela",
      },
      {
        question: "Como se chama o conjunto dos 5 grandes animais?",
        options: ["Big Five", "Safari Pack", "Jungle Crew", "Wild Five"],
        answer: "Big Five",
      },
      {
        question: "Qual cidade tem a Table Mountain?",
        options: ["Pretória", "Cidade do Cabo", "Joanesburgo", "Durban"],
        answer: "Cidade do Cabo",
      },
    ],
  },
  franca: {
    slug: "franca",
    name: "França",
    emoji: "🇫🇷",
    fact: "Casa da Torre Eiffel e de muitos castelos! 🥐",
    x: 49,
    y: 33,
    color: "var(--sky)",
    capital: "Paris",
    language: "Francês",
    currency: "Euro (€)",
    story: [
      "A França fica na Europa Ocidental e é um dos países mais visitados do mundo. Sua capital, Paris, é conhecida como a 'Cidade Luz' e abriga monumentos como a Torre Eiffel, o Arco do Triunfo e a Catedral de Notre-Dame.",
      "O país é famoso pela arte e pela cultura. O Museu do Louvre, em Paris, guarda a Mona Lisa, pintada por Leonardo da Vinci, e milhares de obras de todas as épocas.",
      "A França tem paisagens variadas: praias na Riviera, campos de lavanda na Provença, montanhas nos Alpes (com o Mont Blanc, o pico mais alto da Europa Ocidental) e castelos pelo vale do Loire.",
      "A culinária francesa é admirada no mundo inteiro: croissants, baguetes, queijos, crepes, ratatouille e macarons fazem parte do dia a dia. Muitas crianças tomam pão com geleia no café da manhã.",
      "A França é o país natal de personagens como o Pequeno Príncipe e os Smurfs, e de invenções como o cinema (criado pelos irmãos Lumière) e o balão de ar quente (pelos irmãos Montgolfier).",
      "A Disneyland Paris é um dos parques mais visitados da Europa, e o Tour de France é a corrida de bicicleta mais famosa do mundo. Falar 'Bonjour' é a maneira simpática de cumprimentar! 🗼",
    ],
    flagQuiz: [
      {
        question: "Quais são as cores da bandeira da França?",
        options: [
          "Azul, branco e vermelho",
          "Verde, branco e vermelho",
          "Amarelo, branco e azul",
          "Vermelho, branco e preto",
        ],
        answer: "Azul, branco e vermelho",
      },
      {
        question: "Como são as faixas da bandeira francesa?",
        options: ["Horizontais", "Verticais", "Diagonais", "Em xadrez"],
        answer: "Verticais",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital da França?",
        options: ["Lyon", "Marselha", "Paris", "Bordeaux"],
        answer: "Paris",
      },
      {
        question: "Qual destes monumentos é francês?",
        options: ["Big Ben", "Torre Eiffel", "Coliseu", "Empire State"],
        answer: "Torre Eiffel",
      },
      {
        question: "Onde está a famosa Mona Lisa?",
        options: ["Museu do Louvre", "Versalhes", "Museu de Orsay", "Notre-Dame"],
        answer: "Museu do Louvre",
      },
    ],
  },
  italia: {
    slug: "italia",
    name: "Itália",
    emoji: "🇮🇹",
    fact: "Terra da pizza, do macarrão e do gelato! 🍕",
    x: 52,
    y: 36,
    color: "var(--mint)",
    capital: "Roma",
    language: "Italiano",
    currency: "Euro (€)",
    story: [
      "A Itália é um país europeu com formato parecido com uma bota! Faz fronteira com a França, a Suíça, a Áustria e a Eslovênia, e é cercada pelo Mar Mediterrâneo, com muitas ilhas como a Sicília e a Sardenha.",
      "Sua capital é Roma, uma das cidades mais antigas do mundo. Lá fica o Coliseu, onde os antigos romanos assistiam a espetáculos há mais de 2.000 anos, e o Vaticano, o menor país do mundo!",
      "A Itália é o berço do Império Romano, do Renascimento e de grandes artistas como Leonardo da Vinci, Michelangelo e Galileu. Em Pisa fica a famosa Torre Inclinada, que parece estar prestes a cair.",
      "Veneza é uma cidade construída sobre canais, onde as pessoas andam de barco em vez de carro. Os gondoleiros cantam enquanto levam visitantes por entre as pontes coloridas.",
      "A culinária italiana conquistou o mundo: pizza, macarrão (massa), lasanha, risoto, gelato e tiramisu. Muitas crianças italianas comem 'pasta' várias vezes por semana, em todas as formas e molhos.",
      "O futebol é uma paixão nacional, e a Itália já foi campeã da Copa do Mundo quatro vezes. Dizer 'Ciao' é o jeito amigável de dizer 'oi' ou 'tchau' em italiano! 🍝",
    ],
    flagQuiz: [
      {
        question: "Quais são as cores da bandeira da Itália?",
        options: [
          "Verde, branca e vermelha",
          "Azul, branca e vermelha",
          "Verde, amarela e vermelha",
          "Branca, vermelha e preta",
        ],
        answer: "Verde, branca e vermelha",
      },
      {
        question: "Como são as faixas da bandeira italiana?",
        options: ["Horizontais", "Verticais", "Diagonais", "Onduladas"],
        answer: "Verticais",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital da Itália?",
        options: ["Milão", "Roma", "Veneza", "Nápoles"],
        answer: "Roma",
      },
      {
        question: "Qual cidade italiana é construída sobre canais?",
        options: ["Florença", "Veneza", "Turim", "Gênova"],
        answer: "Veneza",
      },
      {
        question: "Qual comida é típica da Itália?",
        options: ["Sushi", "Pizza", "Taco", "Curry"],
        answer: "Pizza",
      },
    ],
  },
  australia: {
    slug: "australia",
    name: "Austrália",
    emoji: "🇦🇺",
    fact: "Lar dos cangurus, coalas e da Grande Barreira de Coral! 🦘",
    x: 83,
    y: 75,
    color: "var(--coral)",
    capital: "Camberra",
    language: "Inglês",
    currency: "Dólar Australiano (A$)",
    story: [
      "A Austrália é um país-continente, ou seja, ocupa quase um continente inteiro sozinha! Fica na Oceania, cercada pelos oceanos Índico e Pacífico, e tem paisagens que vão de praias paradisíacas a desertos vermelhos.",
      "O país é famoso por seus animais únicos, como o canguru (que carrega o filhote no marsúpio), o coala (que vive em árvores de eucalipto), o ornitorrinco e o diabo-da-tasmânia.",
      "A Grande Barreira de Coral, na costa nordeste, é o maior recife de coral do mundo e pode ser vista até do espaço. Lá vivem peixes-palhaço, tartarugas, golfinhos e muitas espécies coloridas.",
      "Na cidade de Sydney está a famosa Casa de Ópera, com formato de velas brancas. Já a capital é Camberra, escolhida para evitar a rivalidade entre Sydney e Melbourne.",
      "Os povos aborígenes vivem na Austrália há mais de 60.000 anos e têm uma cultura riquíssima, com pinturas rupestres, danças e instrumentos como o didgeridoo.",
      "As crianças amam praticar surfe, críquete e rúgbi. O país tem clima quente e as estações são invertidas em relação ao Brasil — o Natal cai no verão e muitas vezes é comemorado na praia! 🏄",
    ],
    flagQuiz: [
      {
        question: "Que outra bandeira aparece dentro da bandeira australiana?",
        options: [
          "A do Reino Unido",
          "A da Nova Zelândia",
          "A dos Estados Unidos",
          "A do Canadá",
        ],
        answer: "A do Reino Unido",
      },
      {
        question: "Qual é a estrela maior da bandeira da Austrália?",
        options: [
          "A Estrela do Norte",
          "A Estrela da Federação",
          "A Estrela Polar",
          "A Estrela do Sul",
        ],
        answer: "A Estrela da Federação",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Camberra", "Perth"],
        answer: "Camberra",
      },
      {
        question: "Qual animal carrega o filhote no marsúpio?",
        options: ["Coala", "Canguru", "Wombat", "Dingo"],
        answer: "Canguru",
      },
      {
        question: "Qual é o maior recife do mundo?",
        options: [
          "Recife de Belize",
          "Grande Barreira de Coral",
          "Recife do Mar Vermelho",
          "Recife do Caribe",
        ],
        answer: "Grande Barreira de Coral",
      },
    ],
  },
  mexico: {
    slug: "mexico",
    name: "México",
    emoji: "🇲🇽",
    fact: "Berço dos maias, dos astecas e dos tacos! 🌮",
    x: 17,
    y: 47,
    color: "var(--grape)",
    capital: "Cidade do México",
    language: "Espanhol",
    currency: "Peso Mexicano ($)",
    story: [
      "O México fica na América do Norte, ao sul dos Estados Unidos. Tem praias quentes no Caribe, desertos no norte, vulcões, florestas tropicais e milhares de sítios arqueológicos antigos.",
      "Foi a terra de povos antigos como os maias e os astecas, que construíram pirâmides incríveis como Chichén Itzá e Teotihuacán. Algumas dessas pirâmides são consideradas Patrimônios da Humanidade.",
      "A capital é a Cidade do México, uma das maiores do mundo. Lá fica o Zócalo, uma praça enorme cercada por prédios históricos e museus que contam a história do país.",
      "A culinária mexicana é colorida e cheia de sabor, com tacos, burritos, quesadillas, guacamole, nachos e o famoso chocolate quente — o cacau foi descoberto pelos povos mexicanos!",
      "O Dia dos Mortos é uma das festas mais bonitas do país. Em vez de tristeza, as famílias homenageiam quem já se foi com altares cheios de flores, velas, comidas e caveiras coloridas chamadas calaveras.",
      "Mariachis tocam música tradicional com violões, trompetes e violinos. As crianças adoram quebrar piñatas em festas de aniversário e dizer 'Hola, amigo!' como cumprimento. 🎺",
    ],
    flagQuiz: [
      {
        question: "Quais são as cores da bandeira do México?",
        options: [
          "Verde, branca e vermelha",
          "Azul, branca e vermelha",
          "Verde, amarela e vermelha",
          "Vermelha, branca e preta",
        ],
        answer: "Verde, branca e vermelha",
      },
      {
        question: "O que aparece no centro da bandeira do México?",
        options: [
          "Uma águia com uma serpente",
          "Um sol asteca",
          "Uma pirâmide",
          "Um cacto",
        ],
        answer: "Uma águia com uma serpente",
      },
    ],
    triviaQuiz: [
      {
        question: "Qual é a capital do México?",
        options: ["Cancún", "Cidade do México", "Guadalajara", "Monterrey"],
        answer: "Cidade do México",
      },
      {
        question: "Qual povo antigo construiu Chichén Itzá?",
        options: ["Incas", "Maias", "Vikings", "Egípcios"],
        answer: "Maias",
      },
      {
        question: "Qual comida é típica do México?",
        options: ["Sushi", "Pizza", "Taco", "Hambúrguer"],
        answer: "Taco",
      },
    ],
  },
};

export const COUNTRY_LIST = Object.values(COUNTRIES);
