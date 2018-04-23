/**
 * Author:ll36
 * Create Time:2018/04/17 19:38
 * Descripttion:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import app from './modules/app'
import user from './modules/user'
import comic from './modules/comic'
import comicChapter from './modules/comicChapter'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    user,
    comic,
    comicChapter
  },
  getters: {
    uid: state => state.user.uid,
    token: state => state.user.token,
    head: state => state.user.head,
    name: state => state.user.name,
    headerProgressType: state => state.app.hProgressType,
    headerProgressPercent: state => state.app.hProgressPercent
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
