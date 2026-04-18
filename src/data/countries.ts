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
    x: 35,
    y: 70,
    color: "var(--mint)",
    capital: "Brasília",
    language: "Português",
    currency: "Real (R$)",
    story: [
      "O Brasil é o maior país da América do Sul e tem mais de 200 milhões de pessoas! 🌎",
      "Aqui fica a Floresta Amazônica, a maior floresta tropical do planeta, cheia de animais incríveis como onças, tucanos e botos cor-de-rosa.",
      "O território brasileiro é enorme e tem praias, florestas, serras, rios gigantes e cidades muito diferentes umas das outras.",
      "Os brasileiros amam futebol, samba e festas como o Carnaval, com fantasias coloridas e muita música.",
      "Em muitas regiões, as crianças brincam de pular corda, amarelinha e soltar pipa nas férias e nos finais de semana.",
      "Comidas típicas: feijoada, brigadeiro e pão de queijo — uma delícia! 🧀",
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
    x: 22,
    y: 40,
    color: "var(--coral)",
    capital: "Washington, D.C.",
    language: "Inglês",
    currency: "Dólar (US$)",
    story: [
      "Os Estados Unidos são formados por 50 estados, e cada um tem cultura e paisagens diferentes! 🌟",
      "Em Nova York fica a Estátua da Liberdade, um presente da França. Já em Orlando estão os parques da Disney!",
      "O país tem desertos, montanhas geladas, praias, florestas e grandes cidades cheias de prédios altos.",
      "O país é famoso por inventar coisas como o cinema de Hollywood, o hambúrguer e o basquete.",
      "Muitas crianças assistem a jogos esportivos, visitam museus interativos e aprendem sobre espaço em centros da NASA.",
      "Eles celebram o Dia de Ação de Graças com peru e o Halloween com fantasias e doces. 🎃",
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
    x: 75,
    y: 42,
    color: "var(--sunshine)",
    capital: "Pequim",
    language: "Mandarim",
    currency: "Yuan (¥)",
    story: [
      "A China é o país mais populoso do mundo, com mais de 1,4 bilhão de pessoas! 🐼",
      "A Grande Muralha da China é tão longa que pode ser vista do espaço — foi construída há mais de 2.000 anos!",
      "O país tem cidades supermodernas, templos antigos, montanhas, arrozais e rios muito importantes para a vida das pessoas.",
      "Aqui vivem os pandas-gigantes, que adoram comer bambu o dia inteiro.",
      "As festas do Ano-Novo Chinês têm lanternas vermelhas, danças do dragão e fogos de artifício bem coloridos.",
      "Os chineses inventaram o papel, a bússola, os fogos de artifício e a impressão. Que demais! 🎆",
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
    x: 65,
    y: 25,
    color: "var(--sky)",
    capital: "Moscou",
    language: "Russo",
    currency: "Rublo (₽)",
    story: [
      "A Rússia é o maior país do mundo — tão grande que tem 11 fusos horários diferentes! ⏰",
      "Em Moscou fica a Praça Vermelha, com a Catedral de São Basílio, que parece um castelo de doces coloridos.",
      "Existem florestas imensas, lagos congelados, montanhas e regiões tão frias que a neve fica por muitos meses.",
      "No inverno faz muito frio, e a Sibéria pode chegar a -50°C! Lá vivem ursos pardos e tigres siberianos.",
      "As crianças russas também gostam de patinar no gelo, brincar na neve e ouvir histórias tradicionais do seu país.",
      "As bonecas Matrioskas, que cabem uma dentro da outra, são um símbolo famoso da Rússia. 🪆",
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
    x: 85,
    y: 40,
    color: "var(--grape)",
    capital: "Tóquio",
    language: "Japonês",
    currency: "Iene (¥)",
    story: [
      "O Japão é um país feito de várias ilhas no Oceano Pacífico — são mais de 6.800! 🏯",
      "Na primavera, as cerejeiras (sakuras) florescem e ficam todas rosinhas. As pessoas fazem piqueniques embaixo delas!",
      "O Japão mistura tradição e tecnologia, com templos antigos, trens muito rápidos e cidades iluminadas.",
      "É a terra do sushi, do ramen e dos animes como Pokémon, Naruto e Studio Ghibli.",
      "Muitas crianças japonesas participam de festivais, usam yukata em comemorações e aprendem a respeitar muito a natureza.",
      "O Monte Fuji é uma montanha gigante e sagrada, com o topo coberto de neve a maior parte do ano. 🗻",
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
};

export const COUNTRY_LIST = Object.values(COUNTRIES);
