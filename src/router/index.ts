import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/overview'
  },
  {
    name: 'overview',
    path: '/overview',
    component: () => import('@/views/overview/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router