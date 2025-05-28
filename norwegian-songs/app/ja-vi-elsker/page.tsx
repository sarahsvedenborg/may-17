import "../styles.css";
import Link from "next/link";

export default function JaViElsker() {
  return (
    <main className="main-container">
      <h1 className="page-title">Ja, vi elsker</h1>

      <div className="attribution">
        <p>
          Tekst: Bjørnstjerne Bjørnson
          <br />
          Melodi: Rikard Nordraak
        </p>
      </div>

      <div className="lyrics">
        <p>
          <span style={{ fontWeight: "bold" }}>1.</span>
          <br />
          Ja vi elsker dette landet
          <br />
          Som det stiger frem.
          <br />
          Furet værbitt over vannet <br /> Med de tusen hjem <br /> Elsker
          elsker det og tenker <br /> På vår far og mor <br /> /: Og den
          saganatt som senker <br /> Drømmer på vår jord :/
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>2.</span>
          <br />
          Norske mann i hus og hytte <br /> Takk din store gud <br />
          Landet ville han beskytte
          <br /> Skjønt det mørkt så ut
          <br /> Alt hva fedrene har kjempet <br />
          Mødrene har grett
          <br />
          /: Har den herre stille lempet <br />
          Så vi vant vår rett :/
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>3.</span>
          <br />
          Ja vi elsker dette landet
          <br /> Som det stiger frem
          <br /> Furet værbitt over vannet
          <br /> Med de tusen hjem
          <br /> Og som fedres kamp har hevet
          <br /> Det av nød til seir
          <br />
          /: Også vi når det blir krevet
          <br /> For dets fred slår leir :/
        </p>
      </div>

      <div className="song-navigation">
        <Link href="/norge-i-rodt" className="next-song">
          Neste sang: Norge i rødt, hvitt og blått →
        </Link>
      </div>

      <a href="/" className="back-button">
        Tilbake til forsiden
      </a>
    </main>
  );
}
