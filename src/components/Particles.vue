<template>
  <div id="particles-js" :style="{backgroundImage: 'url(' + image + ')'}"></div>
</template>
<script>
// import options from './options.json'
import 'particles.js'
const particles = window.particlesJS
export default {
  name: 'Particals',
  props: {
    options: {
      type: String,
      default: '/static/particles.json'
    },
    image: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    initParticles () {
      console.log(particles)
      particles.load('particles-js', this.options, () => {
        console.log('callback - particles.js config loaded')
      })
    }
  },
  components: {},
  mounted () {
    this.initParticles()
  }
}
</script>
<style lang="stylus" scoped>
  @import "../assets/stylus/main.styl"
  #particles-js {
    position: absolute;
    width: 100%;
    height: calc(100% - 100px);
    background-color: $green.darken-2;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  }
</style>
