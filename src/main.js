import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes:routes,
  mode:'history'

})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
