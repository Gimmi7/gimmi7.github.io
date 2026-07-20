<template>
  <div class="header-row">
    <el-menu mode="horizontal" class="nav-left">
      <el-menu-item index="/about" @click="goto('/about')" class="logo-item">
        <img src="@/assets/cy_transparent.png" style="height: var(--ep-menu-item-height);" />
      </el-menu-item>

      <el-menu-item :index="item.path" v-for="item in getRoutes()" :key="item.path" @click="goto(item.path)">
        <span class="route-name">{{ routeI18n(item.name) }} </span>
      </el-menu-item>
    </el-menu>

    <el-menu mode="horizontal" class="nav-right">
      <el-menu-item @click="toggleDark()">
        <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
          <i inline-flex i="dark:ep-moon ep-sunny"></i>
        </button>
      </el-menu-item>
      <el-dropdown size="large">
        <el-menu-item>
          <i inline-flex i="lucide-languages"></i>
        </el-menu-item>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="setLocale('en')">English</el-dropdown-item>
            <el-dropdown-item @click="setLocale('zh-cn')">中文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router/router';
import { toggleDark } from "@/composables/dark";
import { useI18n } from "vue-i18n";
import { RouteRecordName } from 'vue-router';

const { t, locale } = useI18n();

function getRoutes() {
  let routes = router.getRoutes();
  const dedup: Record<string, boolean> = {};
  routes = routes.filter(r => {
    if (r.path == "/" || r.path == "/index.html" || r.path == "/about") {
      return false;
    }
    return dedup[r.path] ? false : dedup[r.path] = true;
  });
  return routes;
}

function goto(path: string) {
  router.push(path);
}

function routeI18n(name: RouteRecordName | undefined) {
  if (!name) {
    return "";
  }
  let key = `route.${String(name)}`;
  let i18n = t(key);
  if (i18n != key) {
    return i18n;
  } else {
    return name;
  }
}

function setLocale(value: string) {
  locale.value = value;
}
</script>


<style lang="scss" scoped>
.header-row {
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 0 var(--layout-px);

  border-bottom: 1px solid var(--ep-menu-border-color);

  .nav-left,
  .nav-right {
    display: flex;
    flex-wrap: wrap;
    min-width: 0;
    border-bottom: none; // container已画线，避免换行时双重边线
  }

  .route-name {
    color: #7a8288;
    font-size: var(--nav-font-size);
  }

  @include mobile {

    :deep(.ep-menu--horizontal) {
      height: 48px;
    }

    :deep(.ep-menu-item) {
      padding: 0 10px;
    }
  }
}
</style>
