<template>
  <v-card class="elevation-5 ma-5">
    <v-card-title class="display-1 grey--text text--darken-2 login-title">Login</v-card-title>
    <v-card-text class="login-form">
      <v-form v-model="valid">
        <v-text-field
          required
          name="email"
          v-model="user.email"
          label="Email Address"
          prepend-icon="account_circle">
        </v-text-field>
        <v-text-field
          required
          hide-details
          name="password"
          label="Password"
          prepend-icon="lock"
          v-model="user.password"
          :type="user.hidden ? 'password' : 'text'"
          :append-icon-cb="() => (user.hidden = !user.hidden)"
          :append-icon="user.hidden ? 'visibility_off' : 'visibility'">
        </v-text-field>
      </v-form>
      <v-btn block round color="primary" large v-on:click="loginUser()" class="mt-5">Login</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Login',
  props: {
    auth: Object
  },
  data () {
    return {
      valid: false,
      user: {
        email: '',
        password: '',
        hidden: true
      }
    }
  },
  computed: {},
  methods: {
    resetForm () {
      this.valid = false
      this.user = {
        email: '',
        password: '',
        hidden: true
      }
    },
    loginUser () {
      this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(response => {
        this.resetForm()
        this.$store.dispatch('setUser', response)
      }).catch(error => {
        // handle error
        console.log(error)
      })
    }
  },
  components: {}
}
</script>
<style lang="stylus">
</style>