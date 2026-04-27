import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "https://esm.sh/framer-motion@11.18.2?deps=react@18.3.1";

const FORM_URL = "https://forms.gle/FSNiVaaCAQFNVnAk9";
const CONTACT_EMAIL = "sanaysrivas@gmail.com";
const WHARTON_INFO_URL =
  "https://globalyouth.wharton.upenn.edu/competitions/investment-competition/";

const navLinks = [
  ["Mission", "#mission"],
  ["Topics", "#topics"],
  ["Founders", "#founders"],
  ["What We Do", "#programs"],
  ["Competition", "#wharton"],
  ["Join", "#join"],
  ["Contact", "#contact"],
];

const workCards = [
  {
    title: "Investment Simulations",
    copy: "Make portfolio choices, track the results, and discuss what changed as markets moved.",
  },
  {
    title: "Market Strategy Sessions",
    copy: "Review companies, sectors, and economic events in a structured group setting.",
  },
  {
    title: "Competition Preparation",
    copy: "Practice research, teamwork, presentation, and long-term strategy for serious competitions.",
  },
  {
    title: "Financial Literacy Workshops",
    copy: "Create clear sessions and resources that make finance easier for students to understand.",
  },
  {
    title: "Multi-School Expansion",
    copy: "Build a careful model that future student leaders can bring to other schools.",
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
      <span className="acs-logo-mark relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-white/25 bg-white/[0.03] shadow-gold">
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

function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 180, damping: 28, mass: 0.35 });
  const y = useSpring(cursorY, { stiffness: 180, damping: 28, mass: 0.35 });
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;

    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-14 w-14 rounded-full border border-gold/28 bg-gold/10 shadow-[0_0_44px_rgba(216,180,91,0.24)] mix-blend-screen md:block"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.18 }}
        />
      )}
    </AnimatePresence>
  );
}

