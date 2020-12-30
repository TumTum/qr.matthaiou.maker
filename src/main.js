import Vue from 'vue'
import App from './App.vue'
import VuexStore from '@/plugins/VuexStore'
import VueLocalStorage from "@/plugins/VueLocalStorage";
import Fontawesome from "@/plugins/Fontawesome";
import VueModel from "@/plugins/VueModel";

Vue.config.productionTip = false

VueLocalStorage(Vue)
Fontawesome(Vue)
VueModel(Vue)

new Vue({
  render: h => h(App),
  store: VuexStore(Vue),
}).$mount('#app')
