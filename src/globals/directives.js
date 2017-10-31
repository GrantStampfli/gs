// these will be global directives
import Vue from 'vue'

export default [
  Vue.directive('autofocus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus()
    }
  })
]
