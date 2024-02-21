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

<style lang="scss" scoped>
.heading {
  color: $dark-text;
}
.text {
  color: $dark-text;
}
</style>
