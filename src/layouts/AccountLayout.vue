<template>
  <v-app class="white login-layout">
    <v-toolbar dark flat class="transparent" fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <main>
      <v-content>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'LoginLayout',
  props: {},
  data () {
    return {
      title: ''
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus" scoped>
  $imgUrl = "https://images.unsplash.com/photo-1494385520671-ba5e3e534c3b?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
  .login-layout {
    background: url($imgUrl) no-repeat center center fixed;
    -webkit-background-size: cover; /* For WebKit*/
    -moz-background-size: cover;    /* Mozilla*/
    -o-background-size: cover;      /* Opera*/
    background-size: cover; 
  }
</style>
