<template>
  <v-card flat>
    <intro></intro>
    <overview></overview>
    <skills></skills>
    <quotes></quotes>
    <v-layout wrap>
      <v-flex md8 offset-md2>
        <contact></contact>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import Intro from './components/Intro'
import Skills from './components/Skills'
import Quotes from './components/Quotes'
import Overview from './components/Overview'
import Contact from '@/components/Contact'
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
    'skills': Skills,
    'quotes': Quotes,
    'overview': Overview,
    'contact': Contact
  }
}
</script>
<style lang="stylus">

</style>