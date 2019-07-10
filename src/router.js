import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "productDetail" */ './views/ProductDetail.vue')
    }, {
      path: '*',
      name: 'notFound',
      component: () => import(
        /* webpackChunkName: "notFound" */
        './views/NotFound.vue')
    }
  ]
})
