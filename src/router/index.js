import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/metrics',
      name: 'metrics',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverviewView.vue')
    },
    {
      path: '/detailing',
      name: 'detailing',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/calls',
      name: 'calls',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/about_profiles',
      name: 'about_profiles',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/detailing_targets',
      name: 'detailing_targets',
      component: () => import('../views/PlaceholderView.vue')
    }
  ]
})

export default router
