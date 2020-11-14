'use strict'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue'

import App from './App.vue'

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')