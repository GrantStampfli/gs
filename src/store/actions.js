export default {
  setUser (context, usr) {
    const user = {
      email: usr.email,
      photoURL: usr.photoURL,
      displayName: usr.displayName,
      phoneNumber: usr.phoneNumber,
      isAnonymous: usr.isAnonymous,
      providerData: usr.providerData,
      refreshToken: usr.refreshToken,
      emailVerified: usr.emailVerified
    }
    context.commit('setUser', user)
  },
  signOut (context) {
    context.commit('setUser', {})
  },
  setWindowSize (context, obj) {
    context.commit('setWindowSize', obj)
  }
}
