<script setup>
import CallItem from './CallItem.vue';
import DataChart from './DataChart.vue';
import DonutChart from './DonutChart.vue';
defineProps({
    title: String,
    donutTitle: String,
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
        :donutTitle="donutTitle"
        :content="item"
        />
      </div>
      <h2 id="call-donut" class = "call__sub-heading">{{ donutTitle }}</h2>
      <DonutChart/>
  </div>
  <DataChart :chartTitle="chartTitle"/>
</template>

<style lang="scss" scoped>
.call {
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: space-between;
  align-items: center;
  @include respond-small {
    flex-direction: row;
  }

  &__wrapper {
    flex-basis: 40%;
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
  }

  &__sub-heading {
      font-size: $heading-two-size;
      margin: 30px 10px 10px 20px;
      padding: 0;
      display: block;
      @include respond-small {
        display: none;
      }
    }
}
</style>