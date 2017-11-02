<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer temporary persistent v-model="drawer" enable-resize-watcher app>
      <v-list>
        <v-list-tile v-for="(link, i) in links" :key="i" :to="{name: link.name}">
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
        <v-btn flat v-for="(link, i) in links" :key="i" :to="{name: link.name}">{{link.meta.title}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <main>
      <v-content>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-content>
    </main>
    <v-footer app class="pr-3" color="transparent">
      <v-subheader>&copy; 2017 {{title}}. All rights reserved.</v-subheader>
      <v-spacer></v-spacer>
        <template v-for="s in social">
          <v-btn small light flat icon :key="s.icon" :href="s.link" target="_blank">
            <v-icon>{{s.icon}}</v-icon>
          </v-btn>
        </template>
    </v-footer>
  </v-app>
</template>

<script>
  import { routes } from '@/router'
  export default {
    data () {
      return {
        drawer: false,
        title: 'Vue.js',
        links: routes,
        social: [
          {
            icon: 'fa-twitter',
            link: 'https://twitter.com/'
          },
          {
            icon: 'fa-linkedin',
            link: 'https://linkedin.com/'
          },
          {
            icon: 'fa-github',
            link: 'https://github.com/'
          }
        ],
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
    mounted () {
      this.onResize()
      window.addEventListener('scroll', (e) => {
        this.scroll = document.documentElement.scrollTop
      })
    }
  }
</script>
