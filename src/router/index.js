import Home from '@/components/Home'
import Posts from '@/components/Posts'
import PostId from '@/components/PostId'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    },
    {
     path: '/PostId/:Pid',
     name: 'details',
     component: PostId
    }
  ]
})
