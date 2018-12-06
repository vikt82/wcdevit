import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Components
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
