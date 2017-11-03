export default {
  setUser (context, obj) {
    context.commit('setUser', obj)
  },
  setWindowSize (context, obj) {
    context.commit('setWindowSize', obj)
  }
}
