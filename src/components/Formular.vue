<template>
  <div class="box formular no-print">

    <div class="field-body">
      <div class="field">
        <div>
          <div class="control">
            <input v-model="qr_url" placeholder="QR-Url"
                   type="text" class="input">
          </div>
        </div>
      </div>
      <div class="field">
        <div>
          <div class="control">
            <input v-model="page_title"
                   placeholder="Title der Seite"
                   type="text" class="input">
          </div>
        </div>
      </div>
      <div class="field">
        <div>
          <div class="control">
            <input v-model="qr_legende"
                   placeholder="QR-Code legende"
                   type="text" class="input">
          </div>
        </div>
      </div>
      <button class="button is-light" @click="printMe">Drucken</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Formualr',
  data() {
    return {
      qr_url: '',
      page_title: '',
      qr_legende: '',
    }
  },
  methods: {
    printMe() {
      window.print();
    }
  },
  watch: {
    qr_url(newValue) {
      this.$parent.qr_url = newValue
    },
    page_title(newValue) {
      this.$parent.page_title = newValue
    },
    qr_legende(newValue) {
      this.$parent.qr_legende = newValue
    }
  }

}
</script>

<style>
  @import '../../node_modules/vue-form-json/dist/vue-form-json.css';
</style>
