import Vue from 'vue'
import VueRouter from 'vue-router'
import {authService} from '../services'
import store from '../store'

const routes = [
  {
    path: '/login',
    beforeEnter: (to, from, next) => {
      authService.logout()
      store.dispatch('auth/logout') // mutate the store--> hide navbar
      next()
    },
    component: () => import('pages/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: (to, from, next) => {

      authService.logout()
      store.dispatch('auth/logout') // mutate the store--> hide navbar
      next('/login')
    }
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/secured/Home.vue') },
      { path: '/home', redirect: '/' }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


//=================================================
Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as they are and change in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})


router.beforeEach((to, from, next) => {
  //if (from.path === to.path) return;
  
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const authorized = authService.isAuthorized()

  console.log({ fromPath: from.path ,toPath:to.path})
  console.log({ authRequired, authorized})

  if (authRequired && (!authorized)) 
    return next('/login')


  if ((!authRequired) && authorized)
    return next('/home')


  next();
})


export default router;
