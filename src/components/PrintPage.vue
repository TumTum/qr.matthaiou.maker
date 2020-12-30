<template>
  <div class="qr-page">

    <div class="qr-thema" v-for="qr_counts_id in $store.state.qr_counts" :key="qr_counts_id">

      <div class="pageTitle">{{ $store.state.qr_info[qr_counts_id - 1].title | defaultString(`Title des Abschnit (${qr_counts_id})`) }}</div>
      <div class="raster">
        <div v-for="n in $store.state.qr_itmes" :key="n">
          <div class="qr-code" >
            <div class="cavas" :data-id="n"><img :src="qrCodePNGData(qr_counts_id - 1)"/></div>
            <div class="legende">{{ $store.state.qr_info[qr_counts_id - 1].legende | defaultString('Siehe Video') }}</div>
          </div>
          <div class="space"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'Printpage',
  filters: {
    defaultString(value, string) {
      return value ? value : string;
    }
  },
  computed: {
    qrCodePNGData: ($self) => (index) => {
      let newUrl = $self.$store.state.qr_info[index].url,
          oldUrl = $self.$store.state.qr_info[index].qr.url
      ;

      if (newUrl !== oldUrl) {
        if (newUrl === '') {
          $self.$store.state.qr_info[index].qr.url = '';
          $self.$store.state.qr_info[index].qr.png = '';
        }
        if (newUrl) {
          QRCode.toDataURL(
              newUrl,
              {
                errorCorrectionLevel: 'M',
                type: 'image/png',
                margin: 2,
                color: {
                  dark: "#000",
                  light: "#fff0"
                }
              },
              (err, urlData) => {
                if (err) throw  err;
                $self.$store.state.qr_info[index].qr.url = newUrl;
                $self.$store.state.qr_info[index].qr.png = urlData;
              }
          );
        }
      }

      return $self.$store.state.qr_info[index].qr.png;
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

    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
  }

  .qr-thema {
    width: 100%;
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
