import Vue from 'vue'
import App from './App.vue'

import TestUI from 'test-ui'

console.log(TestUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
