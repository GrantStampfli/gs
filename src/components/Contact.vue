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
      // todo
    }
  }
}
</script>
<style lang="stylus">

</style>