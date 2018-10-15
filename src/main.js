import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import router from "./router";
import VueCarousel from "vue-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
