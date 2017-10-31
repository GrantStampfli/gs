// these will be global filters
import Vue from 'vue'
import accounting from 'accounting'

export default [
  Vue.filter('formatMoney', (val, precision) => accounting.formatMoney(val, { precision: precision == null ? 2 : precision })),
  Vue.filter('formatNumber', (val, precision) => accounting.formatNumber(val, { precision: precision == null ? 0 : precision })),
  Vue.filter('formatPercent', (val, precision) => {
    if (isNaN(val)) {
      return '0%'
    }
    return val.toFixed(precision) + '%'
  }),
  Vue.filter('decimalToPercent', (val, precision) => {
    let num = Number(val) * 100
    if (isNaN(num)) {
      return '0%'
    }
    return num.toFixed(precision) + '%'
  }),
  Vue.filter('ISOtoDate', val => {
    var isoDate = new Date(val)
    return isoDate.toLocaleDateString()
  })
]
