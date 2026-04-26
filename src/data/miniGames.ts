import type { CountrySlug } from "@/context/PassportContext";

export type MiniGameId = "memoria" | "bandeiras" | "safari" | "sons" | "monumentos";

export type MiniGameMeta = {
  id: MiniGameId;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  color: string; // css var ref
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

// --- shared content used by mini-games ---

export const FLAG_CARDS: { country: CountrySlug; flag: string; name: string }[] = [
  { country: "brasil", flag: "🇧🇷", name: "Brasil" },
  { country: "eua", flag: "🇺🇸", name: "Estados Unidos" },
  { country: "china", flag: "🇨🇳", name: "China" },
  { country: "russia", flag: "🇷🇺", name: "Rússia" },
  { country: "japao", flag: "🇯🇵", name: "Japão" },
];

export const ANIMAL_QUESTIONS = [
  { emoji: "🐼", country: "China", animal: "Panda-gigante" },
  { emoji: "🦅", country: "Estados Unidos", animal: "Águia-careca" },
  { emoji: "🦜", country: "Brasil", animal: "Arara" },
  { emoji: "🐻", country: "Rússia", animal: "Urso-pardo" },
  { emoji: "🦊", country: "Japão", animal: "Raposa-vermelha" },
  { emoji: "🐊", country: "Brasil", animal: "Jacaré" },
];

export const SOUND_QUESTIONS = [
  { word: "Olá!", country: "Brasil", language: "Português" },
  { word: "Hello!", country: "Estados Unidos", language: "Inglês" },
  { word: "你好 (Nǐ hǎo)", country: "China", language: "Mandarim" },
  { word: "Привет (Privet)", country: "Rússia", language: "Russo" },
  { word: "こんにちは (Konnichiwa)", country: "Japão", language: "Japonês" },
];

export const MONUMENT_QUESTIONS = [
  { emoji: "🗽", name: "Estátua da Liberdade", country: "Estados Unidos" },
  { emoji: "🏯", name: "Castelo de Himeji", country: "Japão" },
  { emoji: "🐉", name: "Grande Muralha", country: "China" },
  { emoji: "⛪", name: "Catedral de São Basílio", country: "Rússia" },
  { emoji: "🗿", name: "Cristo Redentor", country: "Brasil" },
];

export const ALL_COUNTRY_NAMES = [
  "Brasil",
  "Estados Unidos",
  "China",
  "Rússia",
  "Japão",
];
