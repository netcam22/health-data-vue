<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main class="wrapper">
      <nav class="sidebar">
        <ul class = "sidebar__list">
        <li class="sidebar__item">Andy Repp</li>
        <RouterLink class="sidebar__link" to="/metrics"><li class="sidebar__item">Metrics</li></RouterLink>
        <RouterLink class="sidebar__link" to="/overview"><li class="sidebar__item">Overview</li></RouterLink>
        <RouterLink class="sidebar__link" to="/detailing"><li class="sidebar__item">Detailing</li></RouterLink>
        <RouterLink class="sidebar__link" to="/calls"><li class="sidebar__item">Calls</li></RouterLink>
        <RouterLink class="sidebar__link" to="/information"><li class="sidebar__item">Information</li></RouterLink>
        <RouterLink class="sidebar__link" to="/about-profiles"><li class="sidebar__item">About Profiles</li></RouterLink>
        <RouterLink class="sidebar__link" to="/detailing-targets"><li class="sidebar__item">Detailing Targets</li></RouterLink>
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
  margin: 0;
  padding: 0;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
  }
  &__link {
    color: #fff;
    text-decoration: none;
    font-size: 36px;
    margin: 0;
    padding: 0 5%;
    font-weight: normal;
    opacity: 100%;
  }
  &__link:hover {
    background-color:  rgba(255, 255, 255, 0.2);
  }
  &__link:hover &__item{
    font-weight: bold;
  }
  
}
</style>
