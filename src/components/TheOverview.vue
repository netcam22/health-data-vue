<script setup>
import CallItem from './CallItem.vue';
import DataChart from './DataChart.vue';
import DonutChart from './DonutChart.vue';
defineProps({
    title: String,
    callTitle: String,
    chartTitle: String,
    donutTitle: String,
    data: {
      Date: Array,
      Account: Array,
      Speciality: Array,
      Profiling: Array
    }
})
</script>

<template>
    <div class = "data-wrapper">
      <div class = "data-wrapper__call">
        <CallItem
        v-for="(item, key, index) in data"
        :key="index"
        :title="key"
        :content="item"
        />
      </div>
      <DonutChart/>
  </div>
  <h2 class = "chart-heading">{{ chartTitle }}</h2>
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
.chart-heading {
      font-size: 36px;
      margin: 5px 10px 0 20px;
      padding: 0;
  }
</style>