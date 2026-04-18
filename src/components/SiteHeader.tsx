import { Globe } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-sunset shadow-sticker text-white group-hover:rotate-12 transition-transform">
            <Globe className="h-5 w-5" />
          </span>
          <span className="font-display font-bold text-lg leading-none">
            Exploradores <span className="text-primary">do Mundo</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-foreground/80">
          <a href="#mapa" className="hover:text-primary transition">Mapa</a>
          <a href="#jogos" className="hover:text-primary transition">Jogos</a>
          <a href="#passaporte" className="hover:text-primary transition">Passaporte</a>
          <a href="#familia" className="hover:text-primary transition">Para a família</a>
        </nav>
        <a
          href="#mapa"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-sticker hover:-translate-y-0.5 transition"
        >
          Começar a aventura
        </a>
      </div>
    </header>
  );
}
