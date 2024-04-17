document.title = "Тестовое задание";

import Vue from 'vue'
import App from './App.vue'
import './styles.scss'
import Vuelidate from 'vuelidate';

Vue.config.productionTip = true

Vue.use(Vuelidate)
new Vue({
  render: h => h(App),
}).$mount('#app')
