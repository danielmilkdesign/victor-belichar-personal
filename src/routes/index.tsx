import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { DiagonalLines } from "@/components/DiagonalLines";
import { VibeDetail } from "@/components/VibeDetail";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import muaythai from "@/assets/muaythai.jpg";
import servicePresencial from "@/assets/service-presencial.jpg";
import serviceOnline from "@/assets/service-online.jpg";
import gym from "@/assets/gym.jpg";
import teamTrainingLogo from "@/assets/team-training-logo.png";
import logoVibe from "@/assets/logo-vibe-treinador.png";
import victorPortrait from "@/assets/victor-portrait.webp";
import vibeHero from "@/assets/vibe-hero.png";
import vibeHeroLeft from "@/assets/vibe-hero-left.png";

import {
  ClipboardList,
  ScanLine,
  Dumbbell,
  Salad,
  Flame,
  Users,
  User,
  Wifi,
  CheckCircle2,
  Phone,
  Instagram,
  MapPin,
  Mail,
  Camera,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Belichar — Personal Trainer | Team Vibe Training" },
      {
        name: "description",
        content:
          "Personal Trainer em Manaus. Metodologia Vibe Training para performance, hipertrofia, emagrecimento e Muay Thai. Atendimento exclusivo academia Cagin Soberane. CREF 009161-G/AM.",
      },
      { property: "og:title", content: "Victor Belichar — Personal Trainer" },
      {
        property: "og:description",
        content:
          "Treino técnico, eficiente e seguro com acompanhamento 360° da sua evolução.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:py-32 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

function FotoTransformacao({
  src,
  label,
  alt,
}: {
  src: string;
  label: "ANTES" | "DEPOIS";
  alt: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[19/30] bg-neutral-950 border-r border-border last:border-r-0 overflow-hidden flex flex-col items-center justify-center text-center">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground/70 p-3 select-none">
          <div className="w-10 h-10 rounded-full bg-brand-red/15 flex items-center justify-center text-brand-red mb-1">
            <Camera className="w-5 h-5" />
          </div>
          <p className="text-xs font-semibold text-foreground/90">
            {label === "ANTES" ? "Foto Antes" : "Foto Depois"}
          </p>
          <span className="text-[10px] font-mono text-muted-foreground bg-card px-2 py-0.5 rounded border border-border">
            {src}
          </span>
        </div>
      )}
      <span className="absolute top-3 left-3 rounded bg-background/85 px-2.5 py-1 text-[10px] tracking-widest font-bold text-brand-red shadow-card-soft z-10">
        {label}
      </span>
    </div>
  );
}

