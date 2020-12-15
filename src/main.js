import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueSocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
Vue.use(VueSocialSharing)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
