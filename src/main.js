// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)


const routes = [
  // {path: '/about', component: About},
]

const router = new VueRouter({ routes })

import store from './store/store'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store: new Vuex.Store(store)
}).$mount('#app')
