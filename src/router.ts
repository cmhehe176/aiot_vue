import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Alert from '@/component/alert/Alert.vue'
import AppLayout from '@/layout/AppLayout.vue'
import ChartPage from './pages/ChartPage.vue'
import AlertPage from './pages/AlertPage.vue'
import ProjectManagement from './pages/ProjectManagement.vue'
import MyProject from './pages/MyProject.vue'
import SupportManagement from './pages/SupportManagement.vue'
import LoginPage from './pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      children: [
        {
          path: '/alert',
          name: 'alert',
          component: AlertPage,
        },
        {
          path: '/chart',
          name: 'chart',
          component: ChartPage,
        },
        {
          path: '/project-management',
          name: 'project',
          component: ProjectManagement,
        },
      ],
    },
    {
      path: '/my-project',
      name: 'myproject',
      component: MyProject,
    },
    {
      path: '/support-management',
      name: 'support',
      component: SupportManagement,
    },
  ],
})

export default router
