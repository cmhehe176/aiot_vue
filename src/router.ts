import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Alert from '@/component/alert/Alert.vue'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert,
    },
  ],
})

export default router
