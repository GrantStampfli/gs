<template>
  <v-app dark>
    <v-navigation-drawer fixed v-model="drawer" clipped app>
      <v-toolbar flat class="darken-3">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img v-if="user.photoURL" :src="user.photoURL" />
              <v-icon v-else>account_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
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
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
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
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {},
  components: {}
}
</script>
<style lang="stylus" scoped>
</style>
