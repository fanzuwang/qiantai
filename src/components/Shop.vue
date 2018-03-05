<template>
  <div>
    <!-- 公共头部 -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from '../components/shop/subcom/Header';
  export default {
    components: {
      appHeader
    }
  }
</script>

<style scoped>

</style>