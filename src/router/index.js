import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Bonneteau from '../components/Bonneteau'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bonneteau',
      name: 'Bonneteau',
      component: Bonneteau
    }
  ]
})