function FlowingNavLinks() {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <div
      className="hidden items-center gap-1 rounded-full border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(216,180,91,0.06))] p-1 md:flex"
      onMouseLeave={() => setActiveItem(null)}
    >
      {navLinks.map(([label, href]) => (
        <a
          key={label}
          href={href}
          onMouseEnter={() => setActiveItem(label)}
          className="relative rounded-full px-4 py-2 text-sm font-semibold text-white/68 transition hover:text-white"
        >
          {activeItem === label && (
            <motion.span
              layoutId="nav-flow"
              className="absolute inset-0 rounded-full border border-gold/25 bg-[linear-gradient(135deg,rgba(216,180,91,0.18),rgba(255,255,255,0.04))]"
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </a>
      ))}
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        Menu
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-obsidian/95 p-2 shadow-glass backdrop-blur-2xl"
          >
            {navLinks.map(([label, href], index) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-gold/10 hover:text-gold-soft"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.025 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Nav() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(5,7,13,0.84),rgba(7,17,31,0.74),rgba(5,7,13,0.84))] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <FlowingNavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
}

function LearningTopics() {
  const topics = [
    {
      title: "ETFs and index funds",
      copy: "How diversified funds work, why fees matter, and how students can compare broad market exposure.",
      stat: "Low-cost",
    },
    {
      title: "Mutual funds and other funds",
      copy: "The difference between active and passive funds, fund managers, expense ratios, and basic tradeoffs.",
      stat: "Compare",
    },
    {
      title: "401(k)s and retirement accounts",
      copy: "What employer plans are, why contributions matter, and how tax-advantaged accounts support long-term goals.",
      stat: "Future",
    },
    {
      title: "Long-term investing",
      copy: "Compounding, patience, risk, time horizons, and why investing is different from short-term trading.",
      stat: "Time",
    },
    {
      title: "Risk and diversification",
      copy: "How spreading investments can reduce single-company risk without removing risk completely.",
      stat: "Balance",
    },
    {
      title: "Markets and decision-making",
      copy: "How interest rates, earnings, news, and investor behavior can affect prices and portfolio decisions.",
      stat: "Context",
    },
  ];

  return (
    <section
      id="topics"
      className="graphic-section relative scroll-mt-28 overflow-hidden border-y border-white/10 bg-black/18 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
        >
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold-soft">
              What we can teach
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Practical finance topics students should understand early.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              ACS is not just about picking stocks. Members learn the building blocks behind
              real financial decisions: funds, retirement accounts, risk, compounding, and how to
              think for the long term.
            </p>
            <div className="topic-map mt-8">
              <div className="topic-map-center">
                <span>ACS</span>
                <small>Skill Map</small>
              </div>
              <span className="topic-node topic-node-one">ETFs</span>
              <span className="topic-node topic-node-two">401(k)s</span>
              <span className="topic-node topic-node-three">Funds</span>
              <span className="topic-node topic-node-four">Long term</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <motion.article
                key={topic.title}
                className="topic-card group min-h-[230px] rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl transition hover:border-gold/35"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold-soft">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-bold text-gold-soft">
                    {topic.stat}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight text-white">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{topic.copy}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.45]);

  return (
    <section id="top" className="relative isolate scroll-mt-28 overflow-hidden px-5 pb-28 pt-32 sm:pt-40 lg:min-h-screen lg:px-8">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="hero-gold-ribbon" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(216,180,91,0.16),transparent_28%),linear-gradient(135deg,#05070d_0%,#07111f_52%,#020308_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="mx-auto max-w-5xl">
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
            Learn how to think like an <span className="gold-gradient-text">investor.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base font-bold uppercase tracking-[0.18em] text-gold-soft"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Most students learn about investing. We practice it.
          </motion.p>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            Apex Capital Society is a student-led group focused on building real investing skill
            through practice, not just theory. Through simulations, market analysis, and
            structured sessions, members learn how money moves and how decisions are made in
            real-world finance. We are building a focused first cohort of students who are
            motivated, curious, and willing to put in the work.
          </motion.p>
          <motion.p
            className="mt-5 max-w-2xl text-sm font-semibold tracking-[0.08em] text-gold-soft/82 sm:text-base"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Preparing students for opportunities like the Wharton Global High School Investment
            Competition.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="gold-button group inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-obsidian shadow-gold transition hover:-translate-y-1"
            >
              Join Apex Capital Society
              <span className="ml-3 transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="#mission"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/50 hover:text-gold-soft"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative scroll-mt-28 px-5 py-24 lg:px-8 ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow-line text-xs font-extrabold uppercase tracking-[0.32em] text-gold-soft">{eyebrow}</p>
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
    <Section id="mission" eyebrow="Mission" title="Built for students who want to learn by doing.">
      <div className="premium-panel rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-4xl text-xl leading-9 text-white/78">
          Apex Capital Society exists to help students actually understand and apply investing
          concepts, not just learn definitions. We focus on building discipline, analytical
          thinking, and long-term decision-making through consistent practice and collaboration.
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
            className="premium-panel group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl"
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
    <Section id="programs" eyebrow="What we do" title="Simple structure, real practice.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workCards.map((card) => (
          <motion.article
            key={card.title}
            className="premium-panel group min-h-[260px] rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-glass backdrop-blur-2xl transition hover:border-gold/35"
            whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 190, damping: 18 }}
          >
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
      <div className="premium-panel rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <p className="max-w-4xl text-xl leading-9 text-white/76">
          We are building toward high-level competitions like the Wharton Global High School
          Investment Competition by developing real skills in portfolio strategy, analysis, and
          teamwork. The goal is to prepare early, improve consistently, and compete seriously.
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
        </div>
      </div>
    </Section>
  );
}

function RegionalImpact() {
  return (
    <Section id="impact" eyebrow="Regional impact" title="Starting in Tampa. Built to grow carefully.">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(216,180,91,0.13),rgba(255,255,255,0.04)_45%,rgba(7,17,31,0.88))] p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <p className="text-xl leading-9 text-white/78">
            Apex Capital Society aims to expand financial literacy across schools, starting in
            Tampa. Through workshops, student resources, and future chapters, the goal is to make
            financial knowledge more accessible and practical for students.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Workshops", "Small-group sessions that introduce practical finance ideas in a way students can follow."],
              ["Student resources", "Clear notes, examples, and tools that make independent learning easier."],
              ["Future chapters", "A path for other schools to build serious student-led groups with structure and consistency."],
            ].map(([item, description]) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-display text-2xl font-bold text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{description}</p>
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
          We are building a small group of students who are serious about learning and willing to
          put in the work. You don't need experience in finance, but you do need curiosity,
          consistency, and the drive to improve.
        </p>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-white/78">
          If you're interested in business, investing, or understanding how money actually works,
          this is a chance to start early and build something real.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="gold-button mt-9 inline-flex rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-obsidian shadow-gold transition hover:-translate-y-1"
        >
          Apply to Join Apex
        </a>
        <p className="mt-5 text-sm leading-6 text-white/48">
          Applications are reviewed on a rolling basis. Early applicants will help shape the
          direction of the group.
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
      <CursorGlow />
      <Nav />
      <Hero />
      <main className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_50%_15%,rgba(216,180,91,0.08),transparent_28%),linear-gradient(#05070d,#07111f_44%,#05070d)]" />
        <LearningTopics />
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
