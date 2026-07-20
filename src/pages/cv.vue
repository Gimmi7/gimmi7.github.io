<template>
  <div class="article cv-page">
    <h1>Curriculum vitae</h1>
    <p>Download CY's CV <a
        href="https://docs.google.com/document/d/1MuT9MK5Ro1sPB70sd1xeIcPnelsUIgHSmq0aW4LuNPM/edit?usp=sharing"
        target="_blank">here</a>.</p>
    <div class="cv-frame">
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSqrITOotFr1XyrbXqzNlpdCDVm6Ny8GMPuO9e6pOI6FPMYag-cBL3h3S2X8R9rVh9k7vO2jZBKFO30/pub?embedded=true">
      </iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cv-page {
  // CV needs wider room than reading text — override article max-width
  max-width: min(100%, 1000px);
}

.cv-frame {
  width: 100%;
  // Use viewport-based height with sensible floor/ceiling so mobile isn't cramped
  // and desktop doesn't waste space.
  height: clamp(560px, 85vh, 1200px);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @include mobile {
    height: 70vh;
  }
}
</style>
