<template>
  <v-card flat>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          required
          name="name"
          prepend-icon="person"
          label="Full Name"
          place-holder="Full Name"
          :rules="nameRules"
          v-model="registerForm.name">
        </v-text-field>
        <v-text-field
          required
          type="email"
          name="email"
          :rules="emailRules"
          prepend-icon="mail"
          label="Email Address"
          place-holder="Email Address"
          v-model="registerForm.email">
        </v-text-field>
        <v-text-field
          required
          name="password"
          label="Password"
          prepend-icon="lock"
          :rules="passwordRules"
          place-holder="Password"
          v-model="registerForm.password"
          :type="registerForm.passwordHidden ? 'password' : 'text'"
          :append-icon="registerForm.passwordHidden ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (registerForm.passwordHidden = !registerForm.passwordHidden)">
        </v-text-field>
        <v-text-field
          required
          name="password"
          prepend-icon="lock"
          :rules="passwordRules"
          label="Confirm Password"
          place-holder="Confirm Password"
          v-model="registerForm.confirmPassword"
          :type="registerForm.passwordConfirmHidden ? 'password' : 'text'"
          :append-icon="registerForm.passwordConfirmHidden ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (registerForm.passwordConfirmHidden = !registerForm.passwordConfirmHidden)">
        </v-text-field>
        <v-checkbox
          color="primary"        
          label="Do you agree with terms or service"
          v-model="registerForm.terms"
          :rules="[v => !!v || 'You must agree to continue!']"
          required>
        </v-checkbox>
        <v-checkbox
          color="primary"
          label="Sign up for newsletter"
          v-model="registerForm.newsletter">
        </v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions class="pr-4">
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mb-3" large v-on:click.native="register()" :loading="loading" :disabled="!valid">Sign In</v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar" top center :color="snackbarColor">
      {{message}}
      <v-btn flat dark @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
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
      valid: true,
      loading: false,
      snackbar: false,
      snackbarColor: '',
      message: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length > 5 || 'Password must be at least 6 characters',
        (v) => v === this.registerForm.password || 'Passwords must match!'
      ],
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
      if (this.$refs.form.validate()) {
        this.loading = true
        app.auth().createUserWithEmailAndPassword(form.email, form.password).then(res => {
          const response = {
            form: form,
            response: res
          }
          console.log(response)
          this.$store.dispatch('createUser', response)
          this.handleResponse({
            color: 'success',
            message: `Thank you ${form.name}, your account has been created.`
          })
        }).catch(err => {
          console.warn(err)
          this.handleResponse({
            color: 'error',
            message: err.message
          })
        })
      } else {
        this.handleResponse({
          color: 'error',
          message: 'Please fill out the required fields.'
        })
      }
    },
    handleResponse (snackbar) {
      this.loading = false
      this.snackbar = true
      this.snackbarColor = snackbar.color
      this.message = snackbar.message
    },
    resetForm () {
      this.$refs.form.reset()
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
