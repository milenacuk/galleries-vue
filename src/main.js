import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store';
import swal from 'sweetalert';

Vue.config.productionTip = false
Vue.use(require('vue-moment'));


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
