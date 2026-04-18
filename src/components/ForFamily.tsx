import { ShieldCheck, Clock, BookOpen, Users } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "100% seguro", desc: "Sem anúncios, sem chats abertos. Conformidade com a LGPD." },
  { icon: Clock, title: "Controle de tempo", desc: "Os pais definem limites diários de uso direto no painel." },
  { icon: BookOpen, title: "Para a sala de aula", desc: "Planos de aula prontos para professores integrarem o conteúdo." },
  { icon: Users, title: "Perfis para irmãos", desc: "Cada criança tem seu progresso, idade e dificuldade adaptada." },
];

const testimonials = [
  {
    quote: "Minha filha aprendeu mais sobre o Egito brincando aqui em uma semana do que em meses de vídeos no YouTube.",
    author: "Juliana, mãe da Luísa (8 anos)",
  },
  {
    quote: "Uso na minha turma de 4º ano. Os alunos disputam para terminar os quizzes!",
    author: "Profª Bruna, escola municipal",
  },
];

export function ForFamily() {
  return (
    <section id="familia" className="py-20 sm:py-28 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-secondary/30 px-4 py-1 text-xs font-bold uppercase tracking-wider">
            Para pais & professores
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold">
            Aprendizado com tranquilidade 💙
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl bg-card p-6 border-2 border-border/40 shadow-soft">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary/40 text-secondary-foreground mb-4">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-bold text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`rounded-3xl p-7 shadow-float ${i === 0 ? "bg-gradient-sunset text-white" : "bg-gradient-tropical text-white"}`}
            >
              <blockquote className="text-lg font-display leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold opacity-90">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
