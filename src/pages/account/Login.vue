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
    </v-card-text>
  </v-card>
</template>
<script>
import ForgotPassword from './components/ForgotPassword'

export default {
  name: 'Login',
  props: {},
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
          icon: 'google',
          fn: this.googleLogin
        },
        github: {
          name: 'Github',
          icon: 'github',
          fn: this.githubLogin
        },
        twitter: {
          name: 'Twitter',
          icon: 'twitter',
          fn: this.twitterLogin
        }
      }
    }
  },
  computed: {},
  methods: {
    attemptLogin () {
      const data = {
        email: this.loginForm.username,
        password: this.loginForm.password,
        rememberMe: this.loginForm.rememberMe
      }
      console.log(data)
    },
    googleLogin () {},
    githubLogin () {},
    twitterLogin () {},
  },
  components: {
    'forgot-password': ForgotPassword
  }
}
</script>
<style lang="stylus" scoped>

</style>
