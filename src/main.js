//入口js

import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router/index.js'
import store from './store'
import {Button} from 'mint-ui'

Vue.component(Button.name,Button) 

// 挂载
new Vue({
    el:'#app',
    render:h=>h(App),
    router,
    store //使用Vuex
})
