<template>
    <div id='app'> 
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.footershow"/>
    </div>
</template>
<script>
import {reqFoodCategorys} from './api'
import {mapActions} from 'vuex'
import FooterGuide from './components/footerGuide/FooterGuide.vue'
export default {
    mounted() {
    //    this.$store.dispatch('getAddress')
        this.getAddress()
        this.getUserInfo()

    },
    methods: {
        ...mapActions(['getAddress','getUserInfo'])
    },
    components:{
        FooterGuide
    }
    
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background #f5f5f5
    
</style>