function Index() {
  return (
    <main id="top" className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollReveal />
      <ScrollToTop />


      {/* HERO */}
      <section className="relative isolate min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-16 md:pt-20 md:pb-0">
        <DiagonalLines side="left" />
        <VibeDetail side="left" />
        <VibeDetail side="right" />
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <img
            src={vibeHero}
            alt=""
            aria-hidden="true"
            className="glitch-img absolute right-0 bottom-0 h-[92%] w-auto max-w-none object-contain opacity-60 hidden md:block"
          />
          <img
            src={vibeHeroLeft}
            alt=""
            aria-hidden="true"
            className="glitch-img glitch-img--2 absolute left-0 bottom-0 h-[92%] w-auto max-w-none object-contain opacity-60 hidden md:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="vhs-overlay" aria-hidden="true" />
          <div className="vhs-noise" aria-hidden="true" />
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <h1 className="sr-only">Team Vibe Training — Since 2020</h1>
            <img
              src={teamTrainingLogo}
              alt="Team Training — Since 2020"
              className="fade-up fade-up-1 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] h-auto select-none [filter:brightness(0)_invert(1)] drop-shadow-[0_4px_20px_oklch(0_0_0/0.6)]"
              width={1160}
              height={780}
            />
            <p className="fade-up fade-up-2 mt-4 text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-bold">
              TREINADOR &amp; PERSONAL TRAINER
            </p>
            <p className="fade-up fade-up-3 mt-6 md:mt-8 text-base md:text-xl text-foreground w-full max-w-2xl mx-auto font-normal leading-snug text-center">
              Transformo sua vida através da <strong className="font-bold">atividade física</strong>. Treino{" "}
              <strong className="font-bold">técnico, eficiente e seguro</strong> com <em className="italic font-normal">acompanhamento 360°</em>.
            </p>
            <div className="fade-up fade-up-4 mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-brand-red text-primary-foreground px-6 py-3.5 sm:px-7 sm:py-4 rounded-md font-bold tracking-wide shadow-red hover:opacity-90 transition"
              >
                VER PLANOS
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-md font-bold tracking-wide hover:border-brand-red hover:text-brand-red transition"
              >
                AGENDE SEU TREINO
              </a>
            </div>
            <p className="fade-up fade-up-5 mt-8 md:mt-10 text-sm sm:text-base text-white tracking-widest">
              CREF 009161-G/AM
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="sobre">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 gradient-red rounded-lg blur-2xl opacity-20" />
            <img
              src={victorPortrait}
              alt="Victor Belichar"
              loading="lazy"
              className="relative rounded-lg w-full h-auto object-contain"
              width={938}
              height={1311}
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
              SOBRE
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="italic-accent">Victor Belichar,</span>{" "}
              <span className="text-foreground">Amazonense, 37 anos.</span>
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Profissional de Educação Física Bacharel",
                "Pós-graduado em Fisiologia do Exercício",
                "Preparador físico de atletas de combate",
                "Instrutor de Muay Thai",
                "Praticante de Musculação",
                "Atleta amador Men's Physique IFBB",
                "Corredor amador",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 border-l-4 border-brand-red bg-card rounded-r-lg">
              <h3 className="text-xl font-bold mb-2">Minha missão</h3>
              <p className="text-muted-foreground">
                Transformar sua vida através da atividade física, tirar você do
                sedentarismo e melhorar seu físico e sua autoestima.
              </p>
            </div>
            <div className="mt-6 space-y-1 text-sm tracking-widest text-foreground/80">
              <p>ATENDIMENTO PRESENCIAL · ACADEMIA CAGIN SOBERANE E CIA ATHLETICA MANAUARA</p>
              <p>ATENDIMENTO ONLINE ATRAVÉS DE CONSULTORIA PERSONALIZADA</p>
            </div>
          </div>
        </div>
      </Section>

      {/* METODOLOGIA */}
      <section id="metodologia" className="relative py-24 md:py-32 bg-card/50">
        <div className="absolute inset-0 -z-10">
          <img src={gym} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
            METODOLOGIA
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 max-w-3xl">
            A metodologia <span className="italic-accent">Vibe Training</span>{" "}
            ajuda quem busca qualidade de vida, um corpo forte e bonito e mais
            performance física no esporte.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: ClipboardList, title: "Anamnese para conhecer o aluno" },
              { icon: ScanLine, title: "Avaliação física por bioimpedância ou por foto" },
              { icon: Dumbbell, title: "Montagem de treino voltada para objetivo do aluno" },
              { icon: Salad, title: "Orientações para melhorar alimentação" },
            ].map((it) => (
              <div
                key={it.title}
                className="group relative p-8 rounded-xl bg-background border border-border hover:border-brand-red transition shadow-card-soft"
              >
                <div className="w-14 h-14 rounded-full gradient-red flex items-center justify-center mb-5 shadow-red">
                  <it.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold leading-snug">{it.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <Section id="servicos">
        <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
          SERVIÇOS
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          Serviços <span className="italic-accent">Oferecidos</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: User,
              title: "Atendimento Presencial",
              tag: "Presencial",
              desc: "Treino personalizado com acompanhamento direto nas academias Cagin Soberane e Cia Athletica Manauara.",
              img: servicePresencial,
            },
            {
              icon: Flame,
              title: "Personal Fight",
              tag: "Muay Thai",
              desc: "Atendimento presencial para atletas, amadores e para quem quer aprender uma luta.",
              img: muaythai,
            },
            {
              icon: Wifi,
              title: "Acompanhamento Online",
              tag: "Consultoria",
              desc: "Treino personalizado para o seu objetivo, com suporte via aplicativo e WhatsApp.",
              img: serviceOnline,
            },
            {
              icon: CheckCircle2,
              title: "Aula Avulsa",
              tag: "Experimental",
              desc: "Aula avulsa ou experimental para você conhecer a metodologia. R$ 200.",
              img: gym,
            },
          ].map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-brand-red transition group"
            >
              {s.img && (
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-44 object-cover opacity-70 group-hover:opacity-90 transition"
                />
              )}
              <div className="p-7">
                <s.icon className="w-8 h-8 text-brand-red mb-4" />
                <p className="text-xs tracking-widest text-brand-red font-semibold mb-1">
                  {s.tag}
                </p>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Entregas */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <h3 className="text-4xl md:text-6xl font-black">
            Meus serviços visam{"\n"}
            <span className="italic-accent">lhe entregar:</span>
          </h3>
          <ul className="space-y-4">
            {[
              "Um treino para tirar você da zona de conforto e lhe entregar o resultado que você deseja",
              "Atendimento diferenciado, ético e exclusivo",
              "Treino técnico, eficiente e seguro",
              "Acompanhamento 360° da sua evolução física e estética",
              "Transformação de hábitos, melhora da qualidade de vida e bem-estar",
            ].map((t) => (
              <li key={t} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                <span className="text-foreground/90 text-2xl">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PLANOS PRESENCIAIS */}
      <section id="planos" className="relative py-24 md:py-32 bg-card/30">
        <DiagonalLines side="right" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
            INVESTIMENTO
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Planos de <span className="italic-accent">Atendimento Presencial</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14">
            São 2 planos de atendimento presencial: <strong className="text-foreground">Padrão</strong> e{" "}
            <strong className="text-foreground">Exclusive</strong>. A diferença entre eles é a
            exclusividade no horário.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plano Padrão */}
            <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-black italic text-brand-red">
                Plano Padrão
              </h3>
              <p className="text-muted-foreground mt-1 mb-8">
                Treinamento para 1 ou 2 pessoas no mesmo horário.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base">
                  <thead>
                    <tr className="text-brand-red font-bold">
                      <th className="py-3 pr-4">FREQUÊNCIA</th>
                      <th className="py-3 pr-4">1 PESSOA</th>
                      <th className="py-3 pr-4">2 PESSOAS</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    {[
                      ["1x semana", "R$ 1.370", "—"],
                      ["2x semana", "R$ 1.570", "R$ 2.940"],
                      ["3x semana", "R$ 1.970", "R$ 3.340"],
                      ["4x semana", "R$ 2.590", "R$ 3.960"],
                      ["5x semana", "R$ 3.170", "R$ 4.540"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-border">
                        <td className="py-4 pr-4 font-bold">{r[0]}</td>
                        <td className="py-4 pr-4 font-black">{r[1]}</td>
                        <td className="py-4 pr-4 font-black">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * 1x na semana é semi-presencial. Valores para 2 pessoas com
                desconto em relação ao individual.
              </p>
            </div>

            {/* Plano Exclusive */}
            <div className="rounded-2xl border-2 border-brand-red bg-background p-8 md:p-10 shadow-red relative">
              <span className="absolute -top-3 left-8 bg-brand-red text-primary-foreground text-xs font-bold tracking-widest px-3 py-1 rounded">
                EXCLUSIVIDADE NO HORÁRIO
              </span>
              <h3 className="text-3xl md:text-4xl font-black italic text-brand-red">
                Plano Exclusive
              </h3>
              <p className="text-muted-foreground mt-1 mb-8">
                Treinamento para 1 pessoa com exclusividade no horário.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base">
                  <thead>
                    <tr className="text-brand-red font-bold">
                      <th className="py-3 pr-4">FREQUÊNCIA</th>
                      <th className="py-3 pr-4">VALOR</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    {[
                      ["1x semana", "—"],
                      ["2x semana", "R$ 2.190"],
                      ["3x semana", "R$ 2.990"],
                      ["4x semana", "R$ 3.710"],
                      ["5x semana", "R$ 4.350"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-border">
                        <td className="py-4 pr-4 font-bold">{r[0]}</td>
                        <td className="py-4 pr-4 font-black text-xl">{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <ul className="mt-8 text-xs text-muted-foreground space-y-1">
            <li>* Atendimento presencial nas academias Cagin Soberane e Cia Athletica Manauara.</li>
            <li>* Aula avulsa: R$ 200.</li>
            <li>* Não atendo aos sábados, domingos e feriados.</li>
            <li>* Valores referentes à reserva de horário.</li>
          </ul>
        </div>
      </section>


      {/* OUTROS SERVIÇOS */}
      <section className="relative py-24 md:py-32 bg-card/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
            SERVIÇOS ONLINE
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-14">
            Serviços <span className="italic-accent">online</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Protocolos de treino */}
            <div className="rounded-xl border border-border bg-background p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-1">Protocolos de Treino</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Protocolos de treino de musculação com recorrência mensal.
              </p>
              <div className="space-y-3 flex-1">
                {[
                  ["1ª parcela", "R$ 49,99"],
                  ["2ª parcela em diante", "R$ 99,99 / mês"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultoria Online Personalizada */}
            <div className="rounded-xl border-2 border-brand-red bg-background p-8 flex flex-col shadow-red">
              <h3 className="text-2xl font-bold mb-1">Consultoria Online Personalizada</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Acompanhamento completo e personalizado para o objetivo do aluno.
              </p>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-lg text-muted-foreground line-through">R$ 1.050</span>
                <span className="text-4xl font-black">R$ 850</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                Pacote de 3 meses · ou R$ 350 mensal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <Section id="resultados">
        <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
          RESULTADOS
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Antes <span className="italic-accent">&amp; depois</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Transformações reais de alunos acompanhados com a metodologia Vibe
          Training. Resultados construídos com constância e acompanhamento
          personalizado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              id: 1,
              title: "Transformação 1",
              subtitle: "Evolução com a metodologia Vibe Training.",
              antes: "/fotos-alunos/1.png",
              depois: "/fotos-alunos/2.png",
            },
            {
              id: 2,
              title: "Transformação 2",
              subtitle: "Evolução com a metodologia Vibe Training.",
              antes: "/fotos-alunos/3.png",
              depois: "/fotos-alunos/4.png",
            },
            {
              id: 3,
              title: "Transformação 3",
              subtitle: "Evolução com a metodologia Vibe Training.",
              antes: "/fotos-alunos/5.png",
              depois: "/fotos-alunos/6.png",
            },
            {
              id: 4,
              title: "Transformação 4",
              subtitle: "Evolução com a metodologia Vibe Training.",
              antes: "/fotos-alunos/7.png",
              depois: "/fotos-alunos/8.png",
            },
            {
              id: 5,
              title: "Transformação 5",
              subtitle: "Evolução com a metodologia Vibe Training.",
              antes: "/fotos-alunos/aluno-5-antes.png",
              depois: "/fotos-alunos/aluno-5-depois.png",
            },
          ].map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border border-border bg-card overflow-hidden hover:border-brand-red transition ${
                item.id === 5 ? "md:col-span-2 md:max-w-[490px] md:mx-auto w-full" : ""
              }`}
            >
              <div className="grid grid-cols-2">
                <FotoTransformacao
                  src={item.antes}
                  label="ANTES"
                  alt={`Antes da transformação do aluno ${item.id}`}
                />
                <FotoTransformacao
                  src={item.depois}
                  label="DEPOIS"
                  alt={`Depois da transformação do aluno ${item.id}`}
                />
              </div>
              <div className="p-5">
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PARCEIROS */}
      <Section>
        <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
          PARCERIAS
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Rede de <span className="italic-accent">parceiros</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Profissionais selecionados para potencializar a performance dos meus
          alunos presenciais e online — com condições especiais por indicação.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { handle: "@mdclinic", desc: "Clínica médica e estética", url: "https://www.instagram.com/mdclinicamanaus_/" },
            { handle: "@dramaely.dangelo", desc: "Médica", url: "https://www.instagram.com/dramaelydangelo/" },
            { handle: "@dra.mayana.dangelo", desc: "Médica", url: "https://www.instagram.com/dramayanadangelo/" },
          ].map((item) => (
            <a
              key={item.handle}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-red transition flex items-start gap-4"
            >
              <Instagram className="w-6 h-6 text-brand-red shrink-0 mt-1" />
              <div>
                <p className="font-bold group-hover:text-brand-red transition">{item.handle}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* REGRAS DE ATENDIMENTO */}
      <section id="regras" className="relative py-24 md:py-32 bg-card/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
            ATENDIMENTO
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Regras de <span className="italic-accent">atendimento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Para garantir um atendimento técnico, ético e organizado, o
            treinamento segue algumas regras. Em caso de dúvidas, fale comigo
            pelo WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
            {
              title: "Horários e Agendamento",
              items: [
                "Os valores referem-se à reserva do seu horário fixo na semana.",
                "Aula com duração de até 1 hora.",
                "Não há atendimento aos sábados, domingos e feriados.",
                "Aula avulsa em feriado ou aos sábados: R$ 200.",
                "Atendimento exclusivo nas academias Cagin Soberane e Cia Athletica Manauara.",
              ],
            },
            {
              title: "Faltas e Reposições",
              items: [
                "Não trabalho com reposição de aula e nem dou aulas em feriados.",
                "Comunique faltas ou viagens antecipadamente.",
                "Faltas sem aviso prévio não geram desconto.",
                "Em caso de viagem do aluno, para garantir a reserva do horário, mesmo que em dupla, é preciso fazer o pagamento normalmente.",
              ],
            },
            {
              title: "Pagamento",
              items: [
                "Pagamento até o dia 05 de cada mês ou dia combinado.",
                "O pacote de aulas do mês é sempre do dia 1 ao 30/31.",
                "O fechamento/pagamento do pacote se dá pela reserva de horário na agenda: você não paga apenas pelo treino, e sim também pela reserva de horário exclusiva ou em dupla.",
                "Valores condição especial não têm exclusividade de horário, podendo ser adicionado 1 aluno do mesmo nível no mesmo horário.",
                "Aumento de 3% a 5% após 1 ano ou anualmente, sempre no mês 3 (março).",
                "Em caso de viagem do professor, o valor mensal sofre abatimento proporcional aos dias de ausência (não se aplica a condição especial).",
                "Cancelamento do plano deve ser comunicado antes do primeiro dia do mês seguinte; caso seja feito no mês seguinte, será cobrada taxa + dias proporcionais.",
              ],
            },
              {
                title: "Conduta e Saúde",
                items: [
                  "Preencha a anamnese inicial com informações verídicas.",
                  "Informe lesões ou restrições antes de iniciar o treino.",
                  "Respeito, pontualidade e comprometimento são essenciais.",
                ],
              },
            ].map((g) => (
              <div key={g.title} className="p-7 rounded-xl bg-card border border-border">
                <h3 className="text-xl md:text-2xl font-bold mb-5">{g.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/regras"
              className="inline-flex items-center gap-2 border border-border px-7 py-4 rounded-md font-bold tracking-wide hover:border-brand-red hover:text-brand-red transition"
            >
              VER REGRAS COMPLETAS
            </a>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={muaythai} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-4">
            VAMOS COMEÇAR
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            Dê o primeiro passo<br />
            <span className="italic-accent">para sua mudança.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            VAMOS TREINAR JUNTOS!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.link/or6eyw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red text-primary-foreground px-8 py-4 rounded-md font-bold tracking-wide shadow-red hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" /> WHATSAPP
            </a>
            <a
              href="https://www.instagram.com/treinadorvictorbelichar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-md font-bold tracking-wide hover:border-brand-red hover:text-brand-red transition"
            >
              <Instagram className="w-5 h-5" /> INSTAGRAM
            </a>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex gap-3 p-5 rounded-lg bg-card border border-border">
              <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Atendimento</p>
                <p className="font-semibold">Academia Cagin Soberane · Manaus/AM</p>
                <p className="font-semibold">Compania Athelica Manauara Shopping · Manaus/AM</p>
              </div>
            </div>
            <div className="flex gap-3 p-5 rounded-lg bg-card border border-border">
              <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Registro</p>
                <p className="font-semibold">CREF 009161-G/AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <img src={logoVibe} alt="Victor Belichar Treinador" className="h-10 w-auto object-contain" />

          <p>© 2026 Team Vibe Training · Portfólio 2026</p>
          <p>CREF 009161-G/AM</p>
        </div>
      </footer>
    </main>
  );
}
