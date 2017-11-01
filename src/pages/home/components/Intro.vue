<template>
  <div class="home-intro">
    <h1 class="home-title">{{title}}</h1>
    <h3 class="home-sub-title">{{subTitle}}</h3>
    <particles title="Testing"></particles>
    <v-btn class="go-down" icon dark large><v-icon x-large>keyboard_arrow_down</v-icon></v-btn>
  </div>
</template>
<script>
import Particles from '@/components/Particles'
export default {
  name: 'Intro',
  props: {},
  data () {
    return {
      title: '',
      subTitle: ''
    }
  },
  computed: {},
  methods: {},
  components: {
    'particles': Particles
  }
}
</script>
<style lang="stylus">
  .home-intro {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .home-title,
    .home-sub-title {
      z-index: 1;
      color: #fff;	
      text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    }
    .go-down {
      position: absolute;
      bottom: 10px;
      right: 50%;
      margin-right: -13px;
    }
  }
</style>