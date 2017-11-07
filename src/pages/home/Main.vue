<template>
  <v-card flat>
    <intro></intro>
    <tech></tech>
    <quotes></quotes>
    <v-layout wrap>
      <v-flex md8 offset-md2>
        <contact></contact>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import Tech from './components/Tech'
import Intro from './components/Intro'
import Quotes from './components/Quotes'
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
    'tech': Tech,
    'intro': Intro,
    'quotes': Quotes,
    'contact': Contact
  }
}
</script>
<style lang="stylus">

</style>