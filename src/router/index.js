// 路由对象模型
import Vue from 'vue'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用router插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router=new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                footershow:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                footershow:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                footershow:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                footershow:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:"/",
            redirect:"/msite"
        }
        
    ]
})
export default router