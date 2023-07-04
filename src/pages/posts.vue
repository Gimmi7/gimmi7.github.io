<template>
  <div class="article">
    <div class="wordcloud">
      <img src="@/assets/wordcloud.png">
      <div style="font-size: .65rem;">
        (<a href="https://www.wordclouds.com/" target="_blank">wordclouds</a> of my <a
          href="https://gimmi7.github.io/stromata/" target="_blank">stromata</a> book subtitles)
      </div>
    </div>
    <p>I am gradually incorporating all of my blog posts into the <a href="https://gimmi7.github.io/stromata/"
        target="_blank">stromata</a> repo to form a book.</p>
  </div>
</template>

<style lang="scss" scoped>

.article {
  width: 75%;
  color: var(--color-article);
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;


  .wordcloud {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.3rem;

    img {
      width: 40%;
    }
  }

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