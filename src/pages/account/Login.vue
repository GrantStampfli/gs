<template>
  <v-card flat>
    <v-card-text class="px-4 pm-0">
      <v-form v-model="valid">
        <v-text-field
          type="email"
          name="email"
          label="Email"
          prepend-icon="mail"
          place-holder="User Email"
          v-model="loginForm.email">
        </v-text-field>
        <v-text-field
          name="password"
          label="Password"
          prepend-icon="lock"
          place-holder="Password"
          v-model="loginForm.password"
          v-on:keyup.enter="attemptLogin()"
          :type="passwordHidden ? 'password' : 'text'"
          :append-icon="passwordHidden ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (passwordHidden = !passwordHidden)">
        </v-text-field>
        <v-layout>
          <v-flex xs6>
            <v-checkbox label="Remember Me?" v-model="loginForm.rememberMe" color="primary" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <forgot-password></forgot-password>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions class="pr-3">
      <v-spacer></v-spacer>
      <v-btn color="primary" v-on:click.native="attemptLogin()" :loading="loading">Sign In</v-btn>
    </v-card-actions>
    <v-card-text>
      <v-layout>
        <v-divider></v-divider>
        <v-subheader>Or Sign With</v-subheader>
        <v-divider></v-divider>
      </v-layout>
      <v-layout justify-center>
        <v-btn large icon v-on:click="googleLogin()" color="primary" dark>
            <v-icon>fa-google</v-icon>
          </v-btn>
          <v-btn large icon v-on:click="githubLogin()" color="primary" dark>
            <v-icon>fa-github</v-icon>
          </v-btn>
          <v-btn large icon v-on:click="twitterLogin()" color="primary" dark>
            <v-icon>fa-twitter</v-icon>
          </v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import { app } from '@/firebase'
import firebase from 'firebase'
import ForgotPassword from './components/ForgotPassword'

export default {
  name: 'Login',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.returnPage = from.name
    })
  },
  data () {
    return {
      valid: false,
      loading: false,
      passwordHidden: true,
      loginForm: {
        email: '',
        password: '',
        rememberMe: false
      },
      returnPage: null
    }
  },
  computed: {},
  methods: {
    attemptLogin () {
      const email = this.loginForm.email
      const pw = this.loginForm.password
      app.auth().signInWithEmailAndPassword(email, pw).then(res => {
        this.resolveLogin(res)
      }).catch(err => {
        console.log(err)
      })
    },
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()

      app.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        this.resolveLogin(res)
      })
    },
    githubLogin () {
      const provider = new firebase.auth.GithubAuthProvider()
      provider.setCustomParameters({
        'allow_signup': 'false'
      })
      app.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        this.resolveLogin(res)
        // // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const token = res.credential.accessToken
        // // The signed-in user info.
        // const user = res.user
        // ...
      }).catch(err => {
        console.log(err)
        // // Handle Errors here.
        // const errorCode = err.code
        // const errorMessage = err.message
        // // The email of the user's account used.
        // const email = err.email
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = err.credential
        // // ...
      })
    },
    twitterLogin () {
      const provider = new firebase.auth.TwitterAuthProvider()
      app.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        // // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // // You can use these server side with your app's credentials to access the Twitter API.
        // const token = res.credential.accessToken
        // const secret = res.credential.secret
        // // The signed-in user info.
        // const user = res.user
      }).catch(err => {
        console.log(err)
        // // Handle Errors here.
        // const errorCode = err.code
        // const errorMessage = err.message
        // // The email of the user's account used.
        // const email = err.email
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = err.credential
      })
    },
    resolveLogin (response) {
      this.$store.dispatch('setUser', response)
      this.$router.push({
        name: this.returnPage ? this.returnPage : 'home'
      })
    }
  },
  components: {
    'forgot-password': ForgotPassword
  },
  mounted () {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.resolveLogin(user)
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
</style>
