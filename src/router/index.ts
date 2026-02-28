import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      meta: { requiresGuest: true },
      children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
})

export default router
