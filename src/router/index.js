import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/home'
// import err404 from '@/views/errorPage/404'
// import SignUp from '@/views/sign/signUp'
// import SignIn from '@/views/sign/signIn'
// import Agree from '@/views/sign/agree'
// import Contact from '@/views/contact'
// import Comic from '@/views/comic'
// import ComicChapter from '@/views/comicChapter'
// import ComicReader from '@/views/comicReader'
// import Recharge from '@/views/recharge'

const err404 = () => import('@/views/errorPage/404')
const SignUp = () => import('@/views/sign/signUp.vue')
const SignIn = () => import('@/views/sign/signIn.vue')
const Agree = () => import('@/views/sign/agree')
const Contact = () => import('@/views/contact')
const Comic = () => import('@/views/comic')
const ComicChapter = () => import('@/views/comicChapter')
const ComicReader = () => import('@/views/comicReader')
const Recharge = () => import('@/views/recharge')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {path: '/', redirect: '/home'},
        {path: 'home', component: Home, name: 'Home', meta: {title: '主页', keepAlive: true}},
        {path: 'signin', component: SignIn, name: 'SignIn', meta: {title: '登录', keepAlive: true}},
        {path: 'signup', component: SignUp, name: 'SignUp', meta: {title: '注册', keepAlive: true}},
        {path: 'agree', component: Agree, name: 'Agree', meta: {title: '用户协议'}},
        {path: 'comic', component: Comic, name: 'Comic', meta: {title: '漫画', keepAlive: true}},
        {path: 'chapter/:cid', component: ComicChapter, name: 'Chapter', meta: {title: '漫画'}},
        {path: 'reader/:cid&:ccid', component: ComicReader, name: 'Reader', meta: {title: '漫画'}},
        {path: 'recharge', component: Recharge, name: 'Recharge', meta: {title: '充值', keepAlive: true}},
        {path: 'contact', component: Contact, name: 'Contact', meta: {title: '联系我们', keepAlive: true}},
        {path: '404', name: '404', component: err404},
        {path: '*', redirect: '/404'}
      ]
    },
    {path: '*', redirect: '/404'}
  ],
  scrollBehavior: () => ({ y: 0 })
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
