<template>
  <div class="app-wrapper">
    <base-header></base-header>
    <div class="page-body">
      <aside class="sidebar">
        <side-bar></side-bar>
      </aside>
      <main class="page-main">
        <page-main></page-main>
      </main>
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
}

.page-body {
  flex-grow: 1;
  display: flex;
  gap: var(--layout-gap);
  padding: var(--layout-pt) var(--layout-px) 2rem;
  box-sizing: border-box;

  .sidebar {
    flex: 0 0 var(--sidebar-width);
    max-width: var(--sidebar-width);
  }

  .page-main {
    flex: 1 1 auto;
    min-width: 0;
  }

  @include tablet-down {
    flex-direction: column;

    .sidebar {
      flex-basis: auto;
      max-width: 100%;
    }
  }
}
</style>
