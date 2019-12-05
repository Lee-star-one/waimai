//入口js

import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router/index.js'

// 挂载
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})
