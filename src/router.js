import Vue from "vue";
import Router from "vue-router";
import Avaleht from "./views/Avaleht.vue";
import Sissejuhatus from "./views/Sissejuhatus.vue";
import Todo from "./views/Todo.vue";
import Mäng from "./views/Mäng.vue";
import Näited from "./views/Näited.vue";
import Tagasiside from "./views/Tagasiside.vue";
import Materjalid from "./views/Materjalid.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/avaleht",
      name: "Avaleht",
      component: () => import("./views/Avaleht.vue")
    },
    {
      path: "/sissejuhatus",
      name: "sissejuhatus",
      component: () => import("./views/Sissejuhatus.vue")
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Todo.vue")
    },
    {
      path: "/näited",
      name: "näited",
      component: () => import("./views/Näited.vue")
    },
    {
      path: "/materjalid",
      name: "materjalid",
      component: () => import("./views/Materjalid.vue")
    },
    {
      path: "/mäng",
      name: "mäng",
      component: () => import("./views/Mäng.vue")
    },
    {
      path: "/tagasiside",
      name: "tagasiside",
      component: () => import("./views/Tagasiside.vue")
    }
  ]
});
