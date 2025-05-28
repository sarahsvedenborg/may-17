import Link from "next/link";
import "./styles.css";

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="page-title">17.mai sanger</h1>

      <div className="song-grid">
        <Link href="/ja-vi-elsker" className="song-card">
          <h2 className="song-title">Ja, vi elsker</h2>
          <p className="song-subtitle">Norges nasjonalsang</p>
          <div className="song-link-text">Trykk for full tekst →</div>
        </Link>

        <Link href="/norge-i-rodt" className="song-card">
          <h2 className="song-title">Norge i rødt, hvitt og blått</h2>
          <p className="song-subtitle">Patriotisk sang</p>
          <div className="song-link-text">Trykk for full tekst →</div>
        </Link>
      </div>
    </main>
  );
}
