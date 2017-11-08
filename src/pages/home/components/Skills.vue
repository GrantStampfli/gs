<template>
  <v-container>
    <v-card class="home-tech" flat>
      <v-layout>
        <v-flex sm12 md6>
          <v-list subheader>
            <v-subheader>Technology</v-subheader>
            <v-list-tile avatar v-for="tech in technology" v-bind:key="tech.title">
              <v-list-tile-avatar>
                <v-icon>code</v-icon>
                <!-- <img v-bind:src="tech.avatar"/> -->
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="tech.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex sm12 md6>
          <v-list subheader>
            <v-subheader>Frameworks</v-subheader>
            <v-list-tile avatar v-for="framework in frameworks" v-bind:key="framework.title">
              <v-list-tile-avatar>
                <v-icon>code</v-icon>
                <!-- <img v-bind:src="framework.avatar"/> -->
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="framework.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Skills',
  props: {},
  data () {
    return {
      technology: [
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        }
      ],
      frameworks: [
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        },
        {
          title: '',
          avatar: ''
        }
      ]
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus">
  .home-tech {
    // height: 100%;
  }
</style>