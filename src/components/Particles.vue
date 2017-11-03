<template>
  <div :id="id"></div>
</template>
<script>
import 'particles.js'
const particles = window.particlesJS
export default {
  name: 'Particals',
  props: {
    options: {
      type: String,
      default: '/static/particles.json'
    },
    id: {
      type: String,
      default: 'particles-js'
    }
  },
  methods: {
    initParticles () {
      particles.load(this.id, this.options, () => {
        console.log('callback - particles.js config loaded')
      })
    }
  },
  mounted () {
    this.initParticles()
  }
}
</script>
<style lang="stylus" scoped>
  @import "../assets/stylus/main.styl"
  #particles-js {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-color: $green.darken-2;
    // background-image: url("");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 50% 50%;
    z-index: 0;
  }
</style>
