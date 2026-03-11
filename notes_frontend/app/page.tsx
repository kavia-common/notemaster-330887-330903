export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Notes Frontend</h1>
      <p>
        This is a minimal Next.js app added to ensure PreviewManager can start the frontend container.
      </p>
      <p>
        Backend base URL (from env): <code>{process.env.NEXT_PUBLIC_BACKEND_URL ?? "not-set"}</code>
      </p>
      <p>
        Health endpoint: <a href="/healthz">/healthz</a>
      </p>
    </main>
  );
}
