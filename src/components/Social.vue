<template>
  <div class="footer-links">
    <template v-for="s in social">
      <v-btn small dark flat icon :key="s.icon" :href="s.link" target="_blank" class="hidden-sm-and-down">
        <v-icon>{{s.icon}}</v-icon>
      </v-btn>
    </template>
    <v-speed-dial v-model="speedDial" bottom right absolute direction="top" transition="slide-y-reverse-transition" class="hidden-sm-and-up">
      <v-btn v-model="speedDial" slot="activator" flat dark fab small hover>
        <v-icon>apps</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <template v-for="s in social">
        <v-btn small dark fab :key="s.icon" :href="s.link" target="_blank">
          <v-icon>{{s.icon}}</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </div>
</template>
<script>
export default {
  name: 'Social',
  data () {
    return {
      speedDial: false,
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
<style lang="stylus">
.footer-links {
  position: relative;
  .speed-dial {
    right: 0;
    bottom: 0;
  }
}
</style>