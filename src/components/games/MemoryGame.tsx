import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
import { FLAG_CARDS } from "@/data/miniGames";
import { usePassport } from "@/context/PassportContext";

type Card = { id: number; flag: string; matched: boolean };

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildDeck(): Card[] {
  const doubled = [...FLAG_CARDS, ...FLAG_CARDS];
  return shuffle(doubled).map((c, i) => ({ id: i, flag: c.flag, matched: false }));
}

export function MemoryGame() {
  const { setMiniGameScore } = usePassport();
  const [deck, setDeck] = useState<Card[]>(() => buildDeck());
  const [open, setOpen] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [done, setDone] = useState(false);

  const reset = () => {
    setDeck(buildDeck());
    setOpen([]);
    setMoves(0);
    setDone(false);
  };

  const allMatched = deck.length > 0 && deck.every((c) => c.matched);

  useEffect(() => {
    if (allMatched && !done) {
      setDone(true);
      // best score = fewer moves better; convert to a 0-100 score
      const score = Math.max(0, 100 - (moves - FLAG_CARDS.length) * 5);
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
      if (deck[a].flag === deck[b].flag) {
        setTimeout(() => {
          setDeck((d) => d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)));
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
          <p className="text-sm text-foreground/70">Encontre os pares de bandeiras!</p>
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

      <div className="mt-6 grid grid-cols-4 sm:grid-cols-5 gap-3">
        {deck.map((card, i) => {
          const isOpen = open.includes(i) || card.matched;
          return (
            <motion.button
              key={card.id}
              onClick={() => flip(i)}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-2xl border-2 grid place-items-center text-4xl sm:text-5xl transition ${
                isOpen
                  ? card.matched
                    ? "bg-[var(--mint)]/30 border-[var(--mint)]"
                    : "bg-card border-primary"
                  : "bg-gradient-tropical border-card text-transparent"
              }`}
            >
              {isOpen ? card.flag : "?"}
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
