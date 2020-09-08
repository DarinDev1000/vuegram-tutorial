import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/scss/app.scss'

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      // provide the store using the "store" option.
      // this will inject the store instance to all child components.
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
