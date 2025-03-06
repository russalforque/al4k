import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import WorksPortfolio from '../components/WorksPortfolio.vue'
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hero
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksPortfolio
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  // Catch all route for 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/al4k/' : '/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Navigation guard to ensure scroll reset
router.beforeEach((_to, _from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
