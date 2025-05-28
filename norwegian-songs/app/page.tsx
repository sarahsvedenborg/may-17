import Link from "next/link";
import "./styles.css";

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="page-title">17.mai sanger</h1>
        {/*  <p className="header-subtitle">
          Norges stolte sanger for 17. mai og andre høytidelige anledninger
        </p> */}
      </header>

      <div className="song-grid">
        <Link href="/ja-vi-elsker" className="song-card">
          <div className="song-card-content">
            <h2 className="song-title">Ja, vi elsker</h2>
            <p className="song-subtitle">Norges nasjonalsang</p>
            {/*  <p className="song-description">
              Bjørnstjerne Bjørnsons udødelige hyllest til landet vårt, først
              sunget i 1864. En sang om frihet, historie og kjærlighet til
              fedrelandet.
            </p> */}
            <div className="song-link-text">Les hele sangen →</div>
          </div>
          <div className="song-card-flag"></div>
        </Link>

        <Link href="/norge-i-rodt" className="song-card">
          <div className="song-card-content">
            <h2 className="song-title">Norge i rødt, hvitt og blått</h2>
            <p className="song-subtitle">En patriotisk folkefavoritt</p>
            {/*  <p className="song-description">
              En vakker skildring av Norge gjennom fargene i flagget vårt. En
              moderne klassiker som feirer norsk natur, ungdom og frihet.
            </p> */}
            <div className="song-link-text">Les hele sangen →</div>
          </div>
          <div className="song-card-flag"></div>
        </Link>
      </div>
    </main>
  );
}
