import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>PR Review Sandbox</p>
        <h1>Small enough to review quickly, real enough to be useful.</h1>
        <p className={styles.summary}>
          This repository starts with a minimal Next.js App Router setup so you
          can open pull requests, leave review comments, and test automation
          against a working frontend project.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            className={styles.secondary}
            href="https://github.com/features/code-review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review Workflow
          </a>
        </div>
      </section>

      <section className={styles.panel}>
        <div>
          <p className={styles.label}>Included</p>
          <ul className={styles.list}>
            <li>Next.js 16 App Router scaffold</li>
            <li>TypeScript and ESLint configured</li>
            <li>Simple landing page for iterative changes</li>
            <li>PR template for repeatable review tests</li>
          </ul>
        </div>

        <div>
          <p className={styles.label}>Easy first PRs</p>
          <ol className={styles.list}>
            <li>Change the headline copy.</li>
            <li>Adjust spacing or colors in the module CSS.</li>
            <li>Add a new section or component under `src/app`.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
