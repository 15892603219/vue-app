import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/book",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  { 
    path: '/music', 
    name:"Music",
    component: () => import('../views/Music.vue') 
  },
  { 
    path: '/chat', 
    name:"Chat",
    component: () => import('../views/Chat.vue') 
  },
  { 
    path: '/tvDetail', 
    name:"tvDetail",
    component: () => import('../views/TvDetail.vue') 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
