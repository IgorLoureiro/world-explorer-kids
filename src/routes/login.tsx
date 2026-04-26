import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";
import { AVATAR_OPTIONS, usePassport } from "@/context/PassportContext";
import luna from "@/assets/luna-mascot.png";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Entrar — Exploradores do Mundo" },
      { name: "description", content: "Crie seu perfil de explorador e acesse o lobby." },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const { login } = usePassport();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string>(AVATAR_OPTIONS[0].src);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Escreve seu nome de explorador!");
      return;
    }
    login(name, avatar);
    navigate({ to: "/lobby" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="hidden lg:flex relative bg-gradient-tropical items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <motion.img
          src={luna}
          alt="Luna Matias"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-md drop-shadow-2xl"
        />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h2 className="font-display text-4xl font-bold leading-tight">
            Bem-vindo,<br />pequeno explorador! 🌍
          </h2>
          <p className="mt-3 text-white/90">
            Crie seu perfil para acessar o lobby cheio de aventuras.
          </p>
        </div>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground/70 hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>

          <h1 className="mt-6 text-4xl font-display font-bold">Vamos começar! ✨</h1>
          <p className="mt-2 text-foreground/70">
            Escolha um nome e um avatar para sua aventura.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-bold">Seu nome de explorador</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                maxLength={24}
                placeholder="Ex: Capitã Júlia"
                className="mt-2 w-full rounded-2xl border-2 border-border bg-background px-5 py-3 font-semibold focus:outline-none focus:border-primary"
              />
              {error && <p className="mt-2 text-sm text-destructive font-bold">{error}</p>}
            </div>

            <div>
              <label className="text-sm font-bold">Escolha seu avatar</label>
              <div className="mt-2 grid grid-cols-4 sm:grid-cols-4 gap-3">
                {AVATAR_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAvatar(opt.src)}
                    className={`group aspect-square rounded-2xl overflow-hidden border-2 transition flex items-center justify-center bg-card ${
                      avatar === opt.src
                        ? "border-primary scale-105 shadow-sticker ring-2 ring-primary/30"
                        : "border-border hover:border-primary/40"
                    }`}
                    aria-label={`Avatar ${opt.label}`}
                    title={opt.label}
                  >
                    <img
                      src={opt.src}
                      alt={opt.label}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-full w-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-bold shadow-float hover:-translate-y-0.5 transition"
            >
              <Rocket className="h-5 w-5" /> Entrar no lobby
            </button>

            <p className="text-xs text-foreground/50 text-center">
              Seu perfil é salvo apenas durante esta visita (MVP).
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
