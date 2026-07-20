<template>
  <div class="sidebar-inner">
    <div class="avatar-wrap">
      <img class="rounded-full avatar" src="@/assets/profile.jpg" />
    </div>
    <div class="name">
      <h3>CY</h3>
    </div>
    <div class="bios">
      <div v-for="(bio, idx) in bios" :key="bio">
        <span v-if="idx < (bios.length - 1)">{{ bio }},</span>
        <span v-else>{{ bio }}</span>
      </div>
    </div>
    <div class="socials">
      <div class="item" v-for="{ icon, desc, link } in socials" :key="desc">
        <div class="icon">
          <Icon :icon="icon" />
        </div>
        <div v-if="!link">
          {{ desc }}
        </div>
        <div v-else>
          <a style="text-decoration: none;" :href="link" target="_blank">{{ desc }}</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const bios = ["Applied Cryptographer", "Web3 Engineer", "Full Stack Developer"];

const socials = [
  { icon: "lucide-map-pin", desc: "Beijing China" },
  { icon: "lucide-mail", desc: "cywang.master@gmail.com" },
  { icon: "lucide-github", desc: "Github", link: "https://github.com/Gimmi7" },
  { icon: "lucide-twitter", desc: "Twitter", link: "https://twitter.com/cywang33714443" },
  { icon: "ri-wechat-fill", desc: "w514233282" },
];
</script>

<style lang="scss" scoped>
.sidebar-inner {
  color: var(--color-article);
  display: flex;
  flex-direction: column;

  .avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    object-fit: cover;
  }

  .name h3 {
    margin: 0.5rem 0;
  }

  .bios {
    font-size: 0.85em;
    line-height: 1.5;
  }

  .socials {
    margin-top: 20px;

    .item {
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      word-break: break-all;
    }
  }

  /* On tablet/mobile the sidebar sits above main content — center it visually. */
  @include tablet-down {
    align-items: center;
    text-align: center;

    .socials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, max-content));
      justify-content: center;
      gap: 0.25rem 1.5rem;
      margin-top: 12px;

      .item {
        justify-content: flex-start;
      }
    }
  }

  @include mobile {
    .socials {
      grid-template-columns: 1fr;
      justify-items: start;
      width: 100%;
      max-width: 20rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
