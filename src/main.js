import Vue from 'vue'
import App from './App.vue'
import VuexStore from './VuexStore'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: VuexStore.init(Vue),
}).$mount('#app')
