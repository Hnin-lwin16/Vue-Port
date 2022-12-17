import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './route'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


Vue.use(VueRouter)

const route = new VueRouter({
    routes: Router,
    mode: 'history'
})
new Vue({
    el: '#app',
    render: h => h(App),
    router: route
})
