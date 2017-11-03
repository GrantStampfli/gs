<template>
  <v-card flat>
    <intro></intro>
    <testimonials></testimonials>
    <tech></tech>
  </v-card>
</template>
<script>
import Tech from './components/Tech'
import Intro from './components/Intro'
import Testimonials from './components/Testimonials'
export default {
  name: 'Home',
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {
    'tech': Tech,
    'intro': Intro,
    'testimonials': Testimonials
  }
}
</script>
<style lang="stylus">

</style>