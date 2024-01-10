<script setup lang="ts">
import { showToast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const value = ref('');
const toAbout = ()=>{
  router.push('/about')
}
</script>

<template>
  <main>
    首页有缓存
    <br><br>
    <van-button type="primary" @click="showToast('toast')">toast方法</van-button>
    <br><br>
    <van-button type="primary" @click="toAbout()">跳转到about</van-button>
    <van-cell-group inset>
  <van-field v-model="value" label="文本" placeholder="输入后跳转返回不清零" />
</van-cell-group>
  </main>
</template>
