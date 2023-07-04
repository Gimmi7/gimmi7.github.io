<template>
  <div class="app-wrapper">
    <base-header></base-header>
    <div class="page-body">
      <div class="sidebar">
        <side-bar></side-bar>
      </div>
      <div class="page-main">
        <page-main></page-main>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script lang="ts" setup>
import BaseHeader from "./BaseHeader.vue";
import SideBar from "./SideBar.vue";
import PageMain from "./PageMain.vue";
import BaseFooter from "./BaseFooter.vue";
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .page-body {
    flex-grow: 1;
    display: flex;
    padding-left: 10vw;
    padding-top: 2rem;
    gap: 5rem;

    .page-main {
      width: 100%;
    }
  }
}
</style>