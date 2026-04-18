import { Award, Star, Trophy, MapPin } from "lucide-react";
import passport from "@/assets/passport.png";

const achievements = [
  { icon: MapPin, label: "5 países visitados", color: "bg-[var(--coral)]" },
  { icon: Star, label: "20 quizzes completos", color: "bg-[var(--sunshine)]" },
  { icon: Trophy, label: "Mestre da América do Sul", color: "bg-[var(--mint)]" },
  { icon: Award, label: "Poliglota júnior", color: "bg-[var(--grape)]" },
];

export function Passport() {
  return (
    <section id="passaporte" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-candy opacity-20 blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-card p-8 shadow-float border-4 border-card">
            <img
              src={passport}
              alt="Passaporte digital com carimbos"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-md mx-auto animate-float-slow"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block rounded-full bg-[var(--mint)]/40 px-4 py-1 text-xs font-bold uppercase tracking-wider">
            Passaporte digital
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold leading-tight">
            Cada conquista{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-[var(--grape)]/30" aria-hidden="true" />
              <span className="relative bg-gradient-candy bg-clip-text text-transparent">
                vira um carimbo
              </span>
            </span>
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Complete missões, ganhe medalhas e veja seu passaporte se encher de
            memórias culturais. Uma motivação extra para continuar explorando!
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 rounded-2xl bg-card p-4 border-2 border-border/40 shadow-sticker"
              >
                <span className={`${a.color} h-11 w-11 rounded-xl grid place-items-center text-white shadow-sticker`}>
                  <a.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
