import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import Login from '../components/account/login/Login.vue'
import Shop from '../components/shop/Shop';
import GoodsList from '../components/shop/goods/List';
import GoodsDetail from '../components/shop/goods/Detail';
import Shopcart from '../components/shop/shopcart/Shopcart';
import OrderSite from '../components/shop/order/Site';
import OrderPay from '../components/shop/order/Pay.vue';
import OrderComplete from '../components/shop/order/Complete.vue'
// import Header from '../components/shop/subcom/Header.vue'
// import Shop from '../components/Shop.vue';


Vue.use(Router)

let goods = [
  { name: 'goodsList', path: 'goods/list', component: GoodsList },
  { name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail },
]



let order = [
  { name: 'orderComplete', path: 'order/complete', component: OrderComplete},
  { name: 'orderSite', path: 'order/site/:ids', component: OrderSite},
  { name: 'orderPay', path: 'order/pay/:id', component: OrderPay}
]

let shopcart = [
  { name: 'shopcart', path: 'shopcart', component: Shopcart}
]

export default new Router({
  routes: [
  //  账户管理路由配置
    // name表示路由规则的名字
    { name: 'login', path: '/login', component: Login },
    // 商城路由配置
    { name: 'shop', path: '/', component: Shop, children: [...goods,...order,...shopcart] }
  ]
})
