<template>
  <div class="main_container">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <FileDropContainer></FileDropContainer>
  </div>
</template>

<script setup>
import FileDropContainer from './components/FileDropContainer.vue';
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
