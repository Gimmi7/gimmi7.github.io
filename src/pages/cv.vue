<template>
  <div class="article">
    <h1>Curriculum vitae</h1>
    <p>Download CY's CV <a
        href="https://docs.google.com/document/d/1MuT9MK5Ro1sPB70sd1xeIcPnelsUIgHSmq0aW4LuNPM/edit?usp=sharing"
        target="_blank">here</a>.</p>
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vSqrITOotFr1XyrbXqzNlpdCDVm6Ny8GMPuO9e6pOI6FPMYag-cBL3h3S2X8R9rVh9k7vO2jZBKFO30/pub?embedded=true"
      style="width: 100%; height: 100vh;">
    </iframe>
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