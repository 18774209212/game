import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/Home'], resolve)
    },
    {
      path:'/home',
      name:'Home',
      component:resolve=>require(['@/pages/Home'],resolve)
    },
    {
      path:'/start',
      name:'Start',
      component:resolve=>require(['@/pages/Start'],resolve)
    },
    {
      path:'/play',
      name:'Play',
      component:resolve=>require(['@/pages/Play'],resolve)
    },
    {
      path:'/info',
      name:'Info',
      component:resolve=>require(['@/pages/Info'],resolve)
    },
    {
      path:'/end',
      name:'End',
      component:resolve=>require(['@/pages/End'],resolve)
    }
  ]
})
