<template>
  <v-card flat>
    <v-form v-model="valid" dark>
      <v-text-field label="Name" v-model="name" name="name" :rules="nameRules" :counter="15" required></v-text-field>
      <v-text-field label="E-mail" v-model="email" name="email" type="email" :rules="emailRules" required></v-text-field>
      <v-text-field label="Message" v-model="message" name="message" multi-line required>
    </v-form>
    <v-snackbar bottom multi-line v-model="snackbar">
      {{ text }}
      <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
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
      snackbar: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: ''
    }
  },
  computed: {},
  methods: {

  },
  components: {}
}
</script>
<style lang="scss">

</style>