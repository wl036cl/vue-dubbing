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

// 懒加载（集中打包到laze）
const err404 = resolve => require.ensure([], () => resolve(require('@/views/errorPage/404.vue')), 'lazy')
const SignUp = resolve => require.ensure([], () => resolve(require('@/views/sign/signUp.vue')), 'lazy')
const SignIn = resolve => require.ensure([], () => resolve(require('@/views/sign/signIn.vue')), 'lazy')
const Agree = resolve => require.ensure([], () => resolve(require('@/views/sign/agree')), 'lazy')
const Contact = resolve => require.ensure([], () => resolve(require('@/views/contact')), 'lazy')
const Comic = resolve => require.ensure([], () => resolve(require('@/views/comic')), 'lazy')
const ComicChapter = resolve => require.ensure([], () => resolve(require('@/views/comicChapter')), 'lazy')
const ComicReader = resolve => require.ensure([], () => resolve(require('@/views/comicReader')), 'lazy')
const Recharge = resolve => require.ensure([], () => resolve(require('@/views/recharge')), 'lazy')

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
        {path: '404', name: '404', component: err404, meta: {title: '页面不存在'}},
        {path: '*', redirect: '/404'}
      ]
    },
    {path: '*', redirect: '/404'}
  ],
  scrollBehavior: () => ({ y: 0 })
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '配音秀'
  next()
})
export default router
