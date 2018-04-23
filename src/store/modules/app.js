/**
 * Author:ll36
 * Create Time:2018/04/23 11:19
 * Descripttion:全局progressBar,顶部进度条，体现require进度
 */

export default {
  state: {
    hProgressType: 'info', // header,progressBar类型（info/success/error）
    hProgressPercent: 0 // header,progressBar百分比宽度
  },
  mutations: {
    SET_HEADER_PROGRESS: (state, progress) => {
      if (progress) {
        if (progress.hasOwnProperty('type')) {
          state.hProgressType = progress.type
        }
        if (progress.hasOwnProperty('percent')) {
          state.hProgressPercent = progress.percent
        }
      }
    }
  },
  actions: {
    setHeaderProgress ({commit}, progress) {
      commit('SET_HEADER_PROGRESS', progress)
    }
  }
}
