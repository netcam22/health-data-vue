<script setup>
import TheOverview from '@/components/TheOverview.vue';
const title = "Overview";
const overviewData = {
      Date: ["Tomorrow, 3pm", "18 February 2023"],
      Account: ["Dr. Clinton Ackerman"],
      Speciality: ["Respiratory therapist", "Assistive therapy"],
      Profiling: ["Confident"]
}
</script>

<template>
  <section class = "overview">
    <TheOverview :title="title" :data="overviewData"/>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .overview {
    flex-basis: 70%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
