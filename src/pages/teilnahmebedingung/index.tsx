
import Link from "next/link"

export default function index() {
  return (
    <main className="px-5 mt-10">
      <p className="mb-10">
        <b>
        Gewinnspiel Teilnahmebedingungen
        <br />
        Veranstalter der TEACHMEDEFI Gewinnspiele,
        <br />
        Av. Duque de Ávila 69, RC Direito, 1000-139 Lissabon, Portugal.
        </b>
      </p>

      <div className="mb-10" >
        <p className="mb-2"><b>1. TEILNAHMEBERECHTIGTE/ TEILNAHME</b></p>
        <p>
          Mit der Teilnahme an den Gewinnspielen erklärt sich der Teilnehmer mit den folgenden
          Teilnahmebedingungen einverstanden. Teilnahmeberechtigt sind ausschließlich natürliche
          Personen. Die Teilnahme ist nur innerhalb Deutschlands möglich. Teilnahmeberechtigt
          sind ausschließlich Personen, die das 18. Lebensjahr vollendet haben und auf Instagram
          registriert sind. An dem Gewinnspiel nimmt teil, wer unter dem Gewinnspiel-Post einen
          Kommentar zur Gewinnspielfrage einträgt und seine Daten wie in Abschnitt 2 beschrieben
          zur Verfügung stellt.
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b>2. GEWINNSPIELZEITRAUM UND ABLAUF DER GEWINNSPIELE UND ABLAUF DER GEWINNSPIELE</b></p>
        <p>
          Der Gewinnspielzeitraum wird unter dem jeweiligen Gewinnspiel-Posting unter dem jeweiligen
          Gewinnspiel-Posting auf der TEACHMEDEFI Instagram-Seite (@teachmedefi) definiert. Nach
          Beendigung der Gewinnspieldauer werden unter allen Teilnehmern die Gewinner durch Zufall
          ausgelost. Die Gewinner werden per eindeutig zugeordneten Kommentar auf der TEACHMEDEFI
          Instagram-Seite über ihren Gewinn informiert und gebeten, Kontakt mit TEACHMEDEFI via
          privater Instagram-Nachricht aufzunehmen. Die Gewinner müssen hierauf innerhalb von 48
          Stunden reagieren, indem sie TEACHMEDEFI ihre Kontaktdaten (Vor- und Nachnamen, Anschrift
          und E-Mail-Adresse, Wallet-Adresse) zwecks weitergehender Kommunikation per privater
          Instagram-Nachricht zur Verfügung stellenur Verfügung stellen. Reagiert ein Gewinner
          nicht innerhalb dieser 48 Stunden-Frist, verfällt der Gewinn. In diesem Fall ermittelt
          In diesem Fall ermittelt TEACHMEDEFI unter allen weiteren weiteren Teilnehmern einen
          neuen Gewinner.
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b> 3. GEWINNE</b></p>
        <p>
          Die Details zu den Gewinnen werden unter dem jeweiligen Gewinnspiel-Posting
          auf der TEACHMEDEFI Instagram-Seite beschrieben.
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b>4. VERSAND DER GEWINNE DER GEWINNE</b></p>
        <p>
          Wird der Gewinn als digitale Währung angeboten, erfolgt der Versand über die jeweilige
          Plattform. Die Lieferung physischer Gewinne erfolgt mittels DHL. Die Lieferung der
          Gewinne ist ausschließlich innerhalb Deutschlands möglich.  Die Lieferung physischer
          Gewinne erfolgt mittels DHL. Die Lieferung der Gewinne ist ausschließlich innerhalb
          Deutschlands möglich. Anfallende Versandgebühren werden von TEACHMEDEFI übernommen.
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b> 5. DATENSCHUTZ</b></p>
        <p>
          TEACHMEDEFI nutzt die im Rahmen des Gewinnspiels verarbeiteten personenbezogenen Daten
          ausschließlich zum Zweck der Durchführung und Abwicklung des Gewinnspiels. Eine
          weitergehende Nutzung der Daten durch TEACHMEDEFI oder Dritte findet nicht statt.
          Weitere Informationen zum Datenschutz finden Sie unter: {" "}
          <Link className="underline" href="/privacy">https://teachmedefi.de/privacy.</Link>
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b> 6. VORZEITIGE BEENDIGUNG DER GEWINNSPIELE</b></p>
        <p>
          TEACHMEDEFI behält sich das Recht vor, die Instagram-Gewinnspiele aufgrund unvorhergesehener
          Umstände zu jedem Zeitpunkt ohne Vorankündigung und ohne Angabe von Gründen abzubrechen oder
          und ohne Angabe von Gründen abzubrechen oder zu beenden. Dies gilt insbesondere, wenn
          Fehler der Soft- und/oder Hardware auftreten, und/oder sonstige technische und/oder
          rechtliche Gründe, die die reguläre und ordnungsgemäße Durchführung der Gewinnspiele
          beeinflussen bzw. unmöglich machen. Dies gilt insbesondere, wenn Fehler der Soft- und/oder
          Hardware auftreten, und/oder sonstige technische und/oder rechtliche Gründe, die die
          reguläre und ordnungsgemäße Durchführung der Gewinnspiele beeinflussen bzw. unmöglich machen.
        </p>
      </div>

      <div className="mb-10" >
        <p className="mb-2"><b> 7. SONSTIGES</b></p>
        <p>
          TEACHMEDEFI behält sich das Recht vor, die Teilnahmebedingungen jederzeit abzuändern.
          Sollten einzelne Bestimmungen dieser Teilnahmebedingungen ungültig sein oder werden,
          so bleibt die Gültigkeit der übrigen Bestandteile dieser Teilnahmebedingungen hiervon
          unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Für Datenverluste,
          insbesondere im Wege der Datenübertragung, und andere technische Defekte übernehmen
          TEACHMEDEFI und die beteiligten Partner keine Haftung. Eine Barauszahlung des Gewinns
          ist nicht möglich. Der Rechtsweg ist ausgeschlossen. Die Gewinnspiele stehen in keiner
          Verbindung zu Meta (Instagram, oder Facebook) und werden in keiner Weise von Instagram,
          oder Facebook gesponsert, unterstützt oder organisiert. Der Empfänger der von den Teilnehmern
          bereitgestellten Informationen ist nicht Instagram, oder Facebook sondern TEACHMEDEFI
          als Veranstalter.
        </p>
      </div>
      
    </main>
  )
}
