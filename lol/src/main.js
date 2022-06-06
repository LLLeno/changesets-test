import Vue from 'vue'
import App from './App.vue'
import PackageA from '@lyucan/package-a'

console.log(PackageA);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
