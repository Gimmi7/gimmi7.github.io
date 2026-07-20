<template>
  <div class="article">
    <h1>{{ t('aboutme') }}</h1>
    <p v-for="para in paragraphs" v-html="para"></p>

  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, tm } = useI18n();

const paragraphs = computed(() => {
  return tm("aboutme_paragraphs") as any[];
});
</script>
