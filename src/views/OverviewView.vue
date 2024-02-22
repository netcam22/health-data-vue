<script setup>
import TheOverview from '@/components/TheOverview.vue';
import {title, callTitle, chartTitle, donutTitle, overviewData}
from '@/data/callData';
</script>

<template>
  <section class = "overview">
    <h1 class = "overview__heading">{{title}}</h1>
    <div class = "overview__container">
      <h2 id="call-title" class = "overview__sub-heading">{{ callTitle }}</h2>
      <h2 id="call-donut" class = "overview__sub-heading">{{ donutTitle }}</h2>
    </div>
    <TheOverview 
    :title="title" 
    :donutTitle="donutTitle"
    :chartTitle="chartTitle" 
    :data="overviewData"/>
  </section>
</template>

<style lang = "scss" scoped>
  .overview {
    flex-basis: 70%;
    min-width: 70vw;
    box-sizing: border-box;

    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__heading {
      font-size: $heading-one-size;
      margin: 20px 10px 20px 20px;
      padding: 0;
    }

    &__sub-heading {
      font-size: $heading-two-size;
      margin: 5px 10px 10px 20px;
      padding: 0;
      display: none;
      @include respond-small {
        display: block;
      }
    }
  }
</style>
