import { createWebHashHistory, createRouter } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/overview'
  },
  {
    name: 'overview',
    path: '/overview',
    component: () => import('@/views/overview/index.vue')
  },
  {
    name: 'tasker',
    path: '/tasker',
    component: () => import('@/views/tasker/index.vue')
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('@/views/settings/index.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/not-found/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router