<template>
  <v-dialog v-model="dialog" lazy absolute :max-width="550">
    <a color="primary" slot="activator" class="email-link">Having trouble signing in?</a>
    <v-card>
      <v-card-title>
        <div class="headline">Forgot Password</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field v-model="emailAddress" label="Email Address" append-icon="email" type="email" required></v-text-field>
        </v-form>
        <v-alert color="info" icon="info" value="true">
          A password reset link will be sent to your email.
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="default darken-1" flat="flat" v-on:click.native="dialog = false">Cancel</v-btn>
        <v-btn color="primary darken-1" flat="flat" v-on:click="forgotPassword()" :loading="loading">Reset Password</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'ForgotPassword',
  props: {},
  data () {
    return {
      valid: false,
      dialog: false,
      loading: false,
      emailAddress: ''
    }
  },
  computed: {},
  methods: {
    forgotPassword () {}
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
