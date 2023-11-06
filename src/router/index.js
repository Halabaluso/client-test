import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import SingInView from '../views/SingInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singin',
      component: SingInView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
