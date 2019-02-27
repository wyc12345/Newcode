import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component:() => import('@/views/movie/movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component:() => import('@/views/music/music.vue')
    },
    {
      path: '/book',
      name: 'book',
      component:() => import('@/views/book/book.vue')
    },
    {
      path: '/talk',
      name: 'talk',
      component:() => import('@/views/talk/talk.vue')
    }
    
  ]
})
