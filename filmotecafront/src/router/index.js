import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import( '../views/LoginPage.vue')
  },
  {
    path: '/registrationPage',
    name: 'registrationPage',
    component: () => import('../views/RegistrationPage.vue'),

  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue')
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
    path: '/userAcount',
    name: 'userAcount',
    component: () => import('../views/UserAcount.vue')
  },
  {
    path: '/politicasPrivacidad',
    name: 'politicasPrivacidad',
    component: () => import('../views/PrivacyPolitics.vue')
  },
  {
    path: '/aboutFilmoteca',
    name: 'aboutFilmoteca',
    component: () => import('../views/AboutFilmoteca.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
