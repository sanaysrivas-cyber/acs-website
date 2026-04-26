import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import {
  motion,
  useScroll,
  useTransform,
} from "https://esm.sh/framer-motion@11.18.2?deps=react@18.3.1";

const FORM_URL = "https://forms.gle/FSNiVaaCAQFNVnAk9";
const CONTACT_EMAIL = "sanaysrivas@gmail.com";
const WHARTON_INFO_URL =
  "https://globalyouth.wharton.upenn.edu/competitions/investment-competition/";
const WHARTON_RULES_URL =
  "https://globalyouth.wharton.upenn.edu/competitions/investment-competition/rules-roles/";

const twentyFirstHero = {
  name: "3d-hero-section-boxes",
  source: "https://21st.dev/community/components/aghasisahakyan1/3d-hero-section-boxes",
  registry: "https://21st.dev/r/aghasisahakyan1/3d-hero-section-boxes",
  scene: "https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode",
};

const workCards = [
  {
    title: "Investment Simulations",
    kicker: "Portfolio lab",
    copy: "Run realistic portfolio decisions, rebalance under pressure, and learn how market catalysts change strategy.",
  },
  {
    title: "Market Strategy Sessions",
    kicker: "Weekly desk",
    copy: "Break down sectors, macro shifts, valuation signals, and investment theses in a focused team format.",
  },
  {
    title: "Wharton Competition Prep",
    kicker: "Competition edge",
    copy: "Practice the portfolio, pitch, teamwork, and client-focused thinking required for elite competition.",
  },
  {
    title: "Financial Literacy Workshops",
    kicker: "School impact",
    copy: "Translate investing, budgeting, risk, and markets into clear student resources and workshops.",
  },
  {
    title: "Multi-School Expansion",
    kicker: "Chapter model",
    copy: "Build repeatable systems for future chapters, student leaders, and school partnerships across Tampa.",
  },
];

const pillars = [
  "Portfolio strategy",
  "Market analysis",
  "Risk management",
  "Teamwork",
  "Client-focused investing",
];

function Logo({ compact = false }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Apex Capital Society home">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 shadow-gold">
        <svg viewBox="0 0 44 44" className="h-8 w-8" aria-hidden="true">
          <path
            d="M8 31L21.6 10.5L35.8 31H28.6L21.6 20.5L14.7 31H8Z"
            fill="url(#apexGold)"
          />
          <path d="M17.2 31L21.7 24.5L26.1 31H17.2Z" fill="#fff8df" opacity="0.82" />
          <defs>
            <linearGradient id="apexGold" x1="7" x2="37" y1="31" y2="11">
              <stop stopColor="#9f762b" />
              <stop offset="0.45" stopColor="#f2d57f" />
              <stop offset="1" stopColor="#b98a38" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-2xl font-bold tracking-[0.18em] text-white">
          ACS
        </span>
        {!compact && (
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold-soft/80">
            Apex Capital Society
          </span>
        )}
      </span>
    </a>
  );
}

