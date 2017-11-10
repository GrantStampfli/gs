<template>
  <v-dialog v-model="dialog" lazy :max-width="550">
    <a color="primary" slot="activator" class="email-link">Having trouble signing in?</a>
    <v-card class="forgot-password">
      <v-card-title>
        <div class="headline">Forgot Password</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="valid" ref="forgotPassword">
          <v-text-field v-model="emailAddress" label="Email Address" append-icon="email" type="email" required :rules="emailRules" :hint="emailHint" :error="hasError" :persistent-hint="hasError"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="default darken-1" v-on:click.native="resetForm()">Cancel</v-btn>
        <v-btn color="primary darken-1" v-on:click="forgotPassword()" :disabled="!valid">Reset Password</v-btn>
      </v-card-actions>
      <v-snackbar v-model="toast.show" :color="toast.color" bottom center multi-line>
        {{ toast.message }}
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>
<script>
import { app } from '@/firebase'
export default {
  name: 'ForgotPassword',
  props: {},
  data () {
    return {
      valid: false,
      dialog: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      emailHint: '',
      emailAddress: '',
      toast: {
        show: false,
        color: 'success',
        message: ''
      }
    }
  },
  computed: {
    hasError () {
      if (this.emailHint.length) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    forgotPassword () {
      this.$refs.forgotPassword.validate()
      app.auth().sendPasswordResetEmail(this.emailAddress).then(res => {
        this.resetForm()
        this.toast.show = true
        this.toast.color = 'success'
        this.toast.message = 'A password reset link is sent to your email'
      }).catch(err => {
        this.toast.show = true
        this.toast.color = 'error'
        this.toast.message = err.message
        this.emailHint = err.message
      })
    },
    resetForm () {
      this.dialog = false
      this.emailHint = ''
      this.$refs.forgotPassword.reset()
    }
  },
  components: {}
}
</script>
<style lang="stylus" scoped>
  .email-link {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
</style>
