<script setup>
import CallItem from './CallItem.vue';
import DataChart from './DataChart.vue';
import DonutChart from './DonutChart.vue';
defineProps({
    title: String,
    callTitle: String,
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
    <div class = "overview">
      <div class = "overview__container">
        <h2 id="call-title" class = "overview__sub-heading--text">{{ callTitle }}</h2>
        <div class = "overview__wrapper" aria-labelledby="call-title">
        <CallItem
        v-for="(item, key, index) in data"
        :key="index"
        :title="key"
        :donutTitle="donutTitle"
        :content="item"
        />
        </div>
      </div>
      <div class = "overview__container">
        <h2 id="call-donut" class = "overview__sub-heading--donut">{{ donutTitle }}</h2>
        <DonutChart/>
      </div>
    </div>
  <DataChart :chartTitle="chartTitle"/>
</template>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: space-between;
  align-items: baseline;

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
    padding: 0;
    &--text {
      font-size: $heading-two-size;
      margin: 5px 10px 10px 20px;
    }
    &--donut {
        margin: 30px auto 0 auto;
        text-align: center;
        @include respond-small {
          margin: 0 auto;
        }
    }
  }
}
</style>