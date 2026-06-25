// Search results page – displays results for the given query.
// Route: /search?q=<query>

interface SearchPageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

async function fetchResults(query: string) {
  // TODO: wire up to real data source
  return [
    { id: 1, title: "Getting started with Next.js", snippet: "Learn the basics of the App Router..." },
    { id: 2, title: "Deploying to Vercel", snippet: "One-click deployments from your GitHub repo..." },
  ];
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: rawQ = "" } = await searchParams;
  const q = Array.isArray(rawQ) ? (rawQ[0] ?? "") : rawQ;
  const results = q ? await fetchResults(q) : [];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Search</h1>

      <form method="get" action="/search">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search…"
          style={{ padding: "0.5rem", width: "320px", marginRight: "0.5rem" }}
        />
        <button type="submit">Go</button>
      </form>

      {q && (
        <div style={{ marginTop: "1.5rem" }}>
          <p>
            Showing results for: <strong>{q}</strong>
          </p>

          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.id}>
                  <strong>{r.title}</strong>
                  <p>{r.snippet}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  );
}
