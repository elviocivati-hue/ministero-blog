export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ministero degli Atti Non Allineati</h1>
      <p>Segnala un gesto, un errore, un’indignazione. Ogni invio sarà commemorato.</p>
      <form method="POST" action="/api/submit">
        <input
          type="text"
          name="atto"
          placeholder="Descrivi il tuo gesto"
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <button type="submit">Invia</button>
      </form>
      <p><a href="/archive">Vai all’archivio pubblico</a></p>
    </main>
  );
}

