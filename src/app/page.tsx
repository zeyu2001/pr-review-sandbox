import styles from "./page.module.css";

type HomeProps = {
  searchParams: Promise<{
    preview?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { preview } = await searchParams;
  const previewMarkup =
    preview ??
    "<p><strong>Tip:</strong> add <code>?preview=%3Ch2%3EHello%3C/h2%3E</code> to the URL to test the preview renderer.</p>";

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

      <section className={styles.previewCard}>
        <div>
          <p className={styles.label}>Template Preview</p>
          <h2 className={styles.previewTitle}>Render saved announcement markup</h2>
          <p className={styles.previewCopy}>
            Paste raw HTML into the <code>preview</code> query parameter to see
            how it will appear in the app before publishing it.
          </p>
        </div>

        <iframe
          title="Template preview"
          className={styles.previewFrame}
          sandbox=""
          srcDoc={previewMarkup}
        />
      </section>
    </main>
  );
}
