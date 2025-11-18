import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/fin-lit',
    name: 'Chime Financial Literacy',
    component: () => import('@/views/portfolio/fin-lit.vue')
  },
  {
    path: '/on-trak',
    name: 'onTrak',
    component: () => import('@/views/portfolio/on-trak.vue')
  },
  {
    path: '/rules',
    name: 'Rules Optimizer',
    component: () => import('@/views/portfolio/rules-optimizer.vue')
  },
  {
    path: '/design-system',
    name: 'A Unified PPE Experience',
    component: () => import('@/views/portfolio/design-system.vue')
  },
  {
    path: '/night-owl',
    name: 'Night Owl',
    component: () => import('@/views/portfolio/night-owl.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Resume.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),  // GitHub Pages safe
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'instant'
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'instant' };
    }
  }
});

export default router;
