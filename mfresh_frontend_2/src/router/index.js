import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import NewsDetails from '@/components/NewsDetails'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/index', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/news_details', component: NewsDetails },
    { path: '/product', component: HelloWorld },
    { path: '/product_details', component: HelloWorld },
    { path: '/contact', component: HelloWorld },
    { path: '/login', component: HelloWorld },
    { path: '/register', component: HelloWorld },
    { path: '/cart', component: HelloWorld }
  ]
})
