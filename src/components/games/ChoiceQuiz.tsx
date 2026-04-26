import { useMemo, useState } from "react";
import { Trophy, RotateCcw, Volume2 } from "lucide-react";
import { usePassport } from "@/context/PassportContext";
import {
  ALL_COUNTRY_NAMES,
  ANIMAL_QUESTIONS,
  FLAG_CARDS,
  MONUMENT_QUESTIONS,
  SOUND_QUESTIONS,
  type MiniGameId,
} from "@/data/miniGames";

type QA = {
  prompt: React.ReactNode;
  hint?: string;
  answer: string;
  options: string[];
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildOptions(answer: string): string[] {
  const others = ALL_COUNTRY_NAMES.filter((n) => n !== answer);
  return shuffle([answer, ...shuffle(others).slice(0, 3)]);
}

function buildQuestions(gameId: MiniGameId): QA[] {
  switch (gameId) {
    case "bandeiras":
      return shuffle(FLAG_CARDS).map((c) => ({
        prompt: <span className="text-7xl">{c.flag}</span>,
        hint: "De qual país é esta bandeira?",
        answer: c.name,
        options: buildOptions(c.name),
      }));
    case "safari":
      return shuffle(ANIMAL_QUESTIONS).map((a) => ({
        prompt: <span className="text-7xl">{a.emoji}</span>,
        hint: `${a.animal} — em qual país vive?`,
        answer: a.country,
        options: buildOptions(a.country),
      }));
    case "sons":
      return shuffle(SOUND_QUESTIONS).map((s) => ({
        prompt: (
          <div className="flex flex-col items-center gap-2">
            <Volume2 className="h-10 w-10 text-primary" />
            <span className="text-3xl font-display font-bold">"{s.word}"</span>
          </div>
        ),
        hint: `Esta saudação é em ${s.language}. De qual país?`,
        answer: s.country,
        options: buildOptions(s.country),
      }));
    case "monumentos":
      return shuffle(MONUMENT_QUESTIONS).map((m) => ({
        prompt: (
          <div className="flex flex-col items-center gap-2">
            <span className="text-7xl">{m.emoji}</span>
            <span className="text-sm font-bold text-foreground/70">{m.name}</span>
          </div>
        ),
        hint: "Em qual país fica este monumento?",
        answer: m.country,
        options: buildOptions(m.country),
      }));
    default:
      return [];
  }
}

export function ChoiceQuiz({
  gameId,
  title,
  emoji,
}: {
  gameId: MiniGameId;
  title: string;
  emoji: string;
}) {
  const { setMiniGameScore } = usePassport();
  const [seed, setSeed] = useState(0);
  const questions = useMemo(() => buildQuestions(gameId), [gameId, seed]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];

  const handlePick = (opt: string) => {
    if (picked) return;
    setPicked(opt);
    const correct = opt === q.answer;
    const nextScore = correct ? score + 1 : score;
    setTimeout(() => {
      if (idx + 1 < questions.length) {
        setScore(nextScore);
        setIdx(idx + 1);
        setPicked(null);
      } else {
        setScore(nextScore);
        setDone(true);
        const pct = Math.round((nextScore / questions.length) * 100);
        setMiniGameScore(gameId, pct);
      }
    }, 800);
  };

  const reset = () => {
    setSeed((s) => s + 1);
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-gradient-tropical p-1 shadow-float">
        <div className="rounded-[1.85rem] bg-card p-8 text-center">
          <div className="text-5xl">{emoji}</div>
          <h3 className="mt-3 text-2xl font-display font-bold">{title} concluído!</h3>
          <p className="mt-2 text-foreground/70">
            Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong>.
          </p>
          <button
            onClick={reset}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 font-bold text-sm"
          >
            <RotateCcw className="h-4 w-4" /> Jogar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-card p-6 sm:p-8 border-2 border-border/40 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold">
          {emoji} {title}
        </h2>
        <span className="text-sm font-bold text-foreground/60">
          {idx + 1} / {questions.length}
        </span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-gradient-sunset transition-all"
          style={{ width: `${(idx / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-8 grid place-items-center min-h-[140px]">{q.prompt}</div>
      {q.hint && (
        <p className="mt-4 text-center text-lg font-semibold">{q.hint}</p>
      )}

      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        {q.options.map((opt) => {
          const isCorrect = picked && opt === q.answer;
          const isWrong = picked === opt && opt !== q.answer;
          return (
            <button
              key={opt}
              onClick={() => handlePick(opt)}
              disabled={!!picked}
              className={`rounded-2xl border-2 px-5 py-4 text-left font-semibold transition ${
                isCorrect
                  ? "bg-[var(--mint)]/40 border-[var(--mint)]"
                  : isWrong
                    ? "bg-destructive/15 border-destructive"
                    : "bg-card border-border hover:border-primary/40 hover:-translate-y-0.5"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-foreground/60 inline-flex items-center gap-2">
        <Trophy className="h-4 w-4" /> Pontuação: <strong>{score}</strong>
      </p>
    </div>
  );
}
