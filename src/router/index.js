import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../pages/CreateListView').then(m => m.default(id))
const Index = () => import('../pages/index.vue')
const Buttons = () => import('../pages/buttons.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      // {path: '/top/:page(\\d+)?', component: createListView('top')},
      {path: '/index', component: Index},
      {path: '/buttons', component: Buttons},
      {path: '/', redirect: '/index'}
    ]
  })
}
