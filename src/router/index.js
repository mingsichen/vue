import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie/movie'
import cinemaRouter from './cinema/cinema'
import mineRouter from './mine/mine'


Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    /* 重宝项路由 */
    {
      path: '/*',
      redirect:'/movie'
    }
  ]
})

export default router