import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("@/views/overview/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router