import type { CountrySlug } from "@/context/PassportContext";

import panda from "@/assets/animals/panda.jpg";
import eagle from "@/assets/animals/eagle.jpg";
import macaw from "@/assets/animals/macaw.jpg";
import brownBear from "@/assets/animals/brown-bear.jpg";
import redFox from "@/assets/animals/red-fox.jpg";
import caiman from "@/assets/animals/caiman.jpg";

import liberty from "@/assets/monuments/liberty.jpg";
import himeji from "@/assets/monuments/himeji.jpg";
import greatWall from "@/assets/monuments/great-wall.jpg";
import stBasil from "@/assets/monuments/st-basil.jpg";
import christRedeemer from "@/assets/monuments/christ-redeemer.jpg";

export type MiniGameId = "memoria" | "bandeiras" | "safari" | "sons" | "monumentos";

export type MiniGameMeta = {
  id: MiniGameId;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  color: string;
};

export const MINI_GAMES: MiniGameMeta[] = [
  {
    id: "memoria",
    title: "Jogo da Memória",
    emoji: "🧠",
    tagline: "Combine pares de bandeiras",
    description: "Encontre os pares de bandeiras dos países antes que o tempo acabe!",
    color: "var(--coral)",
  },
  {
    id: "bandeiras",
    title: "Quiz das Bandeiras",
    emoji: "🏳️",
    tagline: "Adivinhe o país pela bandeira",
    description: "Descubra a qual país pertence cada bandeira colorida.",
    color: "var(--sky)",
  },
  {
    id: "safari",
    title: "Safari Fotográfico",
    emoji: "📸",
    tagline: "Encontre os animais",
    description: "Descubra de qual país é cada animal antes que ele se esconda.",
    color: "var(--mint)",
  },
  {
    id: "sons",
    title: "Sons do Mundo",
    emoji: "🎵",
    tagline: "Adivinhe o país pelo som",
    description: "Ouça uma palavra ou expressão e adivinhe o idioma do país.",
    color: "var(--sunshine)",
  },
  {
    id: "monumentos",
    title: "Caça aos Monumentos",
    emoji: "🗿",
    tagline: "Reconheça lugares famosos",
    description: "Identifique os monumentos icônicos espalhados pelo mundo.",
    color: "var(--grape)",
  },
];

// Flag cards: ISO code drives the flag-icons CSS rendering
export const FLAG_CARDS: {
  country: CountrySlug;
  iso: string; // ISO 3166-1 alpha-2 (lowercase)
  name: string;
  flag: string; // emoji fallback
}[] = [
  { country: "brasil", iso: "br", name: "Brasil", flag: "🇧🇷" },
  { country: "eua", iso: "us", name: "Estados Unidos", flag: "🇺🇸" },
  { country: "china", iso: "cn", name: "China", flag: "🇨🇳" },
  { country: "russia", iso: "ru", name: "Rússia", flag: "🇷🇺" },
  { country: "japao", iso: "jp", name: "Japão", flag: "🇯🇵" },
];

export const ANIMAL_QUESTIONS = [
  { image: panda, country: "China", animal: "Panda-gigante" },
  { image: eagle, country: "Estados Unidos", animal: "Águia-careca" },
  { image: macaw, country: "Brasil", animal: "Arara" },
  { image: brownBear, country: "Rússia", animal: "Urso-pardo" },
  { image: redFox, country: "Japão", animal: "Raposa-vermelha" },
  { image: caiman, country: "Brasil", animal: "Jacaré" },
];

export const SOUND_QUESTIONS = [
  { word: "Olá!", country: "Brasil", language: "Português", lang: "pt-BR" },
  { word: "Hello!", country: "Estados Unidos", language: "Inglês", lang: "en-US" },
  { word: "你好", phonetic: "Nǐ hǎo", country: "China", language: "Mandarim", lang: "zh-CN" },
  { word: "Привет", phonetic: "Privet", country: "Rússia", language: "Russo", lang: "ru-RU" },
  { word: "こんにちは", phonetic: "Konnichiwa", country: "Japão", language: "Japonês", lang: "ja-JP" },
];

export const MONUMENT_QUESTIONS = [
  { image: liberty, name: "Estátua da Liberdade", country: "Estados Unidos" },
  { image: himeji, name: "Castelo de Himeji", country: "Japão" },
  { image: greatWall, name: "Grande Muralha", country: "China" },
  { image: stBasil, name: "Catedral de São Basílio", country: "Rússia" },
  { image: christRedeemer, name: "Cristo Redentor", country: "Brasil" },
];

export const ALL_COUNTRY_NAMES = [
  "Brasil",
  "Estados Unidos",
  "China",
  "Rússia",
  "Japão",
];
