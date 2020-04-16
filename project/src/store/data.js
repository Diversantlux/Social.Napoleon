import firebase from 'firebase/app'

export default {
  actions: {
    async profile({dispatch, commit}, {city, male, name, family}) {
      try {
        await firebase.data().currentUser(city, male, name, family)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/userInfo`).set({
          family,
          name,
          male,
          city 
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.data().currentUser
      return user ? user.uid : null
    }
  }
}
