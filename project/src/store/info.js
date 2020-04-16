import firebase from 'firebase/app'

export default {
  state: {
    info: {},
    userInfo: {}
  },
  mutations: {
    setInfo(state, info, userInfo) {
      state.info = info,
      state.userInfo = userInfo
    },
    clearInfo(state) {
      state.info = {},
      state.userInfo = {}
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        const userInfo = (await firebase.database().ref(`/user/${uid}/infoUser`).once('value')).val()
        commit('setInfo', info)
        commit('setInfo', userInfo)
      } catch (e) {''}
    }
  },
  getters: {
    info: s => s.info,
    userInfo: s => s.userInfo
  }
}
