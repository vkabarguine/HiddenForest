type Summary = {
  studio: string;
  website: string;
  connected_accounts: number;
  imported_videos: number;
  pending_approvals: number;
  publishing_enabled: boolean;
};

type Videos = { items: { id: string; title: string; url: string }[]; source: string };

const apiBase = process.env.API_BASE_URL ?? "http://127.0.0.1:8000";

async function loadData(): Promise<{ summary: Summary; videos: Videos } | null> {
  try {
    const [summaryResponse, videosResponse] = await Promise.all([
      fetch(`${apiBase}/api/dashboard`, { cache: "no-store" }),
      fetch(`${apiBase}/api/videos`, { cache: "no-store" }),
    ]);
    if (!summaryResponse.ok || !videosResponse.ok) return null;
    return {
      summary: (await summaryResponse.json()) as Summary,
      videos: (await videosResponse.json()) as Videos,
    };
  } catch {
    return null;
  }
}

export default async function Home() {
  const data = await loadData();
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand"><span className="brandmark">HF</span><span>HIDDEN FOREST <small>STUDIO</small></span></div>
        <span className="tag">Development preview · No publishing</span>
      </header>
      <section className="hero">
        <p className="eyebrow">CONTENT WORKSPACE</p>
        <h1>Grow the studio,<br /><em>thoughtfully.</em></h1>
        <p>One place to organize Jane&apos;s content, prepare posts for review, and eventually understand what helps people discover Hidden Forest Studio.</p>
        <a href="https://hiddenforeststudio.com" target="_blank" rel="noreferrer">Visit studio website ↗</a>
      </section>
      {!data && <div className="notice" role="alert">API is not reachable. Start the backend on port 8000, then refresh this page.</div>}
      <section className="metrics" aria-label="Workspace metrics">
        <article><span>Connected accounts</span><strong>{data?.summary.connected_accounts ?? "—"}</strong><small>YouTube and Facebook</small></article>
        <article><span>Imported videos</span><strong>{data?.summary.imported_videos ?? "—"}</strong><small>Link-based library</small></article>
        <article><span>Awaiting approval</span><strong>{data?.summary.pending_approvals ?? "—"}</strong><small>Human review required</small></article>
      </section>
      <section className="panels">
        <article className="panel">
          <div className="panel-heading"><h2>Content library</h2><span>Coming next</span></div>
          {data?.videos.items.length ? (
            <ul>{data.videos.items.map((video) => <li key={video.id}><a href={video.url}>{video.title}</a></li>)}</ul>
          ) : <div className="empty"><span>▤</span><h3>No videos imported yet</h3><p>We&apos;ll connect YouTube and list existing videos here without copying the original media.</p></div>}
        </article>
        <article className="panel">
          <div className="panel-heading"><h2>Publishing controls</h2><span className="safe">Approval required</span></div>
          <div className="approval"><span className="check">✓</span><div><h3>Nothing publishes automatically</h3><p>Publishing is disabled in this scaffold. Every future post will require explicit approval.</p></div></div>
          <div className="next"><strong>Next milestone</strong><p>Connect YouTube, import links and metadata, and build the first content review screen.</p></div>
        </article>
      </section>
      <footer>Hidden Forest Studio · Internal workspace · Initial prototype</footer>
    </main>
  );
}
