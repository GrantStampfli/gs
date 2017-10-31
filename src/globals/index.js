import filters from './filters'
import directives from './directives'

export const Global = {
  install (Vue) {
    Vue.prototype.$selectEntireTextbox = (event) => {
      event.target.select()
    }

    Vue.prototype.$dialogMaxHeight = () => {
      let mHeight = window.innerHeight
      mHeight = mHeight * 0.9 // dialog is bound to 90% of height
      // mHeight -= 24 // top margin
      mHeight -= 64 // dialog header
      mHeight -= 52 // dialog actions
      // mHeight -= 24 // bottom margin
      return 'max-height:' + mHeight + 'px'
    }

    Vue.filter(filters)
    Vue.directive(directives)
  }
}
export default Global
