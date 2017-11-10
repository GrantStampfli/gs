<template>
  <v-container grid-list-lg fluid class="mt-5 pt-5">
    <v-layout justify-center class="mt-3">
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
<style lang="stylus">
  .account-tabs {
    > .tabs__bar {
      height: 65px;
      .tabs__container {
        border-bottom: 0;
      }
      .tabs__li.account-tab {
        flex: 1 1 50%;
        max-width: 50%;
        font-weight: bold;
        font-size: 1.15rem;
        .tabs__item:not(.tabs__item--active) {
          border-width: 0;
          box-shadow: inset 1px -2px 11px rgba(0,0,0,0.05), inset 3px -3px 11px -2px rgba(0,0,0,0.05)
        }
      }
    }
  }
</style>