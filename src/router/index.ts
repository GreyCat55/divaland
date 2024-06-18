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
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/signupsuccess',
      name: 'signupsuccess',
      component: () => import('../views/SuccessfulSignUpView.vue')
    },
    {
      path: '/signout',
      name: 'signout',
      component: () => import('../views/SignOutView.vue')
    },
    {
      path: '/shopworker',
      name: 'shopworker',
      component: () => import('../views/ShopWorkerView.vue')
    },
    {
      path: '/shopworker/upload',
      name: 'shopworkerupload',
      component: () => import('../views/ShopWorkerUploadView.vue')
    },
    {
      path: '/shopworker/edit',
      name: 'shopworkeredit',
      component: () => import('../views/ShopWorkerEditView.vue')
    }
  ]
})

export default router
