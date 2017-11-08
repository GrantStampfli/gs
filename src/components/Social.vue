<template>
  <div>
    <template v-for="s in social">
      <v-btn small dark flat icon :key="s.icon" :href="s.link" target="_blank">
        <v-icon>{{s.icon}}</v-icon>
      </v-btn>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Social',
  data () {
    return {
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
</style>