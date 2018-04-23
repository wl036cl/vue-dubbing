/**
 * Author:ll36
 * Create Time:2018/04/18 11:43
 * Descripttion:
 */
import {getComicChapterList} from '@/api/comic'

export default {
  state: {
    list: [], //  {cid:1,page:1,comic:{},data:[]}  //  cid:漫画ID,page:章节页码，comic:漫画comic，data:章节列表
    finished: false,
    totalPage: 0
  },
  mutations: {
    SET_CHAPTER_FINISHED: (state, finished) => {
      state.finished = finished
    },
    SET_CHAPTER_TOTALPAGE: (state, totalPage) => {
      state.totalPage = totalPage
    },
    SET_CHAPTER_LIST: (state, list) => {
      if (list) {
        state.list.push(list)
      }
    }
  },
  actions: {
    getComicChapterList ({commit, state}, {cid, page}) { //  page:漫画章节所在页码
      try {
        return new Promise((resolve, reject) => {
          if (cid <= 0 || page < 0 || (state.totalPage > 0 && page > state.totalPage)) {
            reject(new Error('参数错误'))
          } else if (state.finished && page > state.totalPage) {
            reject(new Error('没有更多数据'))
          } else {
            let data = null
            if (state.list.length) {
              data = state.list.find((i) => {
                return i.page === page && i.cid === cid
              })
            }
            if (data) {
              resolve({comic: data.comic, data: data.data})
            } else {
              getComicChapterList({cid, page}).then((res) => {
                res = res.data
                if (res.code === 1) {
                  commit('SET_CHAPTER_FINISHED', res.finished) // 是否最后一页
                  commit('SET_CHAPTER_TOTALPAGE', res.totalPage) //  总页数
                  commit('SET_CHAPTER_LIST', {cid, page, comic: res.comic, data: res.data}) //  数据 //  {page:1,data:[]}
                  resolve({comic: res.comic, data: res.data})
                } else {
                  reject(new Error(res.hasOwnProperty('msg') ? res.msg : res))
                }
              }).catch(err => {
                console.log(err)
                reject(new Error('服务器返回错误！'))
              })
            }
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
