<template>
  <div class="article">
    <h1>Curriculum vitae</h1>
    <p>Download CY's CV <a
        href="https://docs.google.com/document/d/1wqw6v94djk_PgOrahF-f5AgV7u09yQ7K-1M-BUZz4Ts/edit?usp=sharing"
        target="_blank">here</a>.</p>
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vQiOWTpNHxRfcOYVcFGuwJYpFdMvI8gQc5UF6FdANTFdvnGGAq3RsfZdJsoCkSS1DihZX7Fci7VIYvD/pub?embedded=true"
      style="width: 100%; height: 100vh;"></iframe>
  </div>
</template>

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