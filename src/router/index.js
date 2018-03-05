import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import Login from '../components/account/login/Login.vue'
import goodsList from '../components/shop/goods/List.vue'
import goodsDetail from '../components/shop/goods/Detail.vue'
import ShopCart from '../components/shop/shopcart/Shopcart.vue'
import OrderpSite from '../components/shop/order/Site.vue'
import OrderPay from '../components/shop/order/Pay.vue'
import OrderComplete from '../components/shop/order/Complete.vue'
import Header from '../components/shop/subcom/Header.vue'
import Shop from '../components/Shop.vue';


Vue.use(Router)

let goods = [
  { name: 'goodsList', path: 'goods/list', component: goodsList },
  { name: 'goodsDetail', path: 'goods/detail/:id', component: goodsDetail },
]



let order = [
  { name: 'orderComplete', path: 'order/complete', component: OrderComplete},
  { name: 'orderSite', path: 'order/site/:id', component: OrderpSite},
  { name: 'orderPay', path: 'order/pay/:id', component: OrderPay}
]

let shopcart = [
  { name: 'shopcart', path: 'shopcart', component: ShopCart}
]

export default new Router({
  routes: [
    // {
    //   // path: '/',
    //   // name: 'HelloWorld',
    //   // component: HelloWorld
    // }

    { name: 'login', path: '/login', component: Login },
    { name: 'shop', path: '/shop', component: Shop, children: [...goods,...order,...shopcart] }
  ]
})
