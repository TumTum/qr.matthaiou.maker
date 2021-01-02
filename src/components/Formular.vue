<template>
  <div class="formular box no-print content">
    <div class="columns">
      <div class="column is-four-fifths">
        <div class="tabs">
          <ul>
            <li :class="{'is-active': $store.state.qr_counts === 1}"><a @click="oneQR">1x QR Thema</a></li>
            <li :class="{'is-active': $store.state.qr_counts === 2}"><a @click="twoQR">2x QR Themen</a></li>
            <li :class="{'is-active': $store.state.qr_counts === 3}"><a @click="treeQR">3x QR Themen</a></li>
            <li :class="{'is-active': $store.state.qr_counts === 4}"><a @click="fourQR">4x QR Themen</a></li>
            <li :class="{'is-active': $store.state.qr_counts === 8}"><a @click="eightQR">8x QR Themen</a></li>
          </ul>
        </div>
      </div>
      <div class="column is-flex">
        <Vorlage/>
        <div class="field" style="margin-left: 1em;">
          <div class="control">
            <a class="button is-light" @click="printMe">
              Drucken
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal" v-for="n in $store.state.qr_counts" :key="n">
      <div class="field-label is-normal qr-thema-label">
        <label class="label">{{ n }}</label>
      </div>
      <div class="field-body">
        <div class="field" :data-id="n">
          <div class="control">
            <input v-model="$store.state.qr_info[n-1].url" placeholder="QR-Url"
                   type="text" class="input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="$store.state.qr_info[n-1].title"
                   :placeholder="`Title des Abschnit (${n})`"
                   type="text" class="input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="$store.state.qr_info[n-1].legende"
                   placeholder="QR-Code legende"
                   type="text" class="input">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vorlage from './Vorlagen'

export default {
  name: 'Formular',
  components: {
      Vorlage
  },
  methods: {
    printMe() {
      window.print();
    },
    oneQR() {
      this.$store.commit('oneQR')
      this.$nextTick(() => this.$emit('printpage-top'))
    },
    twoQR() {
      this.$store.commit('twoQR')
      this.$nextTick(() => this.$emit('printpage-top'))
    },
    treeQR() {
      this.$store.commit('treeQR')
      this.$nextTick(() => this.$emit('printpage-top'))
    },
    fourQR() {
      this.$store.commit('fourQR')
      this.$nextTick(() => this.$emit('printpage-top'))
    },
    eightQR() {
      this.$store.commit('eightQR')
      this.$nextTick(() => this.$emit('printpage-top'))
    },
  },
}
</script>

<style>
.qr-thema-label {
  flex: none;
}
</style>
