import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
import { FLAG_CARDS, ROUND_SIZE } from "@/data/miniGames";
import { usePassport } from "@/context/PassportContext";
import cardBack from "@/assets/card-back.png";

type Card = { id: number; iso: string; name: string; matched: boolean };

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildDeck(seed: number): Card[] {
  void seed;
  // Random subset of countries each round, then duplicated to make pairs
  const subset = shuffle(FLAG_CARDS).slice(0, ROUND_SIZE);
  const doubled = [...subset, ...subset];
  return shuffle(doubled).map((c, i) => ({
    id: i,
    iso: c.iso,
    name: c.name,
    matched: false,
  }));
}

export function MemoryGame() {
  const { setMiniGameScore } = usePassport();
  const [seed, setSeed] = useState(0);
  const initialDeck = useMemo(() => buildDeck(seed), [seed]);
  const [deck, setDeck] = useState<Card[]>(initialDeck);
  const [open, setOpen] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [done, setDone] = useState(false);

  const reset = () => {
    setSeed((s) => s + 1);
    setOpen([]);
    setMoves(0);
    setDone(false);
  };

  // When seed changes, refresh the deck
  useEffect(() => {
    setDeck(initialDeck);
  }, [initialDeck]);

  const allMatched = deck.length > 0 && deck.every((c) => c.matched);

  useEffect(() => {
    if (allMatched && !done) {
      setDone(true);
      const score = Math.max(0, 100 - (moves - ROUND_SIZE) * 5);
      setMiniGameScore("memoria", score);
    }
  }, [allMatched, done, moves, setMiniGameScore]);

  const flip = (idx: number) => {
    if (open.length === 2) return;
    if (open.includes(idx)) return;
    if (deck[idx].matched) return;
    const next = [...open, idx];
    setOpen(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next;
      if (deck[a].iso === deck[b].iso) {
        setTimeout(() => {
          setDeck((d) =>
            d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)),
          );
          setOpen([]);
        }, 500);
      } else {
        setTimeout(() => setOpen([]), 900);
      }
    }
  };

  return (
    <div className="rounded-3xl bg-card p-6 sm:p-8 border-2 border-border/40 shadow-soft">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-display font-bold">🧠 Jogo da Memória</h2>
          <p className="text-sm text-foreground/70">
            Encontre os pares de bandeiras! ({ROUND_SIZE} pares por partida)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Jogadas: {moves}</span>
          <button
            onClick={reset}
            className="rounded-full bg-card border-2 border-border px-4 py-2 text-sm font-bold hover:border-primary/40 inline-flex items-center gap-1"
          >
            <RotateCcw className="h-4 w-4" /> Reiniciar
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
        {deck.map((card, i) => {
          const isOpen = open.includes(i) || card.matched;
          return (
            <motion.button
              key={card.id}
              onClick={() => flip(i)}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? `Bandeira de ${card.name}` : "Carta virada"}
              className={`relative aspect-[3/4] rounded-2xl border-4 overflow-hidden transition ${
                isOpen
                  ? card.matched
                    ? "border-[var(--mint)]"
                    : "border-primary"
                  : "border-card"
              }`}
            >
              {isOpen ? (
                <>
                  <span
                    className={`fi fi-${card.iso}`}
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      display: "block",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] sm:text-xs font-bold text-white bg-black/55 rounded-md px-1 py-0.5 text-center truncate">
                    {card.name}
                  </span>
                </>
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-gradient-tropical">
                  <img
                    src={cardBack}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-3/5 w-3/5 object-contain drop-shadow-md opacity-95"
                  />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {done && (
        <div className="mt-6 rounded-2xl bg-gradient-sunset text-white p-5 text-center shadow-sticker">
          <Trophy className="inline h-5 w-5 mr-1" />
          <strong>Boa! Você terminou em {moves} jogadas! 🎉</strong>
        </div>
      )}
    </div>
  );
}