function Nav() {
  const links = [
    ["Mission", "#mission"],
    ["Founders", "#founders"],
    ["What We Do", "#programs"],
    ["Competition", "#wharton"],
    ["Join", "#join"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/65 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-white/68 transition hover:text-gold-soft"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function FallbackApexVisual() {
  return (
    <div className="fallback-apex" aria-hidden="true">
      <div className="fallback-grid" />
      <div className="apex-ring apex-ring-one" />
      <div className="apex-ring apex-ring-two" />
      <div className="apex-core">
        <div className="core-face core-front">ACS</div>
        <div className="core-face core-back" />
        <div className="core-face core-right" />
        <div className="core-face core-left" />
        <div className="core-face core-top" />
        <div className="core-face core-bottom" />
      </div>
      <div className="market-beam beam-one" />
      <div className="market-beam beam-two" />
      <div className="market-beam beam-three" />
    </div>
  );
}

function TwentyFirstHeroVisual() {
  return (
    <motion.div
      className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-glass lg:min-h-[620px]"
      initial={{ opacity: 0, y: 36, rotateX: 7 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <FallbackApexVisual />
      <spline-viewer
        class="absolute inset-0 z-10 h-full w-full opacity-85 mix-blend-screen"
        loading-anim
        url={twentyFirstHero.scene}
      ></spline-viewer>
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_52%_36%,transparent_0%,rgba(5,7,13,0.18)_40%,rgba(5,7,13,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(5,7,13,0.78),transparent_34%,transparent_62%,rgba(5,7,13,0.55))]" />
    </motion.div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.45]);

  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:pt-40 lg:min-h-screen lg:px-8">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(216,180,91,0.16),transparent_28%),linear-gradient(135deg,#05070d_0%,#07111f_52%,#020308_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div style={{ y, opacity }} className="relative z-20">
          <motion.p
            className="mb-5 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.32em] text-gold-soft"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tampa-founded student investing society
          </motion.p>
          <motion.h1
            className="max-w-4xl font-display text-6xl font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Apex Capital Society
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            Building real financial skills through simulations, market analysis, and financial
            literacy initiatives starting in Tampa.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <a
              href="#join"
              className="group inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-obsidian shadow-gold transition hover:-translate-y-1 hover:bg-gold-soft"
            >
              Join the First Cohort
              <span className="ml-3 transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="#wharton"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/50 hover:text-gold-soft"
            >
              Competition Info
            </a>
          </motion.div>
        </motion.div>

        <TwentyFirstHeroVisual />
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 py-20 lg:px-8 ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold-soft">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-6xl">
            {title}
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function Mission() {
  return (
    <Section id="mission" eyebrow="Mission" title="Real investing skills, built early and seriously.">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-4xl text-xl leading-9 text-white/78">
          Apex Capital Society is a student-led investing group focused on building real
          financial skills through simulations, strategy sessions, and competition prep. ACS is
          also designed to expand financial literacy across schools, starting in Tampa.
        </p>
      </div>
    </Section>
  );
}

function Founders() {
  return (
    <Section id="founders" eyebrow="Founded by" title="Student leadership with an ambitious standard.">
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ["Sanay Srivastava", "Middleton High School Class of 2030"],
          ["Arrush Ahuja", "Middleton High School Class of 2028"],
        ].map(([name, detail], index) => (
          <motion.article
            key={name}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl"
            whileHover={{ y: -8, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/20" />
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-gold-soft">
              Founder 0{index + 1}
            </p>
            <h3 className="mt-6 font-display text-4xl font-bold text-white">{name}</h3>
            <p className="mt-4 text-lg text-white/68">{detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Programs() {
  return (
    <Section id="programs" eyebrow="What we do" title="A focused operating system for financial skill-building.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workCards.map((card) => (
          <motion.article
            key={card.title}
            className="group min-h-[260px] rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-glass backdrop-blur-2xl transition hover:border-gold/35"
            whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 190, damping: 18 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.24em] text-gold-soft">
                {card.kicker}
              </span>
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_24px_rgba(216,180,91,0.8)]" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white">{card.title}</h3>
            <p className="mt-4 leading-7 text-white/64">{card.copy}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function WhartonGoal() {
  return (
    <Section id="wharton" eyebrow="Competition" title="Wharton is the benchmark, not a claim.">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-4xl text-xl leading-9 text-white/76">
          ACS is building toward the Wharton Global High School Investment Competition by
          developing portfolio strategy, market analysis, risk management, teamwork, and
          client-focused investing skills. As of April 26, 2026, the official Wharton site says
          registration for the 2025-2026 competition is closed, so ACS should treat this as a
          preparation target and follow the official pages for future cycles.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-bold text-white/72"
            >
              {pillar}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHARTON_INFO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-gold/10 px-5 py-3 text-sm font-bold text-gold-soft transition hover:border-gold hover:bg-gold hover:text-obsidian"
          >
            Official Competition Page
          </a>
          <a
            href={WHARTON_RULES_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/80 transition hover:border-gold/40 hover:text-gold-soft"
          >
            Rules and Roles
          </a>
        </div>
      </div>
    </Section>
  );
}

function RegionalImpact() {
  return (
    <Section id="impact" eyebrow="Regional impact" title="Starting in Tampa, designed to scale.">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(216,180,91,0.13),rgba(255,255,255,0.04)_45%,rgba(7,17,31,0.88))] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <p className="text-xl leading-9 text-white/78">
            ACS aims to expand financial literacy across schools, starting in Tampa, through
            workshops, student resources, and future school chapters. The goal is not just to
            teach investing vocabulary, but to help students build confidence around money,
            markets, and long-term decision-making.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {["Workshops", "Student resources", "Future chapters"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-display text-2xl font-bold text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">Built for clarity, repeatability, and trust.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Join() {
  return (
    <Section id="join" eyebrow="Join ACS" title="Help shape the first cohort.">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-3xl text-xl leading-9 text-white/78">
          Interested in joining Apex Capital Society? Fill out the form below to be part of our
          first cohort.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-obsidian shadow-gold transition hover:-translate-y-1 hover:bg-gold-soft"
        >
          Open Interest Form
        </a>
        <p className="mt-5 text-sm leading-6 text-white/48">
          The form opens in a new tab.
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="For students, parents, advisors, and school leaders.">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-3xl text-xl leading-9 text-white/76">
          Questions about membership, partnerships, workshops, or ACS chapter planning? Reach
          out directly.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex text-2xl font-extrabold text-gold-soft underline decoration-gold/30 underline-offset-8 transition hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
        <Logo />
        <div className="text-sm leading-7 text-white/56 md:text-right">
          <p className="font-bold text-white">Apex Capital Society (ACS)</p>
          <p>Student-led financial literacy and investing initiative</p>
          <p>Starting in Tampa</p>
          <p>
            Contact:{" "}
            <a className="text-gold-soft hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-obsidian text-white">
      <Nav />
      <Hero />
      <main className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_50%_15%,rgba(216,180,91,0.08),transparent_28%),linear-gradient(#05070d,#07111f_44%,#05070d)]" />
        <Mission />
        <Founders />
        <Programs />
        <WhartonGoal />
        <RegionalImpact />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
