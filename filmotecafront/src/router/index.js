import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/newcount',
    name: 'new-count',
    component: () => import('../views/NewCount.vue'),

  },
  {
    path: '/inicio',
    name: 'inicioPage',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/AddPelicula',
    name: 'addPelicula',
    component: () => import('../views/AddPelicula.vue')
  },
  {
    path: '/UpdatePelicula',
    name: 'updatePelicula',
    component: () => import('../views/UpdatePelicula.vue')
  },
  {
    path: '/CuentaUsuario',
    name: 'cuentaUsuario',
    component: () => import('../views/CuentaUsuario.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
