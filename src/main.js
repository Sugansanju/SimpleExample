import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})