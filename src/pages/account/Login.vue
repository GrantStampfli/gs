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
        <template v-for="(val, key, index) in oauth">
          <v-btn large icon v-on:click="[val.fn]" color="primary" :key="val.key" dark>
            <v-icon>{{val.icon}}</v-icon>
          </v-btn>
        </template>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import { app } from '@/firebase'
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
      oauth: {
        google: {
          name: 'Google',
          icon: 'fa-google',
          fn: this.googleLogin
        },
        github: {
          name: 'Github',
          icon: 'fa-github',
          fn: this.githubLogin
        },
        twitter: {
          name: 'Twitter',
          icon: 'fa-twitter',
          fn: this.twitterLogin
        }
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
        this.$store.dispatch('setUser', res)
        this.$router.push({
          name: this.returnPage ? this.returnPage : 'home'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    googleLogin () {},
    githubLogin () {},
    twitterLogin () {}
  },
  components: {
    'forgot-password': ForgotPassword
  }
}
</script>
<style lang="stylus" scoped>
</style>
