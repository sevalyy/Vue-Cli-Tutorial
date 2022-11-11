import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CountriesView from "../views/CountriesView";
import CountryDetails from "../views/CountryDetails";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/countries",
    name: "countries",
    component: CountriesView,
  },
  {
    path: "/countries/:id",
    name: "countryDetails",
    component: CountryDetails,
    props: true,
  },
  {
    path: "/countries",
    name: "countries",
    component: CountriesView,
  },
  {
    path: "/country",
    redirect: "/countries",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
