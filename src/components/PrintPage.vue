<template>
  <div class="qr-page">
    <div class="pageTitle">{{page_title}}</div>
    <div class="raster">

      <div v-for="n in 99" :key="n">
        <div class="qr-code" >
          <div class="cavas" :data-id="n"><img :src="qrCodePNGData"/></div>
          <div class="legende">{{qr_legende}}</div>
        </div>
        <div class="space"></div>
      </div>

    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  props: [
      'qr_url',
      'page_title',
      'qr_legende',
  ],
  data() {
    return {
      qrdata: '',
    }
  },
  computed: {
    qrCodePNGData($self) {
      if (this.qr_url) {
        QRCode.toDataURL(
            this.qr_url,
            {
              errorCorrectionLevel: 'L',
              type: 'image/png',
              margin: 2,
              color: {
                dark: "#000",
                light: "#fff0"
              }
            },
            (err, canvas) => {
              if (err) throw  err;
              $self.qrdata = canvas;
            }
        );
      }

      return this.qrdata;
    }
  }
}
</script>

<style scoped>
  .qr-page {
    width: 21cm;
    height: 29.6cm;
    padding: 5mm;
    background-color: #f5f5f5;
    margin: 0 auto;
  }
  .pageTitle {
    font-size: 11pt;
    border-bottom: 1px solid black;
    margin-bottom: 6px;
  }

  .raster {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  .qr-code {
    margin: auto;
    width: 20mm;
    height: 23.689mm;
    border: 2px solid gray;
    border-radius: 5px;
    margin-right: 1px;
    margin-bottom: 7px;
    position: relative;
  }

  .qr-code .cavas {
    min-width: 100%;
  }

  .qr-code .legende {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 6.98pt;
    bottom: 1mm;
  }

  @media print {
    .qr-page {
      background-color: white;
    }
  }
</style>
