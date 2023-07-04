<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive" :key="route.fullPath"></component>
      </keep-alive>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" v-if="!route.meta.keepAlive" :key="route.fullPath"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
</script>