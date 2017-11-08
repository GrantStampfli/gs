<template>
  <v-card flat>
    <v-card-title class="display-2">Let's Connect</v-card-title>
    <v-card-text class="pb-0">
      <v-form v-model="valid" dark>
        <v-text-field label="Name" v-model="name" name="name" :rules="nameRules" :counter="15" required></v-text-field>
        <v-text-field label="E-mail" v-model="email" name="email" type="email" :rules="emailRules" required></v-text-field>
        <v-text-field label="Message" v-model="message" name="message" multi-line required></v-text-field>
        <v-checkbox label="Sign up for Newsletter (comming soon)" v-model="newsletter" color="primary"></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" block v-on:click="sendContactForm()"><v-icon left>mail</v-icon>Send</v-btn>
    </v-card-actions> 
    <v-snackbar bottom multi-line :color="snackbar.color" v-model="snackbar.state">
      {{ snackbar.text }}
      <v-btn flat color="white" v-on:click.native="snackbar.state = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
export default {
  name: 'Contact',
  props: {},
  data () {
    return {
      valid: false,
      snackbar: {
        state: false,
        text: '',
        color: 'success'
      },
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      newsletter: true
    }
  },
  methods: {
    sendContactForm () {
      const date = Date()
      const data = {
        date: date,
        name: this.name,
        email: this.email,
        message: this.message,
        newsletter: this.newsletter,
        html: this.messageBody()
      }
      if (!this.valid) {
        this.snackbar = {
          state: true,
          color: 'warning',
          message: 'Oops.. Fill out all required fields before sending.'
        }
      } else {
        this.$firebaseRefs.messages.push(data).then(() => this.formSent())
      }
    },
    messageBody () {
      const html = `
        <div>From: ${this.name}</div>
        <div>Email: <a href="mailto:${this.email}">${this.email}</a></div>
        <div>Date: ${this.date}</div>
        <div>Message: ${this.message}</div>
      `
      return html
    },
    formSent () {
      this.valid = false
      this.name = ''
      this.email = ''
      this.message = ''
      this.newsletter = false
      this.snackbar = {
        state: true,
        color: 'success',
        message: 'Thanks for the message! I\'ll be in touch soon'
      }
    }
  },
  firebase: {
    messages: this.$db.ref('messages')
  }
}
</script>
<style lang="stylus">

</style>