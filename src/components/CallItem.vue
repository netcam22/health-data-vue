<script setup>
defineProps({
    title: String,
    content: Array
})
</script>

<template>
  <div class="item">
      <h2 class="heading">{{ title }}</h2>
      <p class = "text" v-for="(text, index) in content" :key="index" >
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.heading {
  color: #333333;
}
.text {
  color: #333333;
}
</style>
