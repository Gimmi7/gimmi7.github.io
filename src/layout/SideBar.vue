<template>
  <div class="flex-column">
    <div>
      <img class="rounded-full" style="width: 11vw;" src="@/assets/profile.jpg" />
    </div>
    <div>
      <h3>CY</h3>
    </div>
    <div class="bios">
      <div v-for="(bio, idx) in bios">
        <span v-if="idx < (bios.length - 1)">{{ bio }},</span>
        <span v-else>{{ bio }}</span>
      </div>
    </div>
    <div class="socials">
      <div class="item" v-for="{ icon, desc, link } in socials">
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
  { icon: "ri-wechat-fill", desc: "w514233282"},
];
</script>

<style lang="scss" scoped>
.flex-column {
  color: var(--color-article);

  .bios {
    font-size: .85em;
    line-height: 1.5;
  }

  .socials {
    margin-top: 20px;

    .item {
      padding-bottom: 8px;
      display: flex;
      gap: 1.2rem;
    }
  }
}
</style>