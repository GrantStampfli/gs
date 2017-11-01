<template>
  <v-app>
    <v-navigation-drawer temporary persistent v-model="drawer" enable-resize-watcher app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="{name: item.route}">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app absolute>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
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
  export default {
    data () {
      return {
        drawer: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
          route: 'Home'
        }],
        title: '',
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
        ]
      }
    }
  }

</script>
