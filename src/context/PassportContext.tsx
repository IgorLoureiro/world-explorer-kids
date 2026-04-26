import { createContext, useContext, useState, type ReactNode } from "react";

export type CountrySlug = "brasil" | "eua" | "china" | "russia" | "japao";

export const AVATAR_OPTIONS = [
  "🦊", "🐼", "🦁", "🐨", "🦄", "🐯", "🐸", "🐧",
  "🚀", "🌟", "🦖", "🐳", "🦉", "🐙", "🐝", "🦋",
];

type Stamp = {
  country: CountrySlug;
  date: string;
};

type GameId = "memoria" | "bandeiras" | "safari" | "sons" | "monumentos";

type PassportState = {
  explorerName: string;
  setExplorerName: (name: string) => void;
  avatar: string;
  setAvatar: (a: string) => void;
  isLoggedIn: boolean;
  login: (name: string, avatar: string) => void;
  logout: () => void;
  stamps: Stamp[];
  addStamp: (country: CountrySlug) => void;
  hasStamp: (country: CountrySlug) => boolean;
  storyRead: Record<CountrySlug, boolean>;
  gamesDone: Record<CountrySlug, boolean>;
  markStoryRead: (country: CountrySlug) => void;
  markGamesDone: (country: CountrySlug) => void;
  miniGameScores: Record<GameId, number>;
  setMiniGameScore: (id: GameId, score: number) => void;
  resetPassport: () => void;
};

const PassportContext = createContext<PassportState | null>(null);

const emptyProgress: Record<CountrySlug, boolean> = {
  brasil: false,
  eua: false,
  china: false,
  russia: false,
  japao: false,
};

const emptyMiniGames: Record<GameId, number> = {
  memoria: 0,
  bandeiras: 0,
  safari: 0,
  sons: 0,
  monumentos: 0,
};

export function PassportProvider({ children }: { children: ReactNode }) {
  const [explorerName, setExplorerName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [stamps, setStamps] = useState<Stamp[]>([]);
  const [storyRead, setStoryRead] = useState<Record<CountrySlug, boolean>>({ ...emptyProgress });
  const [gamesDone, setGamesDone] = useState<Record<CountrySlug, boolean>>({ ...emptyProgress });
  const [miniGameScores, setMiniGameScores] =
    useState<Record<GameId, number>>({ ...emptyMiniGames });

  const isLoggedIn = explorerName.trim().length > 0 && avatar.length > 0;

  const login = (name: string, av: string) => {
    setExplorerName(name.trim());
    setAvatar(av);
  };

  const addStamp = (country: CountrySlug) => {
    setStamps((prev) =>
      prev.find((s) => s.country === country)
        ? prev
        : [...prev, { country, date: new Date().toLocaleDateString("pt-BR") }],
    );
  };

  const hasStamp = (country: CountrySlug) => stamps.some((s) => s.country === country);

  const markStoryRead = (country: CountrySlug) =>
    setStoryRead((prev) => ({ ...prev, [country]: true }));
  const markGamesDone = (country: CountrySlug) =>
    setGamesDone((prev) => ({ ...prev, [country]: true }));

  const setMiniGameScore = (id: GameId, score: number) =>
    setMiniGameScores((prev) => ({ ...prev, [id]: Math.max(prev[id], score) }));

  const resetPassport = () => {
    setStamps([]);
    setStoryRead({ ...emptyProgress });
    setGamesDone({ ...emptyProgress });
    setMiniGameScores({ ...emptyMiniGames });
    setExplorerName("");
    setAvatar("");
  };

  const logout = () => resetPassport();

  return (
    <PassportContext.Provider
      value={{
        explorerName,
        setExplorerName,
        avatar,
        setAvatar,
        isLoggedIn,
        login,
        logout,
        stamps,
        addStamp,
        hasStamp,
        storyRead,
        gamesDone,
        markStoryRead,
        markGamesDone,
        miniGameScores,
        setMiniGameScore,
        resetPassport,
      }}
    >
      {children}
    </PassportContext.Provider>
  );
}

export function usePassport() {
  const ctx = useContext(PassportContext);
  if (!ctx) throw new Error("usePassport must be used within PassportProvider");
  return ctx;
}
