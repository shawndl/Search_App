import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#ef5185',
    alternative: '#342d2f',
    neutral: '#f9f9f9',
    accent: '#8c9eff',
    success: '028489',
    error: '#b71c1c'
  }
})
