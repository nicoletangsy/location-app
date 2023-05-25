import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueCompositionApi from "@vue/composition-api";
import vuetify from "./vuetify";
import "./assets/main.css";

Vue.use(PiniaVuePlugin);
Vue.use(VueCompositionApi);
new Vue({
  router,
  vuetify,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
