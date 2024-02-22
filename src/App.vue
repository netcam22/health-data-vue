<script setup>
import { RouterView } from 'vue-router';
import NavButton from '@/components/NavButton.vue';
const clientName = "Andy Repp";
import {menuItems} from '@/data/globalData';
</script>

<template>
    <main class="wrapper">
      <nav class="sidebar">
        <div class = "sidebar__list">
        <h1 class="sidebar__name">Welcome, {{ clientName }}</h1>
        <NavButton v-for="(navItem, route, index) in menuItems"
        :key="index"
        :route="route"
        :text="navItem"
        />
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
  flex-direction: column;
  @include respond-medium {
    flex-direction: row;
  }
}
.sidebar {
  flex-basis: 15%;
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  background-color: $sidebar-background;
  min-height: 100vh;
  margin: 0;
  padding: 10px 0;
  font-family: "Montserrat";

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
    font-size: $heading-two-size;
    text-wrap: wrap;
    margin: 0 0 25px 0;
    padding: 0 5%;
    font-weight: normal;
    opacity: 100%;
  }
}
</style>
