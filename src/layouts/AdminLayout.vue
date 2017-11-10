<template>
  <v-app dark>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
import { app } from '@/firebase'
export default {
  name: 'AdminLayout',
  beforeRouteEnter (to, from, next) {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        next(vm => {
          vm.$store.dispatch('setUser', user)
        })
      } else {
        next('/login')
      }
    })
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus" scoped>
</style>
