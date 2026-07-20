<template>
  <div class="article">
    <div class="wordcloud">
      <img src="@/assets/wordcloud.png">
      <div class="caption">
        (<a href="https://www.wordclouds.com/" target="_blank">wordclouds</a> of my <a
          href="https://gimmi7.github.io/stromata/" target="_blank">stromata</a> book subtitles)
      </div>
    </div>
    <p>I am gradually incorporating all of my blog posts into the <a href="https://gimmi7.github.io/stromata/"
        target="_blank">stromata</a> repo to form a book.</p>
  </div>
</template>

<style lang="scss" scoped>
.wordcloud {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.3rem;

  img {
    width: 100%;
    max-width: min(400px, 80%);
    height: auto;
  }

  .caption {
    font-size: 0.65rem;
    margin-top: 0.5rem;
  }
}
</style>
