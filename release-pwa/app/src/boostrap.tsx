import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import { Component } from 'vue-property-decorator'
import Vui from '../ui'
import VApp from './app'
import router from './router'
import apolloOptions from './apollo'
import storeOption from './store'
import '../ui/scss/vui.scss'

const apolloProvider: any = new VueApollo({
    ...apolloOptions
})

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueApollo)
Vue.use(Vui)

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
])

const store: any = new Vuex.Store({
    ...storeOption
})
store.$apollo = apolloOptions

new Vue({
    el: '#app',
    router,
    store,
    apolloProvider,
    render: h => h(VApp)
})