import { createRouter, createWebHistory } from 'vue-router'
import Preview from './views/preview.vue'
import Alert from '@/component/alert/Alert.vue'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert,
      meta: { layout: AppLayout },
    },
  ],
})

export default router
