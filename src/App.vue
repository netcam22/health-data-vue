<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main class="wrapper">
      <nav class="sidebar">
        <ul class = "sidebar__list">
        <RouterLink class="sidebar__item" to="/">Andy Repp</RouterLink>
        <RouterLink class="sidebar__item" to="/metrics">Metrics</RouterLink>
        <RouterLink class="sidebar__item" to="/overview">Overview</RouterLink>
        <RouterLink class="sidebar__item" to="/detailing">Detailing</RouterLink>
        <RouterLink class="sidebar__item" to="/calls">Calls</RouterLink>
        <RouterLink class="sidebar__item" to="/information">Information</RouterLink>
        <RouterLink class="sidebar__item" to="/about-profiles">About Profiles</RouterLink>
        <RouterLink class="sidebar__item" to="/detailing-targets">Detailing Targets</RouterLink>
      </ul>
      </nav>
  <RouterView />
</main>
</template>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}
.sidebar {
  flex-basis: 30%;
  box-sizing: border-box;
  display: flex;
  background-color: #333333;
  min-height: 100vh;

  &__list {
    display: flex;
    flex-direction: column;
  }
  &__item {
    color: #fff;
    text-decoration: none;
  }
}
</style>
