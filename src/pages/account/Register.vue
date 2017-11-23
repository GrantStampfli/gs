<template>
  <v-card flat>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          name="name"
          prepend-icon="person"
          label="Display Name"
          place-holder="Display Name"
          v-model="registerForm.name">
        </v-text-field>
        <v-text-field
          type="email"
          name="email"
          prepend-icon="mail"
          label="Email Address"
          place-holder="Email Address"
          v-model="registerForm.email">
        </v-text-field>
        <v-text-field
          name="password"
          label="Password"
          prepend-icon="lock"
          place-holder="Password"
          v-model="registerForm.password"
          :type="registerForm.passwordHidden ? 'password' : 'text'"
          :append-icon="registerForm.passwordHidden ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (registerForm.passwordHidden = !registerForm.passwordHidden)">
        </v-text-field>
        <v-text-field
          name="password"
          prepend-icon="lock"
          label="Confirm Password"
          place-holder="Confirm Password"
          v-model="registerForm.confirmPassword"
          :type="registerForm.passwordConfirmHidden ? 'password' : 'text'"
          :append-icon="registerForm.passwordConfirmHidden ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (registerForm.passwordConfirmHidden = !registerForm.passwordConfirmHidden)">
        </v-text-field>
        <v-checkbox label="Sign up for Newsletter (comming soon)" v-model="registerForm.newsletter" color="primary"></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions class="pr-4">
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mb-3" large v-on:click.native="register()" :loading="loading">Sign In</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { app } from '@/firebase'
export default {
  name: 'Register',
  beforeRouteEnter (to, from, next) {
    next(vm => vm.resetForm)
  },
  data () {
    return {
      valid: false,
      loading: false,
      registerForm: {
        name: '',
        email: '',
        password: '',
        passwordHidden: true,
        confirmPassword: '',
        passwordConfirmHidden: true,
        newsletter: true
      }
    }
  },
  computed: {},
  methods: {
    register () {
      const form = this.registerForm
      console.log(app)
      console.log(form)
    },
    resetForm () {
      this.registerForm = {
        name: '',
        email: '',
        password: '',
        passwordHidden: true,
        confirmPassword: '',
        passwordConfirmHidden: true,
        newsletter: true
      }
    }
  },
  components: {}
}
</script>
<style lang="stylus" scoped>

</style>
