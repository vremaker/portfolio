import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

// Add more routes as needed

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fin-lit',
    name: 'Chime Financial Literacy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/fin-lit.vue')
  },
  {
    path: '/on-trak',
    name: 'onTrak',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/on-trak.vue')
  },
    {
    path: '/rules',
    name: 'Rules Optimizer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/rules-optimizer.vue')
  },
  
  {
    path: '/design-system',
    name: 'A Unified PPE Experience',
    component: () => import('../views/portfolio/design-system.vue')
  },
  {
    path: '/night-owl',
    name: 'Night Owl',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/night-owl.vue')
  },

    {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },


]

const router = createRouter({
  history: createWebHistory(), // standard HTML5 history mode
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      // Use a small delay to ensure the element exists
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
          resolve({ el: to.hash })
        }, 100) // 50-200ms delay usually works
      })
    }
    return { top: 0 }
  },
});

export default router;


