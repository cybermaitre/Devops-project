import styles from "./page.module.css";

export default function Home() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Next.js 14 App Router with React Server Components for blazing performance." },
    { icon: "🚀", title: "Auto Deploy", desc: "Every push to GitHub triggers an instant Vercel deployment automatically." },
    { icon: "🔒", title: "Type Safe", desc: "TypeScript and ESLint configured out of the box for solid, safe code." },
    { icon: "🌐", title: "Edge Network", desc: "Served from 100+ global locations — fast for every user, everywhere." },
    { icon: "🎨", title: "Fully Styled", desc: "CSS Modules with a clean design system. Easy to customise and extend." },
    { icon: "📦", title: "Zero Config", desc: "Deploy without touching a single config file. Vercel handles everything." },
  ];

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <span className={styles.logo}>◆ my-app</span>
        <div className={styles.navLinks}>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.navCta}>Deploy ↗</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          v2 — design update branch
        </div>
        <h1 className={styles.title}>
          Ship your idea<br />
          <span className={styles.titleAccent}>to the world.</span>
        </h1>
        <p className={styles.subtitle}>
          Next.js gives you the foundation. Vercel gives you the runway.
          Push code, go live — no DevOps needed.
        </p>
        <div className={styles.actions}>
          <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Get started free
          </a>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            Read the docs →
          </a>
        </div>
        <p className={styles.heroNote}>No credit card required · Deploys in under 60 seconds</p>
      </section>

      <section className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span className={styles.cardIcon}>{f.icon}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to deploy?</h2>
        <p className={styles.ctaDesc}>Connect your repo and go live in minutes.</p>
        <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          Deploy to Vercel ↗
        </a>
      </section>

      <footer className={styles.footer}>
        <span>Built with <span className={styles.heart}>♥</span> using Next.js</span>
        <span className={styles.footerDivider}>·</span>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Hosted on Vercel</a>
      </footer>
    </main>
  );
}
