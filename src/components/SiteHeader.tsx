import { Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-sunset shadow-sticker text-white group-hover:rotate-12 transition-transform">
            <Globe className="h-5 w-5" />
          </span>
          <span className="font-display font-bold text-lg leading-none">
            Exploradores <span className="text-primary">do Mundo</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-foreground/80">
          <Link to="/" hash="mapa" className="hover:text-primary transition">Mapa</Link>
          <Link to="/" hash="jogos" className="hover:text-primary transition">Jogos</Link>
          <Link to="/" hash="passaporte" className="hover:text-primary transition">Passaporte</Link>
          <Link to="/" hash="familia" className="hover:text-primary transition">Para a família</Link>
        </nav>
        <Link
          to="/"
          hash="mapa"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-sticker hover:-translate-y-0.5 transition"
        >
          Começar a aventura
        </Link>
      </div>
    </header>
  );
}
