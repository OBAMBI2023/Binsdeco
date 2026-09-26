import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import heroGala from "@/assets/hero-gala.jpg";
import wedding from "@/assets/wedding.jpg";
import table from "@/assets/table.jpg";
import corporate from "@/assets/corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bin's Deco Design & Event — Décoration événementielle prestige à Abidjan" },
      {
        name: "description",
        content:
          "Agence ivoirienne de décoration événementielle prestige : scénographie, architecture d'espace, dîners de gala, mariages et stands corporate. Abidjan, Yamoussoukro, International.",
      },
      { property: "og:title", content: "Bin's Deco Design & Event — L'art de sublimer vos événements" },
      {
        property: "og:description",
        content:
          "Décoration prestige, scénographie et design d'espace depuis Abidjan. 20 ans d'expérience au service des institutions, entreprises et grandes familles.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Agence", href: "#agence" },
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Fondatrice", href: "#fondatrice" },
  { label: "Références", href: "#references" },
  { label: "Contact", href: "#contact" },
];

const EXPERTISES = [
  { n: "01", t: "Décoration événementielle", d: "Conception et réalisation de décors haut de gamme, du concept à l'installation finale." },
  { n: "02", t: "Scénographie", d: "Mise en scène de l'espace, dramaturgie des volumes, des matières et de la lumière." },
  { n: "03", t: "Architecture d'espace", d: "Aménagement et circulation pensés pour l'émotion comme pour le protocole." },
  { n: "04", t: "Dîners de gala", d: "Cérémonies officielles, tables d'honneur et podiums pour 50 à 1 000 convives." },
  { n: "05", t: "Wedding planning", d: "Mariages prestige : direction artistique, décor, coordination du jour J." },
  { n: "06", t: "Stands & corporate", d: "Stands institutionnels, photocall et espaces de marque pour salons et forums." },
  { n: "07", t: "Nappage & centres de table", d: "Art de la table, textiles nobles et compositions florales sur mesure." },
  { n: "08", t: "Éclairage d'ambiance", d: "Éclairage architectural et scénique, signature lumineuse de chaque événement." },
  { n: "09", t: "Location de mobilier", d: "Parc de mobilier événementiel sélectionné, du classique au contemporain." },
];

const MOMENTS = [
  { t: "Écoute", d: "Nous comprenons l'intention, le protocole et l'émotion recherchée." },
  { t: "Conception", d: "Direction artistique, plans d'implantation et planches d'ambiance." },
  { t: "Production", d: "Fabrication, logistique et installation par nos équipes." },
  { t: "Événement", d: "Coordination sur site, ajustements et démontage discret." },
];

const REFERENCES = {
  "Institutionnel & corporate": [
    "Conseil Café-Cacao",
    "Africa CEO Forum — Abidjan",
    "Lancement du PND 2026–2030 — Sofitel Hôtel Ivoire",
    "50ᵉ anniversaire de l'ESCA — Abidjan",
    "FEMUA / INJS 2026 — Abidjan",
    "INCC — Journées Nationales du Cacao et du Chocolat — Yamoussoukro",
    "Fonds de Développement de la Formation Professionnelle (FDFP)",
    "Assemblée annuelle des comptables de l'OHADA — Abidjan",
  ],
  "Dîners de gala": [
    "Hôtel Président — dîner de gala, 500+ invités",
    "Versus Bank — Dîner de Gala — Abidjan",
  ],
  International: ["Salon du Chocolat et de la Pâtisserie — Paris, France — 2024"],
  "Mariages & privé": [
    "Wedding planning prestige — décoration et coordination",
    "Abidjan, Yamoussoukro et régions",
  ],
};

const FAQ = [
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Abidjan, Yamoussoukro et l'ensemble de la Côte d'Ivoire. L'agence intervient également à l'international, de Paris à Abidjan.",
  },
  {
    q: "Quels types d'événements prenez-vous en charge ?",
    a: "Dîners de gala, cérémonies officielles, séminaires et salons, stands institutionnels, mariages prestige et réceptions privées.",
  },
  {
    q: "Combien de temps à l'avance faut-il vous solliciter ?",
    a: "Idéalement 4 à 8 semaines pour un événement d'envergure. Nous traitons aussi des demandes plus urgentes selon nos disponibilités.",
  },
  {
    q: "Proposez-vous la location de mobilier et de lumières ?",
    a: "Oui. Mobilier événementiel, nappage, vaisselle, structures et éclairage haut de gamme font partie de notre parc.",
  },
  {
    q: "Comment se déroule un devis ?",
    a: "Un premier échange permet de cerner votre projet. Nous remettons ensuite une proposition artistique et un devis détaillé.",
  },
];

