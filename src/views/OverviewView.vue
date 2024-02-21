<script setup>
import TheOverview from '@/components/TheOverview.vue';
const title = "Overview";
const chartTitle = "Detailing topic breakdown";
const overviewData = {
      Date: ["Tomorrow, 3pm", "18 February 2023"],
      Account: ["Dr. Clinton Ackerman"],
      Speciality: ["Respiratory therapist", "Assistive therapy"],
      Profiling: ["Confident"]
}
</script>

<template>
  <section class = "overview">
    <TheOverview 
    :title="title" 
    :chartTitle="chartTitle" 
    :data="overviewData"/>
  </section>
</template>

<style lang = "scss" scoped>
  .overview {
    flex-basis: 70%;
    min-width: 70vw;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
