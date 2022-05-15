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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/newcount',
    name: 'new-count',
    component: () => import( '../views/NewCount.vue')
  },
  {
    path: '/inicio',
    name: 'inicioPage',
    component: () => import( '../views/Inicio.vue')
  },
  {
    path: '/AddPelicula',
    name: 'addPelicula',
    component: () => import( '../views/AddPelicula.vue')
  },
  {
    path: '/UpdatePelicula',
    name: 'updatePelicula',
    component: () => import( '../views/UpdatePelicula.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
if ((to.path !== 'login') && localStorage.getItem('mail') === "") {
    next({ path: 'home' })
  }else{
    next()
  }
 
})


export default router
