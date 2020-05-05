<template>
  <div id="app">
    <!-- 如果为true就缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不做缓存就放在外面 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less"></style>
