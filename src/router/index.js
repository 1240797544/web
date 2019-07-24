import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import singer from '@/components/singer/singer'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend,
    },
    {
      path: '/rank',
      component: rank,
    },
    {
      path: '/singer',
      component: singer,
    },
  ]
})
