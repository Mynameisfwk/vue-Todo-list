import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import index from '@/pages/index'
import add from '@/pages/add'
import ceshi from '@/pages/ceshi'
import complete from '@/pages/complete'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/add',
      name:'add',
      component:add
    },
    {
      path:'/complete',
      name:'complete',
      component:complete
    }
  ]
})
