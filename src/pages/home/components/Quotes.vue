<template>
  <v-container class="home-quotes">
    <v-card flat color="transparent">
      <v-card-title class="display-1">Testimonials</v-card-title>
      <v-card-text>
        <v-carousel hide-controls :interval="10000" class="quote-carousel elevation-0" color="transparent" :left-control-icon="false" :right-control-icon="false">
          <v-carousel-item v-for="(item, i) in items" src="" :key="i" class="quote">
            <div class="quote-content">
              <blockquote>{{item.quote}}</blockquote>
              <h3 class="title">-{{item.author}}</h3>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Quotes',
  props: {},
  data () {
    return {
      items: [
        {
          author: 'Linus Torvalds',
          quote: 'Talk is cheap. Show me the code.'
        },
        {
          author: 'Larry Niven',
          quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.'
        },
        {
          author: 'Steve Jobs',
          quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.'
        },
        {
          author: 'C.A.R. Hoare',
          quote: 'The most important property of a program is whether it accomplishes the intention of its user.'
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
  .home-quotes {
    .card__title {
      justify-content: center;
      text-transform: uppercase;
    }
    .quote-carousel {
      height: 100px;
      margin-top: 1rem;
    }
    .quote {
      .quote-content {
        .title {
          text-align: right;
        }
      }
    }
  }
</style>