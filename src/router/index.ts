import { createRouter, createWebHistory } from "vue-router";

import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Portfólio - Luan Coêlho",
    component: AboutView
  },

  {
    path: "/projects",
    name: "Projetos",
    component: () => import("../views/ProjectsView.vue")
  },
  {
    path: "/contact",
    name: "Contato",
    component: () => import("../views/ContactView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name ? to.name.toString() : "Portfólio - Luan Coêlho";
  next();
});

export default router;
