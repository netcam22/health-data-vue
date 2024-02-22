<script setup>
import CallItem from './CallItem.vue';
import DataChart from './DataChart.vue';
import DonutChart from './DonutChart.vue';
defineProps({
    title: String,
    callTitle: String,
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
    <div class = "call">
      <div class = "call__wrapper" aria-labelledby="call-title">
        <CallItem
        v-for="(item, key, index) in data"
        :key="index"
        :title="key"
        :content="item"
        />
      </div>
      <DonutChart/>
  </div>
  <DataChart :chartTitle="chartTitle"/>
</template>

<style lang="scss" scoped>
.call {
  display: flex;
  flex-direction: row;
  flex-basis: 40%;
  justify-content: space-between;
  align-items: flex-start;

  &__wrapper {
    flex-basis: 40%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
  }
}
</style>