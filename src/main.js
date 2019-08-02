import Vue from 'vue'
import App from './App.vue'
import router from './router'

import LoadingPage from './components/loading-page/LoadingPage';

Vue.config.productionTip = false

Vue.component('loading-page', LoadingPage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
