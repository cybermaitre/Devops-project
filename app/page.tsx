import styles from "./page.module.css";

export default function Home() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Powered by Next.js 14 with the App Router and React Server Components." },
    { icon: "🚀", title: "Deploy Instantly", desc: "Push to GitHub and Vercel auto-deploys every commit in seconds." },
    { icon: "🔒", title: "Production Ready", desc: "TypeScript, ESLint, and best practices baked in from day one." },
    { icon: "🌐", title: "Global Edge", desc: "Vercel's edge network serves your app from 100+ locations worldwide." },
  ];

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <span className={styles.logo}>▲ my-app</span>
        <div className={styles.navLinks}>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.navCta}>Deploy</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.badge}>Next.js 14 + Vercel</div>
        <h1 className={styles.title}>
          Build fast.<br />
          <span className={styles.titleAccent}>Ship faster.</span>
        </h1>
        <p className={styles.subtitle}>
          Your Next.js app is ready. Push to GitHub,<br />
          connect to Vercel, and go live in minutes.
        </p>
        <div className={styles.actions}>
          <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Push to GitHub →
          </a>
          <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            Deploy to Vercel
          </a>
        </div>
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

      <footer className={styles.footer}>
        <p>Built with <span className={styles.heart}>♥</span> using Next.js — ready for Vercel</p>
      </footer>
    </main>
  );
}
