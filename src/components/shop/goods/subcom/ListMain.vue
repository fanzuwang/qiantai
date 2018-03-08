<template>
    <div>
        <div class="section" v-for="item in goodsgroup" :key="item.level1cateid">

            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>

                    <a href="" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</a>

                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">

                        <li v-for="subitem in item.datas" :key="subitem.artID">                           
                            <router-link :to="{name:'goodsDetail',params:{id:subitem.artID}}">
                                <div class="img-box">
                                    <img :src="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{subitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{subitem.market_price}}</b>元</p>
                                    <p>
                                        <strong>库存{{subitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{subitem.sell_price}}.00</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      goodsgroup: []
    };
  },
  methods: {
    getgoodsgroup() {
      this.$http.get(this.$api.goodsContent).then(res => {
        if (res.data.status == 0) {
          this.goodsgroup = res.data.message;
          console.log(this.goodsgroup);
        }
      });
    }
  },
  created() {
    this.getgoodsgroup();
  }
};
</script>

<style scoped>

</style>