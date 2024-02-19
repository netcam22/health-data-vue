<script setup>
import CallItem from './CallItem.vue';
defineProps({
    title: String,
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
    <CallItem
    v-for="(item, key, index) in data"
    :key="index"
    :title="key"
    :content="item"
    />
</template>
