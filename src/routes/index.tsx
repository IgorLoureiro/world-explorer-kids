import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { CountryMap } from "@/components/CountryMap";
import { Games } from "@/components/Games";
import { Passport } from "@/components/Passport";
import { ForFamily } from "@/components/ForFamily";
import { CTA } from "@/components/CTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Exploradores do Mundo — Turismo digital para crianças" },
      {
        name: "description",
        content:
          "Plataforma educativa interativa que leva crianças a viajar pelo mundo com mapas, mini-jogos, quizzes e um passaporte digital de conquistas.",
      },
      { property: "og:title", content: "Exploradores do Mundo" },
      {
        property: "og:description",
        content: "Mapas interativos, jogos culturais e o passaporte digital da Luna Matias.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <CountryMap />
        <Games />
        <Passport />
        <ForFamily />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
