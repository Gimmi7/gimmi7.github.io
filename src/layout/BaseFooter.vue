<template>
  <div class="page-footer">
    <footer>
      <div>
        © {{ new Date().getFullYear() }} CY. Powered by Vite & Vue3 & Typescript & Element-Plus.
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  background-color: var(--footer-bg);
  border-top: 1px solid #bdc1c4;
  margin-top: 2em;

  footer {
    max-width: 100%;
    padding: 1.5rem var(--layout-px);
    font-size: var(--footer-font-size);
    color: #9ba1a6;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
