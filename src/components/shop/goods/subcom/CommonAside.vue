<template>
    <div>
        <div class="left-220">
            <div class="bg-wrap nobg">
                <div class="sidebar-box">
                    <h4>推荐商品</h4>
                    <ul class="side-img-list">

                        <li v-for="(item, i) in list" :key="item.id">
                            <div class="img-box" >
                                <label for="">{{i+1}}</label>
                                <router-link :to="{name:'goodsDetail',params:{id:item.id}}">
                                    <img :src="item.img_url">
                                </router-link>
                            </div>
                            <div class="txt-box">
                                <router-link :to="{name:'goodsDetail',params:{id:item.id}}">{{item.title}}</router-link>
                                <span>{{item.add_time | date}}</span>            
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // 接受父组件传过来的List数据
  props: ["list"],

  // 局部过滤器
  filters: {
    //日期过滤器
    date(tpl) {
        let date = new Date(tpl);
      return `${date.getUTCFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    }
  }
};
</script>

<style scoped>

</style>