import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Collaborate from './views/collaborate'
import Cookies from './views/cookies'
import BlogGrid from './views/blog-grid'
import Privacy from './views/privacy'
import Contact from './views/contact'
import BlogDescription from './views/blog-description'
import About from './views/about'
import Terms from './views/terms'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Collaborate',
      path: '/collaborate',
      component: Collaborate,
    },
    {
      name: 'Cookies',
      path: '/cookies',
      component: Cookies,
    },
    {
      name: 'Blog-Grid',
      path: '/blog-grid',
      component: BlogGrid,
    },
    {
      name: 'Privacy',
      path: '/privacy',
      component: Privacy,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
    {
      name: 'Blog-Description',
      path: '/blog-description',
      component: BlogDescription,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'Terms',
      path: '/terms',
      component: Terms,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
