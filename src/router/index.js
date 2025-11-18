
import { createRouter, createWebHashHistory } from 'vue-router';
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
    path: '/me',
    name: 'Me',
    component: () => import('../views/About.vue')
  },
  {
    path: '/fin-lit',
    name: 'Chime Financial Literacy',
    component: () => import('../views/portfolio/fin-lit.vue')
  },
  {
    path: '/on-trak',
    name: 'onTrak',
    component: () => import('../views/portfolio/on-trak.vue')
  },
  {
    path: '/rules',
    name: 'Rules Optimizer',
    component: () => import('../views/portfolio/rules-optimizer.vue')
  },
  {
    path: '/design-system',
    name: 'A Unified PPE Experience',
    component: () => import('../views/portfolio/design-system.vue')
  },
  {
    path: '/night-owl',
    name: 'Night Owl',
    component: () => import('../views/portfolio/night-owl.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),   // FIXED → hash mode for GitHub Pages
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


// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';

// // Add more routes as needed

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/me',
//     name: 'Me',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/fin-lit',
//     name: 'Chime Financial Literacy',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/fin-lit.vue')
//   },
//   {
//     path: '/on-trak',
//     name: 'onTrak',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/on-trak.vue')
//   },
//     {
//     path: '/rules',
//     name: 'Rules Optimizer',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/rules-optimizer.vue')
//   },
  
//   {
//     path: '/design-system',
//     name: 'A Unified PPE Experience',
//     component: () => import('../views/portfolio/design-system.vue')
//   },
//   {
//     path: '/night-owl',
//     name: 'Night Owl',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/portfolio/night-owl.vue')
//   },

//     {
//     path: '/resume',
//     name: 'Resume',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
//   }


// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,

//   scrollBehavior(to, from, savedPosition) {
//     if (to.hash) {
//       // If the route has a hash (e.g., #section1), scroll to that element
//       return {
//         el: to.hash,
//         behavior: 'instant', // This provides the scrolling animation
//       };
//     } else if (savedPosition) {
//       // If navigating with browser back/forward buttons, restore saved position
//       return savedPosition;
//     } else {
//       // Otherwise, scroll to the top of the page (with smooth behavior if desired)
//       return {
//         top: 0,
//         behavior: 'instant', // Optional: smooth scroll to top
//       };
//     }
//   }
// });

// export default router;


