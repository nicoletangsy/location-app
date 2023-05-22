import Vue from "vue";
import VueRouter from "vue-router";
import MapView from "../views/MapView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "map",
      component: MapView,
    },
  ],
});

export default router;
