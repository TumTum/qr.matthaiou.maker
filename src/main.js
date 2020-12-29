import Vue from 'vue'
import App from './App.vue'
import VuexStore from './VuexStore'
import VueLocalStorage from "@/VueLocalStorage";

Vue.config.productionTip = false

VueLocalStorage(Vue)

new Vue({
  render: h => h(App),
  store: VuexStore(Vue),
}).$mount('#app')
