import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scroller from '@/components/Scroller/Scroller'
import Loading from '@/components/Loading/Loading'


import axios from 'axios'
Vue.prototype.axios = axios;
Vue.component('Scroller',Scroller);
Vue.component('Loading',Loading);

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/,arg)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
