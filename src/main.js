import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store';
import swal from 'sweetalert';
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
