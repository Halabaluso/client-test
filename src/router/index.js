import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ClientsView.vue'
import RegisterView from '../views/RegisterView.vue'
import SingInView from '../views/SingInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singin',
      component: SingInView,
      meta: {
        transitions: "slide-left"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/home/:id',
      name: 'home',
      component: HomeView,
      meta: {
        transitions: "slide-left"
      }
    },
  ]
})

export default router
