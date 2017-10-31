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
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer>
      <span>&copy; 2017</span>
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
        title: 'G'
      }
    }
  }

</script>
