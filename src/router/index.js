import Vue from 'vue'
import Router from 'vue-router'

// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Mine from '../pages/Mine/Mine.vue'
import Service from '../pages/Service/Service.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import GoodsInfo from '../pages/GoodsInfo/GoodsInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/home/goodsinfo', component: GoodsInfo},
    {path: '/classify', component: Classify},
    {path: '/mine', component: Mine},
    {path: '/service', component: Service},
    {path: '/shopcar', component: ShopCar}
  ]
})
