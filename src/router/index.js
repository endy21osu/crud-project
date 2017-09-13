import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: (route) => ({ title: 'Home' })
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
      props: (route) => ({ title: 'Blog' })
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create,
      props: (route) => ({ title: 'Create' })
    }
  ]
})
