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
  Wifi,
  Coffee,
  Waves,
  CreditCard,
  Wallet,
} from "lucide-react";
import heroKennedy from "@/assets/hero-kennedy.jpg";
import orlandoImg from "@/assets/orlando.jpg";
import miamiImg from "@/assets/miami.jpg";
import flightImg from "@/assets/flight.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orlando & Miami · Imersão de Empresários · DRK Viagens" },
      {
        name: "description",
        content:
          "Roteiro exclusivo Orlando e Miami para 10 empresários — voo direto Azul, hospedagem premium, Centro Espacial Kennedy e mobilidade privativa. Proposta DRK Viagens.",
      },
      { property: "og:title", content: "Orlando & Miami · Imersão de Empresários" },
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

const included = [
  { icon: Plane, label: "Aéreo ida e volta", desc: "Voo direto Azul, assentos fretados particulares" },
  { icon: Luggage, label: "Bagagens", desc: "2 bagagens de 23 kg por passageiro" },
  { icon: BedDouble, label: "Hospedagem", desc: "Orlando + Miami, hotéis selecionados" },
  { icon: Rocket, label: "Centro Espacial Kennedy", desc: "Ingresso de 1 dia, experiência completa" },
  { icon: Car, label: "Van em Orlando", desc: "Ford Transit (15 lugares), 06–19 set" },
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
    dates: "06 a 13 de setembro · 7 diárias",
    room: "Estúdio · 2 camas de casal · 7 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Estacionamento incluído", "Recepção 24h"],
  },
  {
    img: miamiImg,
    city: "Miami · Flórida",
    name: "Hilton Garden Inn Miami Brickell South",
    stars: 3,
    dates: "13 a 16 de setembro · 3 diárias",
    room: "Quarto · 2 camas Queen · 7 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Restaurante", "Academia"],
  },
  {
    img: orlandoImg,
    city: "Orlando · Flórida",
    name: "Hotel Monreale Express & Studios IDrive District",
    stars: 3,
    dates: "16 a 19 de setembro · 3 diárias",
    room: "Estúdio · 2 camas de casal · 7 quartos",
    perks: ["Piscina", "Wi-Fi grátis", "Estacionamento incluído", "Café da manhã"],
  },
];

const kennedyIncludes = [
  "Gateway: The Deep Space Launch Complex® com Spaceport KSC®",
  "Space Shuttle Atlantis® e a Shuttle Launch Experience®",
  "Tour de ônibus pelo Centro Espacial, incluindo Apollo/Saturn V",
  "Salão da Fama dos Astronautas dos EUA®",
  "Encontro com um astronauta",
  "Visitas guiadas ao Rocket Garden",
  "Journey to Mars e filmes no cinema IMAX®",
  "Audioguia móvel · funcionamento das 9h às 17h",
];

function Proposal() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <img
          src={heroKennedy}
          alt="Lançamento noturno no Centro Espacial Kennedy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <div className="animate-fade-up">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-lg font-bold tracking-[0.35em] text-gradient">DRK VIAGENS</span>
              <span className="h-px flex-1 max-w-24 bg-border" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Proposta exclusiva
              </span>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
              Imersão de Empresários
              <span className="block text-gradient">Orlando &amp; Miami</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Uma experiência desenhada para 10 empresários — onde a fronteira da tecnologia
              encontra o alto padrão de viagem.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill icon={Users} text="10 empresários + staff" />
              <Pill icon={CalendarDays} text="05 a 20 de setembro de 2026" />
              <Pill icon={MapPin} text="Cliente: Victor Barbieratto" />
            </div>
          </div>
        </div>
      </header>

      {/* INCLUSO */}
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
            />
            <Flight
              tag="Volta"
              date="Sábado, 19 de setembro"
              from={{ time: "20:00", code: "MCO", name: "Orlando Internacional" }}
              to={{ time: "06:00 +1", code: "VCP", name: "Viracopos · Campinas" }}
              duration="9h de viagem · durante a noite"
            />
            <div className="flex flex-wrap gap-3">
              <Pill icon={Plane} text="Voo direto · Azul · Airbus A330-900neo" />
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

      {/* KENNEDY */}
      <Section id="kennedy" eyebrow="Experiência" title={<>Centro Espacial <span className="text-gradient">Kennedy</span></>}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="flex flex-col justify-between">
            <div>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Ingresso do Centro Espacial Kennedy</h3>
              <div className="mt-3 flex items-center gap-2 text-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-bold">9,2 / 10</span>
                <span className="text-sm text-muted-foreground">· 108 opiniões</span>
              </div>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> 15 de setembro de 2026</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Ingresso de 1 dia · audioguia em português</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Grupo de empresários</p>
              </div>
            </div>
          </Card>
          <Card>
            <h4 className="mb-4 text-lg font-bold">O que o ingresso inclui</h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {kennedyIncludes.map((k) => (
                <li key={k} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{k}</span>
                </li>
              ))}
            </ul>
          </Card>
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
              Franca ⇄ Aeroporto de Viracopos (VCP), ida e volta, com conforto e pontualidade para
              todo o grupo.
            </p>
          </Card>
          <Card>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Aluguel de Van em Orlando</h3>
            <p className="mt-2 text-muted-foreground">
              Ford Transit Wagon ou similar · 15 passageiros · câmbio automático · KM livre.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border border-border bg-secondary px-3 py-1">Retirada 06 set · MCO</span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1">Devolução 19 set · MCO</span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1">Motorista adicional grátis</span>
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
              <p className="text-muted-foreground">Tranquilidade do início ao fim da experiência.</p>
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
            <Card className="relative overflow-hidden border-primary/40" >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">No cartão de crédito</p>
              <p className="mt-3 text-5xl font-bold">
                12x <span className="text-gradient">R$ 1.507,60</span>
              </p>
              <p className="mt-2 text-muted-foreground">Parcelamento facilitado em até 12 vezes.</p>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Wallet className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">À vista no Pix</p>
              <p className="mt-3 text-5xl font-bold text-gradient">R$ 15.990,00</p>
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
            <p className="text-lg font-bold tracking-[0.35em] text-gradient">DRK VIAGENS</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Viajar está nos detalhes · Proposta para Victor Barbieratto
            </p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>drkviagens@gmail.com</p>
            <p>+55 61 99506-1391</p>
          </div>
        </div>
      </footer>
    </main>
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

function Flight({
  tag,
  date,
  from,
  to,
  duration,
}: {
  tag: string;
  date: string;
  from: { time: string; code: string; name: string };
  to: { time: string; code: string; name: string };
  duration: string;
}) {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          {tag}
        </span>
        <span className="text-sm text-muted-foreground">{date}</span>
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
