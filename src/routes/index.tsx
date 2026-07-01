import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  BedDouble,
  Rocket,
  ShieldCheck,
  Car,
  Bus,
  Luggage,
  MapPin,
  CalendarDays,
  Clock,
  Users,
  Star,
  Check,
  Sparkles,
  CreditCard,
  Wallet,
  Building2,
  Factory,
  ShoppingBag,
  Briefcase,
  Download,
} from "lucide-react";
import heroKennedy from "@/assets/hero-kennedy.jpg";
import orlandoImg from "@/assets/orlando.jpg";
import miamiImg from "@/assets/miami.jpg";
import flightImg from "@/assets/flight.jpg";
import drkLogo from "@/assets/drk-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Commerce Legacy · Orlando & Miami · DRK Viagens" },
      {
        name: "description",
        content:
          "Roteiro exclusivo Orlando e Miami para 10 empresários — E-Commerce Legacy. Voo direto Azul, hospedagem premium, NASA Cabo Canaveral e mobilidade privativa. Proposta DRK Viagens.",
      },
      { property: "og:title", content: "E-Commerce Legacy · Orlando & Miami · DRK Viagens" },
      {
        property: "og:description",
        content: "Proposta de roteiro sofisticado para Victor Barbieratto — DRK Viagens.",
      },
    ],
  }),
  component: Proposal,
});

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <span className="text-gradient text-sm font-semibold uppercase tracking-[0.25em]">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm font-medium">
      <Icon className="h-4 w-4 text-primary" />
      {text}
    </span>
  );
}

const included = [
  { icon: Plane, label: "Aéreo ida e volta", desc: "Voo direto Azul, Airbus A330" },
  { icon: Luggage, label: "Bagagens", desc: "2 bagagens de 23 kg por passageiro" },
  { icon: BedDouble, label: "Hospedagem", desc: "Orlando + Miami, hotéis selecionados" },
  { icon: Rocket, label: "NASA · Cabo Canaveral", desc: "Visita à base de lançamento, 09/set" },
  { icon: Car, label: "Van em Orlando", desc: "Ford Transit (15 lugares)" },
  { icon: Bus, label: "Transfer privativo", desc: "Franca ⇄ Aeroporto de Viracopos" },
  { icon: ShieldCheck, label: "Seguro viagem", desc: "Cobertura de USD 60.000 por passageiro" },
  { icon: Sparkles, label: "Curadoria DRK", desc: "Acompanhamento e suporte da imersão" },
];

const hotels = [
  {
    img: orlandoImg,
    city: "Orlando · Flórida",
    name: "Hotel Monreale Express & Studios IDrive District",
    stars: 3,
    dates: "06 a 10 de setembro · 4 noites",
    room: "Estúdio · 2 camas de casal · 5 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Estacionamento incluído", "Café da manhã disponível", "Recepção 24h"],
  },
  {
    img: miamiImg,
    city: "Miami · Flórida",
    name: "Hilton Garden Inn Miami Brickell South",
    stars: 3,
    dates: "10 a 14 de setembro · 4 noites",
    room: "Quarto · 2 camas Queen · 5 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Restaurante", "Academia", "Serviços de negócios"],
  },
  {
    img: orlandoImg,
    city: "Orlando · Flórida",
    name: "Hotel Monreale Express & Studios IDrive District",
    stars: 3,
    dates: "14 a 15 de setembro · 1 noite",
    room: "Estúdio · 2 camas de casal · 5 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Estacionamento incluído", "Café da manhã disponível"],
  },
];

const roteiro = [
  { date: "05/09", day: "Sábado", items: ["03:00 · Saída de Franca", "09:55 · Voo 8706 VCP › MCO"] },
  { date: "06/09", day: "Domingo", items: ["Visita a lojas do setor", "Estudo de benchmarking"] },
  { date: "07/09", day: "Segunda", items: ["Imersão no sistema contábil americano", "Estruturação financeira para negócios nos EUA"] },
  { date: "08/09", day: "Terça", items: ["Visita a operadores logísticos em Orlando", "Reunião executiva no backstage do Orlando Magic"] },
  { date: "09/09", day: "Quarta", items: ["Visita a fábricas da região", "NASA · Base de lançamento em Cabo Canaveral"] },
  { date: "10/09", day: "Quinta", items: ["Reunião no consulado brasileiro · Cônsul da Flórida", "Imersão no setor imobiliário americano", "Orlando › Miami"] },
  { date: "11/09", day: "Sexta", items: ["Visita ao FBA · Fulfillment by Amazon", "Centros de distribuição em Miami e Doral"] },
  { date: "12/09", day: "Sábado", items: ["Sawgrass Mills"] },
  { date: "13/09", day: "Domingo", items: ["Visita a lojas do setor", "Estudo de benchmarking"] },
  { date: "14/09", day: "Segunda", items: ["Centros de distribuição em Miami e Doral", "Visita ao escritório da Avenue · Miami", "Miami › Orlando"] },
  { date: "15/09", day: "Terça", items: ["20:00 · Voo 8707 MCO › VCP"] },
  { date: "16/09", day: "Quarta", items: ["11:00 · Chegada em Franca"] },
];

