import { motion } from "framer-motion";
import { useState } from "react";
import worldMap from "@/assets/world-map.jpg";

type Country = {
  id: string;
  name: string;
  emoji: string;
  fact: string;
  x: number;
  y: number;
  color: string;
};

const countries: Country[] = [
  { id: "br", name: "Brasil", emoji: "🇧🇷", fact: "Tem a maior floresta do mundo!", x: 32, y: 68, color: "var(--mint)" },
  { id: "fr", name: "França", emoji: "🇫🇷", fact: "Casa da Torre Eiffel ✨", x: 50, y: 32, color: "var(--coral)" },
  { id: "eg", name: "Egito", emoji: "🇪🇬", fact: "Aqui ficam as Pirâmides!", x: 56, y: 46, color: "var(--sunshine)" },
  { id: "jp", name: "Japão", emoji: "🇯🇵", fact: "Terra dos cerejeiras 🌸", x: 82, y: 40, color: "var(--grape)" },
  { id: "au", name: "Austrália", emoji: "🇦🇺", fact: "Cangurus por todo lado!", x: 84, y: 74, color: "var(--sky)" },
  { id: "us", name: "EUA", emoji: "🇺🇸", fact: "Estátua da Liberdade 🗽", x: 22, y: 38, color: "var(--coral)" },
];

export function CountryMap() {
  const [selected, setSelected] = useState<Country>(countries[0]);

  return (
    <section id="mapa" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-secondary/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            Mapa interativo
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold">
            Toque em um país e descubra! 🗺️
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Cada destino tem histórias, vídeos e jogos esperando por você.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 items-stretch">
          {/* Map */}
          <div className="relative rounded-[2rem] overflow-hidden bg-card border-4 border-card shadow-float">
            <img
              src={worldMap}
              alt="Mapa-múndi colorido"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
              {countries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  style={{ left: `${c.x}%`, top: `${c.y}%`, backgroundColor: c.color }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full grid place-items-center text-xl shadow-sticker ring-4 ring-white/80 hover:scale-125 transition-transform ${selected.id === c.id ? "scale-125 ring-primary" : ""}`}
                  aria-label={c.name}
                >
                  <span className="drop-shadow">{c.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info card */}
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] bg-gradient-sunset p-1 shadow-float"
          >
            <div className="rounded-[1.85rem] bg-card h-full p-7 flex flex-col">
              <div className="text-6xl">{selected.emoji}</div>
              <h3 className="mt-3 text-3xl font-display font-bold">{selected.name}</h3>
              <p className="mt-2 text-foreground/75 text-lg">{selected.fact}</p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                <div className="rounded-2xl bg-accent/40 py-3">
                  <div className="text-2xl">🎮</div>3 jogos
                </div>
                <div className="rounded-2xl bg-secondary/30 py-3">
                  <div className="text-2xl">🎬</div>5 vídeos
                </div>
                <div className="rounded-2xl bg-[var(--mint)]/40 py-3">
                  <div className="text-2xl">📖</div>4 histórias
                </div>
              </div>

              <button className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold shadow-sticker w-full justify-center">
                  Explorar {selected.name} →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
