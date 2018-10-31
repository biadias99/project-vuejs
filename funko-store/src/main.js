import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import router from './router' // linha nova

Vue.config.productionTip = false

Vue.use(Vuetify) 

new Vue({
  router, // linha nova
  render: h => h(App),
}).$mount('#app')
