import { createContext, useContext, useState, type ReactNode } from "react";

export type CountrySlug = "brasil" | "eua" | "china" | "russia" | "japao";

type Stamp = {
  country: CountrySlug;
  date: string;
};

type PassportState = {
  explorerName: string;
  setExplorerName: (name: string) => void;
  stamps: Stamp[];
  addStamp: (country: CountrySlug) => void;
  hasStamp: (country: CountrySlug) => boolean;
  storyRead: Record<CountrySlug, boolean>;
  gamesDone: Record<CountrySlug, boolean>;
  markStoryRead: (country: CountrySlug) => void;
  markGamesDone: (country: CountrySlug) => void;
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

export function PassportProvider({ children }: { children: ReactNode }) {
  const [explorerName, setExplorerName] = useState<string>("");
  const [stamps, setStamps] = useState<Stamp[]>([]);
  const [storyRead, setStoryRead] = useState<Record<CountrySlug, boolean>>({ ...emptyProgress });
  const [gamesDone, setGamesDone] = useState<Record<CountrySlug, boolean>>({ ...emptyProgress });

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

  const resetPassport = () => {
    setStamps([]);
    setStoryRead({ ...emptyProgress });
    setGamesDone({ ...emptyProgress });
    setExplorerName("");
  };

  return (
    <PassportContext.Provider
      value={{
        explorerName,
        setExplorerName,
        stamps,
        addStamp,
        hasStamp,
        storyRead,
        gamesDone,
        markStoryRead,
        markGamesDone,
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
