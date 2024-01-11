<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" v-if="isKeepAlive" :key="route.path" />
    </keep-alive>
    <component :is="Component" v-if="!isKeepAlive" />
  </router-view>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isKeepAlive = computed(() => {
  console.log(route.meta.keepAlive)
  if (route.meta.keepAlive === undefined) {
    return false
  }
  return route.meta.keepAlive
})
</script>

<style scoped>

</style>
