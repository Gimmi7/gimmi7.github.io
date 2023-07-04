<template>
  <div class="article">
    <h1>{{ $t('aboutme') }}</h1>
    <p v-for="para in get_paras()" v-html="para"></p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { tm } = useI18n();


function get_paras() {
  const paras = tm("aboutme_paragraphs");
  return paras;
}

</script>

<style lang="scss" scoped>
.article {
  width: 75%;
  color: var(--color-article);
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;

  p {
    display: block;
    margin: 0 0 1.3em;
    font-size: 1.1rem;
    line-height: 1.5;

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }

}
</style>