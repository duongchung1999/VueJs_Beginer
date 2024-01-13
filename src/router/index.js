import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product.list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/products/list.vue')
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import('../views/products/Form.vue')
  },
  {
    path: '/product/edit:id',
    name: 'product.edit',
    component: () => import('../views/products/Form.vue')
  },
  {
    path: '/user',
    name: 'user.list',
    component: () => import('../views/users/list.vue')
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: () => import('../views/users/Form.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
