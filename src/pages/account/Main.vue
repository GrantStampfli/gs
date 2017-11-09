<template>
  <v-container grid-list-lg fluid class="mt-5 pt-5">
    <v-layout justify-center class="mt-5">
      <v-flex xs10 sm8 md6 lg4>
        <v-card>
          <v-tabs fixed centered light grow class="account-tabs">
            <v-tabs-bar class="transparent">
              <v-tabs-slider class="white"></v-tabs-slider>
              <v-tabs-item ripple :to="{name: 'login'}" class="account-tab">Login</v-tabs-item>
              <v-tabs-item ripple :to="{name: 'register'}" class="account-tab">Register</v-tabs-item>
            </v-tabs-bar>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'AccountMain',
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus" scoped>

</style>