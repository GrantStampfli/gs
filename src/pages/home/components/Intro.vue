<template>
  <v-card flat class="home-intro">
    <v-parallax jumbotron :height="height" src="https://images.unsplash.com/photo-1471376719851-24d638731081?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
      <particles></particles>
      <v-layout column align-center justify-center>
        <h1 class="home-title">{{title}}</h1>
        <h4 class="home-sub-title">{{subTitle}}</h4>
      </v-layout>
      <v-btn class="go-down" icon dark large><v-icon x-large>keyboard_arrow_down</v-icon></v-btn>
    </v-parallax>
  </v-card>
</template>
<script>
import Particles from '@/components/Particles'
export default {
  name: 'Intro',
  props: {},
  data () {
    return {
      title: 'Vue.js',
      subTitle: 'Build your application today!'
    }
  },
  computed: {
    height () {
      return this.$store.getters.windowSize.y
    }
  },
  methods: {
    hit (e) {
      console.log(e)
    }
  },
  components: {
    'particles': Particles
  }
}
</script>
<style lang="stylus">
  .home-intro {
    position: relative;
    max-height: 100%;
    .home-title,
    .home-sub-title {
      z-index: 1;
      color: #fff;	
      text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    }
    .go-down {
      position: absolute;
      bottom: 35px;
      right: 50%;
      margin: 0 -13px 0 0;
    }
  }
</style>