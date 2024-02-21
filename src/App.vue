<script setup>
import { RouterLink, RouterView } from 'vue-router';
const clientName = "Andy Repp";
const menuItems = ["Metrics", "Overview", "Detailing", "Calls", "Information", "About Profiles", "Detailing Targets"];
</script>

<template>
    <main class="wrapper">
      <nav class="sidebar">
        <div class = "sidebar__list">
        <h1 class="sidebar__name">Welcome, {{ clientName }}</h1>
        <RouterLink class="sidebar__link" to="/metrics"><button class="sidebar__item">Metrics</button></RouterLink>
        <RouterLink class="sidebar__link" to="/overview"><button class="sidebar__item">Overview</button></RouterLink>
        <RouterLink class="sidebar__link" to="/detailing"><button class="sidebar__item">Detailing</button></RouterLink>
        <RouterLink class="sidebar__link" to="/calls"><button class="sidebar__item">Calls</button></RouterLink>
        <RouterLink class="sidebar__link" to="/information"><button class="sidebar__item">Information</button></RouterLink>
        <RouterLink class="sidebar__link" to="/about-profiles"><button class="sidebar__item">About Profiles</button></RouterLink>
        <RouterLink class="sidebar__link" to="/detailing-targets"><button class="sidebar__item">Detailing Targets</button></RouterLink>
      </div>
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
  flex-basis: 15%;
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  background-color: $sidebar-background;
  min-height: 100vh;
  line-height: 2;
  margin: 0;
  padding: 2% 0;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
  }
  &__name {
    color: $white;
    text-decoration: none;
    font-size: 36px;
    line-height: 40px;
    text-wrap: wrap;
    margin: 5% 0;
    padding: 0 5%;
    font-weight: normal;
    opacity: 100%;
  }
  &__item {
    color: $white;
    background-color: transparent;
    text-decoration: none;
    font-size: 36px;
    margin: 2% 0;
    padding: 0 5%;
    font-weight: normal;
    opacity: 100%;
    border: none;
    cursor: pointer;
  }

  &__link:hover {
    background-color:  $sidebar-hover;
    font-weight: bold;
  }
  
}
</style>
