<template>
  <v-app v-resize="onResize" dark>
    <v-navigation-drawer temporary fixed v-model="drawer" enable-resize-watcher app>
      <v-list>
        <v-list-tile v-for="(link, i) in links" v-if="!link.meta.hidden" :key="i" :to="{name: link.name}">
          <v-list-tile-action>
            <v-icon v-html="link.meta.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.meta.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed :color="scroll < 64 ? 'transparent' : ''" :flat="scroll < 64" :dark="scroll < 64">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(link, i) in links" v-if="!link.meta.hidden" :key="i" :to="{name: link.name}" exact>{{ link.meta.title }}</v-btn>
        <v-menu v-if="userName" offset-y>
          <v-btn flat exact slot="activator">
            <v-avatar>
              <img v-if="user.photoURL" :src="user.photoURL">
              <v-icon v-else dark>account_circle</v-icon>
            </v-avatar>
          </v-btn>
          <v-list dense>
            <v-list-tile v-on:click="$signOut()">
              <v-list-tile-title>Sign Out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat v-else :to="{name: 'login'}" exact>Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon v-on:click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
    <v-footer app>
      <div>&copy; 2017 {{ title }}. All rights reserved.</div>
      <v-spacer></v-spacer>
      <social></social>
    </v-footer>
  </v-app>
</template>
<script>
import base from '@/router/base'
import Social from '@/components/Social'

export default {
  name: 'BaseLayout',
  data () {
    return {
      drawer: false,
      title: 'Vue.js',
      links: base.children,
      windowSize: {
        x: 0,
        y: 0
      },
      scroll: 0
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userName () {
      const user = this.user
      if (user) {
        return user.displayName ? user.displayName : user.email
      } else {
        return null
      }
    }
  },
  methods: {
    onResize () {
      const windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.$store.dispatch('setWindowSize', windowSize)
      this.windowSize = windowSize
    }
  },
  components: {
    'social': Social
  },
  mounted () {
    this.onResize()
    window.addEventListener('scroll', (e) => {
      this.scroll = document.documentElement.scrollTop
    })
  }
}
</script>
<style lang="stylus" scoped>
</style>
