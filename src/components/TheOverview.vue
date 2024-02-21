<script setup>
import CallItem from './CallItem.vue';
import DataChart from './DataChart.vue';
defineProps({
    title: String,
    chartTitle: String,
    data: {
      Date: Array,
      Account: Array,
      Speciality: Array,
      Profiling: Array
    }
})
</script>

<template>
    <h1>{{title}}</h1>
    <div class = "data-wrapper">
    <div class = "data-wrapper__call">
    <CallItem
    v-for="(item, key, index) in data"
    :key="index"
    :title="key"
    :content="item"
    />
  </div>
    <img src="./../assets/donut.JPG"/>
  </div>
    <h2>{{ chartTitle }}</h2>
    <DataChart />
</template>

<style lang="scss" scoped>
.data-wrapper {
  display: flex;
  flex-direction: row;
  flex-basis: 40%;
  justify-content: space-between;
  align-items: flex-start;

  &__call {
    flex-basis: 40%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
  }
}
img {
  flex-basis: 40%;
}
</style>