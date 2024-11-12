import { createRouter, createWebHistory } from 'vue-router'
import LeafletMap from './component/leafletMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/map',
      name: 'map',
      component: LeafletMap,
    },
  ],
})

export default router
