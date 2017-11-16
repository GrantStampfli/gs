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
    <v-toolbar fixed :color="[scroll < 64 ? 'transparent' : '']" :flat="scroll < 64" :dark="scroll < 64">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(link, i) in links" v-if="!link.meta.hidden" :key="i" :to="{name: link.name}" exact>{{ link.meta.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon v-on:click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
    <v-footer app>
      <v-subheader>&copy; 2017 {{ title }}. All rights reserved.</v-subheader>
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
