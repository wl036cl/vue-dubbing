/**
 * Author:ll36
 * Create Time:2018/04/19 19:25
 * Descripttion:
 */
import {signIn, signUp, signOut} from '@/api/user'

const PYX_ACCOUT_KEY = 'pyx_accout'
export default {
  state: {
    uid: '',
    token: '',
    phone: '',
    head: '',
    name: ''
  },
  mutations: {
    SET_USER_UID: (state, uid) => {
      state.uid = uid
    },
    SET_USER_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_PHONE: (state, phone) => {
      state.phone = phone
    },
    SET_USER_HEAD: (state, head) => {
      state.head = head
    },
    SET_USER_NAME: (state, name) => {
      state.name = name
    },
    SET_USER_INFO: (state, info) => {
      state.uid = info.uid
      state.token = info.token
      state.phone = info.phone
      state.head = info.head
      state.name = info.name
    },
    CLEAR_USER_INFO: (state) => {
      state.uid = ''
      state.token = ''
      state.phone = ''
      state.head = ''
      state.name = ''
    }
  },
  actions: {
    checkSignIn ({commit}) {
      let user = window.localStorage[PYX_ACCOUT_KEY]
      user = user && user.startsWith('{') ? JSON.parse(user) : null
      if (user && user.hasOwnProperty('uid') && user.hasOwnProperty('token') && user.hasOwnProperty('head') && user.hasOwnProperty('name')) {
        commit('SET_USER_INFO', user)
        return true
      }
      return false
    },
    signIn ({commit}, data) {
      return new Promise((resolve, reject) => {
        if (!data || !data.hasOwnProperty('phone') || !data.hasOwnProperty('psd')) {
          reject(new Error('请输入全部内容'))
        }
        signIn(data).then(res => {
          res = res.data
          if (res.code === 1) {
            let user = {uid: res.uid, token: res.token, phone: res.phone, head: res.head, name: res.name}
            if (user) {
              commit('SET_USER_INFO', user)
              window.localStorage[PYX_ACCOUT_KEY] = JSON.stringify(user)
              resolve(user)
            } else {
              reject(new Error('数据格式不正确'))
            }
          } else {
            reject(new Error(res.hasOwnProperty('msg') ? res.msg : res))
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    signUp ({commit}, data) {
      return new Promise((resolve, reject) => {
        if (!data || !data.hasOwnProperty('realName') || !data.hasOwnProperty('code') || !data.hasOwnProperty('phone') || !data.hasOwnProperty('psd') || !data.hasOwnProperty('nickName')) {
          reject(new Error('请输入全部内容'))
        }
        signUp(data).then(res => {
          res = res.data
          if (res.code === 1) {
            resolve(res)
          } else {
            reject(new Error(res.hasOwnProperty('msg') ? res.msg : res))
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    signOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        if (!state || !state.hasOwnProperty('uid') || !state.hasOwnProperty('token')) {
          reject(new Error('参数错误'))
        }
        signOut({uid: state.uid, token: state.token}).then(res => {
          // res = res.data
          // if (res.code === 1) {
          // resolve()
          // } else {
          //   reject(new Error(res.hasOwnProperty('msg') ? res.msg : res))
          // }
          window.localStorage.removeItem(PYX_ACCOUT_KEY)
          commit('CLEAR_USER_INFO')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
