import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'assets/css/reset.css'
import 'assets/css/border.css'
import 'assets/iconfont/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
