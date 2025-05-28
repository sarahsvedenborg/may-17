import "../styles.css";

export default function NorgeIRodt() {
  return (
    <main className="main-container">
      <h1 className="page-title">Norge i rødt, hvitt og blått</h1>

      <div className="attribution">
        <p>
          Tekst: Finn Bø, Bias Bernhoft og Arild Feldborg
          <br />
          Melodi: Lars-Erik Larsson
        </p>
      </div>

      <div className="lyrics">
        <p>
          Hvorhen du går i li og fjell,
          <br />
          en vinterdag, en sommerkveld
          <br />
          med fjord og fossevell,
          <br />
          fra eng og mo med furutrær
          <br />
          fra havets bryn med fiskevær
          <br />
          og til de hvite skjær,
        </p>

        <p>
          møter du landet i trefarvet drakt,
          <br />
          svøpt i et gjenskinn av flaggets farveprakt.
          <br />
          Se, en hvitstammet bjerk oppi heien,
          <br />
          rammer stripen med blåklokker inn
          <br />
          mot den rødmalte stuen ved veien,
          <br />
          det er Norge i rødt, hvitt og blått.
        </p>
      </div>

      <a href="/" className="back-button">
        Tilbake til forsiden
      </a>
    </main>
  );
}
