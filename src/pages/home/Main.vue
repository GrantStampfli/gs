<template>
  <v-card flat color="transparent">
    <intro></intro>
    <tech></tech>
  </v-card>
</template>
<script>
import Intro from './components/Intro'
import Tech from './components/Tech'
export default {
  name: 'Home',
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {
    'intro': Intro,
    'tech': Tech
  }
}
</script>
<style lang="stylus">

</style>