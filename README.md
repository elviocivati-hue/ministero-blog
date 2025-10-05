pages/archive.js
export default function Archive() {
  const gesti = [
    { nome: "Elvio", anno: "2022", messaggio: "Ho fatto casino con dignità." },
    { nome: "Anonimo", anno: "2021", messaggio: "Ho aspettato senza agire." },
    { nome: "Civati", anno: "2020", messaggio: "Ho rifiutato una soluzione troppo semplice." },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Archivio Pubblico del Ministero</h1>
      <p>Ogni gesto è stato ricevuto e commemorato.</p>
      <ul>
        {gesti.map((g, i) => (
          <li key={i}>
            <strong>{g.nome}</strong> ({g.anno}): {g.messaggio}
          </li>
        ))}
      </ul>
    </main>
  );
}
Create archive.js
Fondazione dell’archivio pubblico del Ministero.
Ogni gesto ricevuto è visibile, commemorato, ritualizzato.
