<template>
  <div class="about">
    <h1>无缓存</h1>
    <van-button type="primary" @click="toHome()">跳转到home</van-button>
    <van-field v-model="value" label="文本" placeholder="输入后跳转返回清零" />
    <div class="w300"> 285px</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
const value = ref('');
const router = useRouter()
const toHome = ()=>{
  router.push('/')
}
</script>

<style lang='scss'>
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
      color:red
    }
    .w300{
      width: 285px;
      color: red;
      transition: 2s;
    }
  }
</style>
