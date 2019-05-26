import Vue from "vue";
import Router from "vue-router";
import Countries from "./views/Countries.vue";
import CountryDisplay from "./views/CountryDisplay.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/country/:name",
      component: CountryDisplay,
    },
    {
      path: "/visited",
      name: "visited",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "visited" */ "./views/Visited.vue"),
    },
    {
      path: "/wantToVisit",
      name: "wantToVisit",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "wantToVisit" */ "./views/WantToVisit.vue"),
    },
  ],
});
