import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1c from '@/components/test1c'
import mintUi from '@/components/mintui'
import banner from '@/components/banner'
import Mall from '@/views/test1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/mall',
      name:'mall',
      component:Mall,
      children:[
        {
          path:'test1c',
          name:'Test1c',
          component:test1c
        }
      ]
    },
    {
      path:'/mintui',
      name:'mintui',
      component:mintUi
    },
    {
      path:'/banner',
      name:'banner',
      component:banner
    }
  ]
})
