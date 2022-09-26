import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/icerik",
    name: "icerik",

    component: () => import("../views/İcerikView.vue"),
    
  },
  {
    path: "/iletisim",
    name: "iletisim",

    component: () => import("../views/İletisimView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('../views/User'),
    props:true,
},
  {
    
    path: "/icerik/:id",
    name: "icerikler",
    component: () => import("../components/icerikler/İceriklerComponent.vue")
  },

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