function Countup({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md py-4 border-b border-border" : "py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="leading-none">
          <span className="block font-display text-2xl tracking-wide">Bin's Deco</span>
          <span className="eyebrow text-[0.55rem]">Design &amp; Event</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold py-3">
            Demander un devis
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-ivory transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-500 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "mt-4 max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">
            Demander un devis
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroGala}
        alt="Salle de gala décorée par Bin's Deco à Abidjan"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ transform: `translateY(${-offset}px)` }}
      />
      <div className="veil absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-24 lg:px-12">
        <Reveal>
          <p className="eyebrow">L'art de sublimer vos événements</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-tight">
            Décoration <em className="text-gold not-italic">prestige</em>
            <br />
            &amp; scénographie
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Agence ivoirienne de décoration événementielle haut de gamme. Abidjan • Yamoussoukro •
            International.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Demander un devis
            </a>
            <a href="#realisations" className="btn-ghost">
              Découvrir nos réalisations
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">Défiler</span>
        <span className="h-12 w-px bg-gradient-to-b from-champagne to-transparent" />
      </div>
    </section>
  );
}

function Agence() {
  return (
    <section id="agence" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal className="order-2 lg:order-1">
          <img
            src={table}
            alt="Art de la table, nappage et centre de table signés Bin's Deco"
            loading="lazy"
            width={1280}
            height={1280}
            className="w-full object-cover"
            style={{ boxShadow: "var(--shadow-lift)" }}
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">01 — L'agence</p>
            <span className="rule-gold mt-6 block" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
              Des idées, des espaces,
              <br />
              <em className="text-gold not-italic">des émotions.</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Bin's Deco Design &amp; Event est une agence ivoirienne de décoration événementielle
              prestige, spécialisée dans l'architecture d'espace, la scénographie et le design
              d'événements haut de gamme. Depuis Abidjan, nous accompagnons institutions, entreprises
              et particuliers dans la conception d'espaces qui subliment chaque instant.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 font-display text-2xl italic text-champagne-soft">
              « Creating inspired by God »
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
              {[
                { v: 20, s: " ans", l: "d'expérience" },
                { v: 500, s: "+", l: "invités par gala" },
                { v: 3, s: "", l: "zones d'intervention" },
                { v: 12, s: "", l: "domaines d'expertise" },
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="font-display text-4xl text-gold lg:text-5xl">
                    <Countup value={stat.v} suffix={stat.s} />
                  </p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SavoirFaire() {
  return (
    <section id="savoir-faire" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
        <Reveal>
          <p className="eyebrow">02 — Savoir-faire</p>
          <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">Domaines d'expertise</h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISES.map((item, i) => (
            <Reveal
              key={item.n}
              delay={(i % 3) * 100}
              className="group bg-background p-9 transition-colors duration-700 hover:bg-card lg:p-11"
            >
              <span className="font-display text-sm text-champagne">{item.n}</span>
              <h3 className="mt-5 text-2xl transition-colors duration-500 group-hover:text-champagne-soft">
                {item.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-sm text-muted-foreground">
            Également : photocall, podiums et tables d'honneur, lumières haut de gamme, organisation
            complète de cérémonies officielles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section id="realisations" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <Reveal>
        <p className="eyebrow">03 — Réalisations</p>
        <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
          Une signature <em className="text-gold not-italic">cinématique</em>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        <Reveal className="group overflow-hidden lg:col-span-7">
          <div className="relative overflow-hidden">
            <img
              src={corporate}
              alt="Scénographie de scène et stand institutionnel"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 lg:h-[34rem]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-8">
              <p className="eyebrow">Institutionnel</p>
              <h3 className="mt-2 text-3xl">Scènes, stands &amp; photocall</h3>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="group overflow-hidden lg:col-span-5">
          <div className="relative overflow-hidden">
            <img
              src={wedding}
              alt="Décoration de mariage prestige"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 lg:h-[34rem]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-8">
              <p className="eyebrow">Mariages</p>
              <h3 className="mt-2 text-3xl">Wedding planning prestige</h3>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="group overflow-hidden lg:col-span-12">
          <div className="relative overflow-hidden">
            <img
              src={heroGala}
              alt="Dîner de gala décoré par Bin's Deco"
              loading="lazy"
              width={1920}
              height={1280}
              className="h-[24rem] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 lg:h-[32rem]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-8 lg:p-12">
              <p className="eyebrow">Dîners de gala</p>
              <h3 className="mt-2 text-3xl lg:text-4xl">Cérémonies officielles &amp; galas 500+</h3>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fondatrice() {
  return (
    <section id="fondatrice" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-40">
        <div>
          <Reveal>
            <p className="eyebrow">04 — Direction</p>
            <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">La fondatrice</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-10 font-display text-3xl text-champagne-soft">Mme Binta Kacou</p>
            <p className="eyebrow mt-3">Gérante • Fondatrice</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Fondatrice de Bin's Deco Design &amp; Event, Mme Binta Kacou totalise vingt années
              d'expérience dans la décoration événementielle et dînatoire. Sous sa direction, l'agence
              a accompagné institutions, entreprises et grandes familles dans la réalisation
              d'événements prestige, en Côte d'Ivoire comme à l'international.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <blockquote className="mt-10 border-l border-champagne pl-6 font-display text-xl italic leading-relaxed text-ivory">
              Deux décennies au service de l'art de sublimer les événements — des cérémonies
              officielles aux mariages les plus prestigieux.
            </blockquote>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">Notre méthode</p>
          </Reveal>
          <div className="mt-10 border-t border-border">
            {MOMENTS.map((m, i) => (
              <Reveal
                key={m.t}
                delay={i * 110}
                className="group flex gap-8 border-b border-border py-8 transition-colors duration-500 hover:bg-background/60"
              >
                <span className="font-display text-sm text-champagne">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl transition-colors duration-500 group-hover:text-champagne-soft">
                    {m.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="references" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <Reveal>
        <p className="eyebrow">05 — Ils nous ont fait confiance</p>
        <h2 className="mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">Références</h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
        {Object.entries(REFERENCES).map(([group, items], i) => (
          <Reveal key={group} delay={(i % 2) * 120}>
            <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-champagne">{group}</h3>
            <ul className="mt-6 space-y-4 border-t border-border pt-6">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-[0.95rem] leading-relaxed text-muted-foreground transition-colors duration-500 hover:text-ivory"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-[1000px] px-6 py-28 lg:py-36">
        <Reveal>
          <p className="eyebrow">06 — Questions fréquentes</p>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">Tout savoir</h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 80} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display text-xl lg:text-2xl">{item.q}</span>
                <span
                  className={`text-champagne transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open === i ? "max-h-56 pb-7 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src={corporate}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="veil absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-44">
        <Reveal>
          <p className="eyebrow">07 — Parlons de votre événement</p>
          <h2 className="mt-8 max-w-4xl text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98]">
            Sublimons votre <em className="text-gold not-italic">prochain</em> événement.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href="tel:+2250707399446" className="btn-gold">
              07 07 39 94 46
            </a>
            <a href="mailto:binsagency@yahoo.fr" className="btn-ghost">
              binsagency@yahoo.fr
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-20 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Siège social", v: ["Cocody Angré, 8ᵉ Tranche", "01 BP 13352 Abidjan 01", "Côte d'Ivoire"] },
              { t: "Téléphones", v: ["(+225) 22 00 11 74 / 75", "07 07 39 94 46"] },
              { t: "Zone d'intervention", v: ["Abidjan", "Yamoussoukro", "International"] },
              { t: "Identification", v: ["RCCM : RC-CI-ABJ-2006-A-3213"] },
            ].map((b) => (
              <div key={b.t}>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-champagne">{b.t}</p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {b.v.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="font-display text-2xl">Bin's Deco</p>
          <p className="eyebrow mt-1 text-[0.55rem]">Design &amp; Event</p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Décoration événementielle prestige • Architecture • Scénographie • Design d'espace
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xs text-muted-foreground lg:items-end">
          <p className="italic">Creating inspired by God</p>
          <p>© {new Date().getFullYear()} Bin's Deco Design &amp; Event. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Agence />
        <SavoirFaire />
        <Realisations />
        <Fondatrice />
        <References />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
