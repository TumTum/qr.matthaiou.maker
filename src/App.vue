<template>
  <div id="app">
    <section class="hero is-dark no-print">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            QR's auf A4
          </h1>
          <h2 class="subtitle">
            Mit dieser Druckseite können QR Codes auf einen A4 plaziert werden.
            Dieses wird auf ein
            <a href="https://www.amazon.de/s?k=selbstklebende+a4+papie">selbstklebendes A4 Papier</a>
            gedruckt und ausgeschnitten.
          </h2>
        </div>
      </div>
    </section>
    <Formular/>
    <PrintPage :qr_url="qr_url" :page_title="page_title" :qr_legende="qr_legende"/>
  </div>
</template>

<script>
import Formular from './components/Formular.vue'
import PrintPage from './components/PrintPage.vue'

export default {
  name: 'App',
  components: {
    Formular,
    PrintPage
  },
  data() {
    return {
      qr_url: '',
      page_title: 'Title der Seite',
      qr_legende: 'siehe video',
    }
  },
}
</script>

<style>
  @import "../node_modules/bulma/css/bulma.min.css";
  @media print {
    .no-print { display: none; }
  }
</style>
