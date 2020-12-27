<template>
  <div id="app">
    <section id="header">
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
      <Formular v-on:printpage-top="calculateTop"/>
    </section>
    <section id="printPage" :style="{'margin-top': pageprint_top + 'px'}">
      <PrintPage/>
    </section>
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
      pageprint_top: '0'
    }
  },
  methods: {
    calculateTop() {
      this.pageprint_top = 25 + document.getElementById('header').offsetHeight;
    }
  },
  mounted() {
    this.calculateTop();
  }
}
</script>

<style>
  @import "../node_modules/bulma/css/bulma.min.css";

  @media print {
    .no-print, #header {
      display: none;
    }
    #printPage {
      margin-top: 0 !important;
    }
  }

  @media screen {
    #header {
      position: fixed;
      z-index: 20;
      top: 0;
      min-width: 100%;
    }
    #printPage {
      z-index: 10;
    }
  }
</style>
