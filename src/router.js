import Vue from 'vue'
import Router from 'vue-router'

// Page
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/404Component.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ],
  mode: 'history'
})
