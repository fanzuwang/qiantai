<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>

        <!-- 页面内头部 -分类列表与轮播图 -->
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li v-for="item in top.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}&nbsp;</span>
                                        </p>
                                    </h3>

                                    <!-- 鼠标弹出层 -->
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}&nbsp;</router-link>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->

                    <!--幻灯片--> 
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                                <!-- <ul class="slides" style=" overflow: hidden;">
                                    <li class="" style="width: 100%; float: left; margin-right: -100%; position: relative; display: block; z-index: 1999;"
                                    v-for="sliditem in top.sliderlist" :key="sliditem.id"
                                    >
                                        <router-link to="" >
                                            <img :src="sliditem.img_url" alt="" draggable="false">
                                        </router-link>
                                    </li>
                                </ul> -->
                                <el-carousel height="341px" style=" overflow: hidden;">
                                    <el-carousel-item v-for="sliditem in top.sliderlist" :key="sliditem.id">
                                        <router-link :to="{name:'goodsDetail',params:{id:sliditem.id}}" >
                                            <img :src="sliditem.img_url" :alt="sliditem.title" >
                                        </router-link>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>

                        </div>
                    </div>
                    <!--/幻灯片-->

                    <!-- 侧边栏 推荐商品列表 抽取公共组件 -->
                    <!--  :list="top.toplist" 发送数据给子组件 -->
                    <app-aside :list="top.toplist"></app-aside>
                </div>
            </div>
        </div>
        <!-- 页面主体 -->
        <list-main></list-main>
    </div>
</template>

<script>
import appAside from "./subcom/CommonAside";
import listMain from './subcom/ListMain';
export default {
  components: {
    appAside,
    listMain
  },
  data() {
    return {
      top: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    };
  },
  methods: {
    // 获取页面顶部数据
    getTop() {
      this.$http.get(this.$api.goodsTop).then(res => {
        if (res.data.status == 0) {
          this.top = res.data.message;
          console.log(this.top.sliderlist);
        }
      });
    }
  },
  created() {
    this.getTop();
  }
};
</script>

<style scoped>

</style>