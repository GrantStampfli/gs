import { app } from '@/firebase'
// import firebase from 'firebase'
import { store } from './index'
export default {
  init (state) {
    if (!state.ready) {
      state.ready = new Promise((resolve, reject) => {
        app.auth().onAuthStateChanged(user => {
          if (user) {
            store.dispatch('setUser', user)
          }
          resolve()
        })
      })
    }
  },
  setUser (state, user) {
    state.user = user
  },
  setWindowSize (state, obj) {
    state.windowSize = obj
  }
}