const nasaIncludes = [
  "Visita à base de lançamento de Cabo Canaveral",
  "Space Shuttle Atlantis® e Shuttle Launch Experience®",
  "Tour de ônibus pelo Centro Espacial",
  "Apollo/Saturn V Center",
  "Salão da Fama dos Astronautas dos EUA®",
  "Encontro com um astronauta",
  "Rocket Garden",
  "Journey to Mars e cinema IMAX®",
];

function Proposal() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <header className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <img
          src={heroKennedy}
          alt="Lançamento noturno na NASA · Cabo Canaveral"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <div className="animate-fade-up">
            <div className="mb-6 flex items-center gap-4">
              <img src={drkLogo.url} alt="DRK Viagens" width={120} height={108} className="h-16 w-auto" />
              <span className="h-px flex-1 max-w-24 bg-border" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Proposta exclusiva
              </span>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
              E-Commerce Legacy
              <span className="block text-gradient">Orlando &amp; Miami</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Uma experiência desenhada para 10 empresários — onde a fronteira da tecnologia
              encontra o alto padrão de viagem e negócios nos EUA.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill icon={Users} text="10 empresários + staff" />
              <Pill icon={CalendarDays} text="05 a 16 de setembro de 2026" />
              <Pill icon={MapPin} text="Cliente: Victor Barbieratto" />
            </div>
          </div>
        </div>
      </header>

      {/* INCLUSOS */}
      <Section eyebrow="O que está incluído" title={<>Tudo pensado nos <span className="text-gradient">detalhes</span></>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => (
            <Card key={item.label} className="transition-transform hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* AÉREO */}
      <Section id="aereo" eyebrow="Aéreo" title={<>Voo direto com a <span className="text-gradient">Azul</span></>}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Flight
              tag="Ida"
              date="Sábado, 05 de setembro"
              from={{ time: "09:55", code: "VCP", name: "Viracopos · Campinas" }}
              to={{ time: "18:00", code: "MCO", name: "Orlando Internacional" }}
              duration="9h05 de viagem"
              flight="Azul · AD 8706 · Airbus A330"
            />
            <Flight
              tag="Volta"
              date="Terça-feira, 15 de setembro"
              from={{ time: "20:00", code: "MCO", name: "Orlando Internacional" }}
              to={{ time: "06:00 +1", code: "VCP", name: "Viracopos · Campinas" }}
              duration="9h de viagem · durante a noite"
              flight="Azul · AD 8707 · Airbus A330-900neo"
            />
            <div className="flex flex-wrap gap-3">
              <Pill icon={Plane} text="Voo direto · Azul" />
              <Pill icon={Sparkles} text="Assentos fretados particulares" />
              <Pill icon={Luggage} text="2 bagagens de 23 kg por passageiro" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={flightImg}
              alt="Aeronave em voo"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ROTEIRO */}
      <Section id="roteiro" eyebrow="Roteiro" title={<>11 dias de <span className="text-gradient">imersão</span></>}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roteiro.map((d) => (
            <Card key={d.date} className="flex flex-col gap-2 transition-transform hover:-translate-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-gradient">{d.date}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{d.day}</span>
              </div>
              <ul className="mt-1 space-y-1.5">
                {d.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* HOSPEDAGEM */}
      <Section id="hospedagem" eyebrow="Hospedagem" title={<>Onde você vai se <span className="text-gradient">hospedar</span></>}>
        <div className="grid gap-6 md:grid-cols-3">
          {hotels.map((h, i) => (
            <Card key={i} className="flex flex-col overflow-hidden p-0">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-semibold">
                  {h.city}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex gap-0.5 text-gold">
                  {Array.from({ length: h.stars }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h3 className="text-lg font-bold leading-snug">{h.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-primary">
                  <CalendarDays className="h-4 w-4" /> {h.dates}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <BedDouble className="h-4 w-4" /> {h.room}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {h.perks.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* NASA */}
      <Section id="nasa" eyebrow="Experiência" title={<>NASA · Cabo <span className="text-gradient">Canaveral</span></>}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="flex flex-col justify-between">
            <div>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Base de Lançamento da NASA</h3>
              <p className="mt-2 text-muted-foreground">Kennedy Space Center · Cabo Canaveral, Flórida</p>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> 09 de setembro de 2026</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Visita completa · audioguia em português</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Grupo de 10 empresários</p>
              </div>
            </div>
          </Card>
          <Card>
            <h4 className="mb-4 text-lg font-bold">O que a visita inclui</h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {nasaIncludes.map((k) => (
                <li key={k} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{k}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* IMERSÃO EMPRESARIAL */}
      <Section id="imersa" eyebrow="Agenda de negócios" title={<>Visitas e <span className="text-gradient">imersões</span> exclusivas</>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Building2, label: "Consulado Brasileiro", desc: "Reunião com o Cônsul Brasileiro na Flórida · 10/set" },
            { icon: Factory, label: "Operadores Logísticos", desc: "Visita a operadores e fábricas da região de Orlando · 08–09/set" },
            { icon: Rocket, label: "FBA · Amazon", desc: "Fulfillment by Amazon + centros de distribuição em Miami e Doral · 11/set" },
            { icon: Briefcase, label: "Setor Imobiliário", desc: "Imersão no mercado imobiliário americano · 10/set" },
            { icon: ShoppingBag, label: "Benchmarking", desc: "Visita a lojas do setor + Sawgrass Mills · 06, 12 e 13/set" },
            { icon: Building2, label: "Avenue · Miami", desc: "Visita ao escritório da Avenue em Miami · 14/set" },
          ].map((item) => (
            <Card key={item.label} className="transition-transform hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* MOBILIDADE */}
      <Section id="mobilidade" eyebrow="Mobilidade" title={<>Transporte <span className="text-gradient">privativo</span> de ponta a ponta</>}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <Bus className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Transfer privativo</h3>
            <p className="mt-2 text-muted-foreground">
              Franca ⇄ Aeroporto de Viracopos (VCP) — saída 03h de 05/set, retorno 16/set.
            </p>
          </Card>
          <Card>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Van Privativa em Orlando</h3>
            <p className="mt-2 text-muted-foreground">
              Ford Transit Wagon ou similar · 15 lugares · uso exclusivo do grupo durante toda a imersão.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border border-border bg-secondary px-3 py-1">Retirada 06/set · MCO</span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1">Devolução 15/set · MCO</span>
            </div>
          </Card>
        </div>

        <Card className="mt-6 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Seguro Viagem</h3>
              <p className="text-muted-foreground">05 a 16 de setembro de 2026 · Cobertura total da viagem.</p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-3xl font-bold text-gradient">USD 60.000</p>
            <p className="text-sm text-muted-foreground">de cobertura por passageiro</p>
          </div>
        </Card>
      </Section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 max-w-2xl">
            <span className="text-gradient text-sm font-semibold uppercase tracking-[0.25em]">
              Investimento
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Valor por empresário</h2>
            <p className="mt-4 text-muted-foreground">
              Pacote completo para a imersão de 10 empresários. Valores por participante.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="relative overflow-hidden border-primary/40">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">No cartão de crédito</p>
              <p className="mt-3 text-5xl font-bold">
                12x <span className="text-gradient">R$ 1.258,43</span>
              </p>
              <p className="mt-2 text-muted-foreground">Parcelamento facilitado em até 12 vezes sem juros.</p>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Wallet className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">À vista no Pix</p>
              <p className="mt-3 text-5xl font-bold text-gradient">R$ 13.310,82</p>
              <p className="mt-2 text-muted-foreground">Melhor condição para pagamento à vista.</p>
            </Card>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            Valores por empresário, sujeitos a disponibilidade e variação cambial até a confirmação e
            pagamento das reservas. Taxas locais (resort fee, city tax, estacionamento, entre outras)
            podem ser cobradas no destino.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <div>
            <img src={drkLogo.url} alt="DRK Viagens" width={120} height={108} className="h-14 w-auto" />
            <p className="mt-2 text-sm text-muted-foreground">
              Viajar está nos detalhes · Proposta para Victor Barbieratto
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="text-sm text-muted-foreground md:text-right">
              <p>drkviagens@gmail.com</p>
              <p>+55 61 99506-1391</p>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Baixar proposta em PDF
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Flight({
  tag,
  date,
  from,
  to,
  duration,
  flight,
}: {
  tag: string;
  date: string;
  from: { time: string; code: string; name: string };
  to: { time: string; code: string; name: string };
  duration: string;
  flight?: string;
}) {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          {tag}
        </span>
        <div className="text-right">
          <span className="text-sm text-muted-foreground">{date}</span>
          {flight && <p className="text-xs text-muted-foreground/70">{flight}</p>}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-3xl font-bold">{from.time}</p>
          <p className="text-base font-semibold">{from.code}</p>
          <p className="text-sm text-muted-foreground">{from.name}</p>
        </div>
        <div className="flex flex-1 flex-col items-center text-muted-foreground">
          <Plane className="h-5 w-5 text-primary" />
          <span className="mt-2 h-px w-full bg-border" />
          <span className="mt-2 text-xs">{duration}</span>
        </div>
        <div className="flex-1 text-right">
          <p className="text-3xl font-bold">{to.time}</p>
          <p className="text-base font-semibold">{to.code}</p>
          <p className="text-sm text-muted-foreground">{to.name}</p>
        </div>
      </div>
    </Card>
  );
}
