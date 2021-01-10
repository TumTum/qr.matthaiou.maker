<template>
  <div>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li><a @click.stop="showModal('tip')">Tip's</a></li>
        <li><a @click.stop="showModal('faq')">FAQ Technisch</a></li>
        <li><a @click.stop="showModal('datenschutz')">Datschschutz</a></li>
        <li><a @click.stop="showModal('impresum')">Impresum</a></li>
      </ul>
    </nav>

    <modal name="tip" :scrollable="true" :resizable="false" height="auto">
      <div class="section">
        <article class="message is-small">
          <div class="message-header">
            <p>Drucken von große QR-Code's</p>
          </div>
          <div class="message-body">
            Um so größer die QR gedruckt werden um so besser funktionieren die beim Scannen.
            Daher nach dem Drucken die QR testen. <br/>
            <p>Meisten berechnen die Browser im Druck-Dialog einen Rand.<br/>
              - Ränder sollte auf "Keine Ränder" eingestellt werden <br/>
              - Skalieren auf: "Standart"<br/>
              - und Schweiz/Weiß druck.<br/>
            </p>
            Diese Einstellungen führen zu einem gutem Ergebnis.
          </div>
        </article>

        <article class="message is-small">
          <div class="message-header">
            <p>Selbstklebendes A4 Papier </p>
          </div>
          <div class="message-body">
            Beim Kauf des <a href="https://www.amazon.de/s?k=selbstklebende+a4+papie">Selbstklebendes A4 Papier</a> sollte
            geachtet werden: <br>
            - das die bedruckbar sind. <br/>
            - das die keine Vorschnitte haben. Sondern in einem ganzes ist<br/>

            <br/>
            Nach dem Ausdrucken und trockenen lassen. Sanft mit einem Linal und Cutter-Messer zwischen den QR-Codes entlang
            fahren. Um nur die Klebende Papier Schicht zu trennen, jedoch nicht die darunter liegende Trägerfolie.
            So kann man leichter die QR abkleben.
          </div>
        </article>

        <article class="message is-small">
          <div class="message-header">
            <p>Alternative zum Selbstklebendes A4 Papier </p>
          </div>
          <div class="message-body">
            Auf normalen Papier ausdrucken. Ausschneiden und mit einem Kleber die QR schnipsel verkleben.
          </div>
        </article>
      </div>
    </modal>

    <modal name="faq" :scrollable="true" :resizable="false" height="auto">
      <div class="section">
        <article class="message is-small">
          <div class="message-header">
            <p>Wird die URL verändert im QR-Code?</p>
          </div>
          <div class="message-body">
            Nein. Die Url bleib unverändert so im QR-Code enthalten.
          </div>
        </article>
        <article class="message is-small">
          <div class="message-header">
            <p>Wird Statistik geführt?</p>
          </div>
          <div class="message-body">
            Nein. Gescante QR-Code werden nicht gezählt oder analysiert. Auch diese Seite erfast keine Statistik.
          </div>
        </article>
        <article class="message is-small">
          <div class="message-header">
            <p>Wo werden die Vorlagen gespeichert</p>
          </div>
          <div class="message-body">
            Genau in deinem, also in diesem Browser. Verwendet wird die Local Storage Technik (auch „Lokale Daten“ und
            „Lokaler Speicher“ genannt. Die Vorlagen bleiben auch nach dem Schließen des Browser-Fensters oder dem Beenden des Programms – soweit der Cache nicht gelöscht wird - erhalten.
          </div>
        </article>
        <article class="message is-small">
          <div class="message-header">
            <p>Wie sind die Spezifikation des QR-Url?</p>
          </div>
          <div class="message-body">
            Die Fehlerkorrektur-Ebene ist Medium. (Error resistance ~15%) Dadurch müssen die QR gut und sauber gedruckt
            werden. Der vorteil die Punkte bleiben groß und mehr Zeichen können verwendete werden, ca. 3391.
            <a href="https://github.com/soldair/node-qrcode#error-correction-level">Quelle</a>
          </div>
        </article>
        <article class="message is-small">
          <div class="message-header">
            <p>Kann ich diese Seite selber hosten?</p>
          </div>
          <div class="message-body">
            Ja. Der Quell-Code zu dieser Seite ist veröffentlicht auf <a href="https://github.com/TumTum/qr.matthaiou.maker">GitHub</a>
          </div>
        </article>
      </div>
    </modal>

    <modal name="datenschutz" :scrollable="true" :resizable="false" height="auto">
      <section class="section">
        <div class="container">

          <h2 class="title">Datenschutzerklärung</h2>

          <div class="container">
          <p><strong>Allgemeiner Hinweis und Pflichtinformationen</strong></p>
          <p><strong>Benennung der verantwortlichen Stelle</strong></p>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            <span id="s3-t-firma">{{env('VUE_APP_IMPRESSUM_FIRMA')}}</span><br>
            <span id="s3-t-ansprechpartner">{{env('VUE_APP_IMPRESSUM_NAME')}}</span><br>
            <span id="s3-t-strasse">{{env('VUE_APP_IMPRESSUM_STREETNAME')}}</span><br>
            <span id="s3-t-plz">{{env('VUE_APP_IMPRESSUM_ZIP_ORT')}}</span>
          </p>
          <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>
          </div>

          <div class="container mt-3">
          <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
          <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf
            Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung
            per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unberührt.</p>
          </div>

          <div class="container mt-3">
          <p><strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</strong></p>
          <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
            Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
            folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
          </p>
          </div>

          <div class="container mt-3">
          <p><strong>Recht auf Datenübertragbarkeit</strong></p>
          <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
            maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
          </div>

          <div class="container mt-3">
          <p><strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</strong></p>
          <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft
            über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich
            und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
            aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
          </div>

          <div class="container mt-3">
          <p><strong>SSL- bzw. TLS-Verschlüsselung</strong></p>
          <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
            Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
            über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an
            der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>
          </div>

          <div class="container mt-3">
          <p><strong>Server-Log-Dateien</strong></p>
          <p>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr
            Browser automatisch an uns übermittelt. Dies sind:</p>
          <ul>
            <li>Besuchte Seite auf unserer Domain</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>IP-Adresse</li>
          </ul>
          <p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
            Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
            Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
          </div>

          <div class="container mt-3">
          <p><strong>Cookies</strong></p>
          <p>Unsere Website verwendet keine Cookies.</p>
          </div>

          <div class="container mt-3">
          <p><strong>Local Storage Technik</strong></p>
          <p>Damit die Vorlagen gespeichert werden, verwenden wir Local Storage Technik (auch „Lokale Daten“ und
            „Lokaler Speicher“ genannt. Dabei werden Daten lokal im Cache Ihres Browsers gespeichert, die auch nach dem
            Schließen des Browser-Fensters oder dem Beenden des Programms – soweit sie den Cache nicht löschen -
            weiterhin bestehen und ausgelesen werden können.</p>

          </div>

          <p><small>Quelle: Datenschutz-Konfigurator von <a href="http://www.mein-datenschutzbeauftragter.de"
                                                            target="_blank">mein-datenschutzbeauftragter.de</a></small>
          </p>


        </div>
      </section>
    </modal>

    <modal name="impresum" :scrollable="true" :resizable="false" height="auto">
      <section class="section">
        <div class="container">

          <div class="container">
            <h2 class="title">Impressum</h2>
            <h2>Diensteanbieter</h2>
            <p>{{env('VUE_APP_IMPRESSUM_NAME')}}</p>
            <p>{{env('VUE_APP_IMPRESSUM_STREETNAME')}}</p>
            <p>{{env('VUE_APP_IMPRESSUM_ZIP_ORT')}}</p>
            <p>{{env('VUE_APP_IMPRESSUM_COUNTRY')}}</p>
          </div>

          <div class="container mt-3" :style="cssVars">
            <div class="is-bold">Kontaktmöglichkeiten</div>
            <p>E-Mail-Adresse: <span id="email">&#64;</span> </p>
          </div>

          <p class="container mt-6 is-small"><a href="https://datenschutz-generator.de/?l=de"
                                                title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                                                target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem
            Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>
        </div>
      </section>
    </modal>

  </div>

</template>
<script>
export default {
  name: 'Footer',

  computed: {
    cssVars() {
      const email_user_host = this.env('VUE_APP_IMPRESSUM_EMAIL').split('#')
      return {
        '--user': '"' + email_user_host[0] + '"',
        '--host': '"' + email_user_host[1] + '"',
      }
    }
  },
  methods: {
    env(key) {
      return process.env[key];
    },
    showModal(id) {
      this.$modal.show(id);
    },
  }
}
</script>

<style>

#email:before {
  content: var(--user);
}

#email:after {
  content: var(--host);
}

</style>
