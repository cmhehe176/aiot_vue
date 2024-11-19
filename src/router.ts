import { createRouter, createWebHistory } from 'vue-router'
import Preview from './views/preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
  ],
})

export default router
