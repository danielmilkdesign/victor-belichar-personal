import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import logoVibe from "@/assets/logo-vibe-treinador.png";

export const Route = createFileRoute("/regras")({
  head: () => ({
    meta: [
      { title: "Regras de Atendimento — Victor Belichar Personal Trainer" },
      {
        name: "description",
        content:
          "Regras de atendimento presencial e online com Victor Belichar. Horários, faltas, reposições, pagamento e conduta. CREF 009161-G/AM.",
      },
      { property: "og:title", content: "Regras de Atendimento — Victor Belichar" },
      {
        property: "og:description",
        content:
          "Conheça as regras de atendimento para um treinamento técnico, ético e organizado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RegrasPage,
});

const groups: { title: string; items: string[] }[] = [
  {
    title: "Horários e Agendamento",
    items: [
      "Os valores referem-se à reserva do seu horário fixo na semana.",
      "A duração da aula é de até 1 hora.",
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
      "O pagamento deve ser feito até o dia 05 de cada mês ou dia combinado.",
      "O pacote de aulas do mês é sempre do dia 1 ao 30/31.",
      "O fechamento/pagamento do pacote de aulas se dá por reserva de horário na agenda. Ou seja, você não paga apenas pelo treino, e sim também pela reserva de horário exclusiva ou em dupla.",
      "Valores condição especial não têm exclusividade de horário, podendo ser adicionado 1 aluno do mesmo nível no mesmo horário.",
      "Aumento de 3% a 5% após 1 ano ou anualmente, sempre no mês 3 (março).",
      "Em caso de viagem do professor, o valor mensal sofre abatimento proporcional aos dias de ausência. Alunos com condição especial: não se aplica.",
      "Em caso de cancelamento do plano, deve ser comunicado previamente antes de iniciar o primeiro dia do mês seguinte; caso o cancelamento seja feito no mês seguinte, será cobrada uma taxa + dias proporcionais.",
    ],
  },
  {
    title: "Conduta e Saúde",
    items: [
      "É necessário preencher a anamnese inicial com informações verídicas.",
      "Informe lesões, restrições ou condições de saúde antes de iniciar o treino.",
      "Fotos de evolução podem ser solicitadas para acompanhamento dos resultados.",
      "Respeito mútuo, pontualidade e comprometimento são essenciais para a evolução.",
    ],
  },
];

function RegrasPage() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      <section className="relative px-6 pt-32 pb-16 md:pt-40 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-red transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>
        <p className="text-xs tracking-[0.4em] text-brand-red font-bold mb-3">
          ATENDIMENTO
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Regras de <span className="italic-accent">atendimento</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Para garantir um atendimento técnico, ético e organizado, o
          treinamento segue algumas regras. Em caso de dúvidas, fale comigo pelo
          WhatsApp.
        </p>
      </section>

      <section className="px-6 pb-24 md:pb-32 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="p-7 rounded-xl bg-card border border-border"
            >
              <h2 className="text-2xl font-bold mb-5">{g.title}</h2>
              <ul className="space-y-3 text-muted-foreground">
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

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://wa.link/or6eyw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-red text-primary-foreground px-7 py-4 rounded-md font-bold tracking-wide shadow-red hover:opacity-90 transition"
          >
            FALAR NO WHATSAPP
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-white text-white px-7 py-4 rounded-md font-bold tracking-wide hover:border-brand-red hover:text-brand-red transition"
          >
            VER PLANOS
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <img src={logoVibe} alt="Victor Belichar Treinador" className="h-10 w-auto object-contain" />
          <p>© 2026 Team Vibe Training</p>
          <p>CREF 009161-G/AM</p>
        </div>
      </footer>
    </main>
  );
}
