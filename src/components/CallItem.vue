<script setup>
defineProps({
    title: String,
    content: Array
})
</script>

<template>
      <h2 class="heading">{{ title }}:</h2>
      <ul class = "call-item">
      <li class = "call-item__text" v-for="(text, index) in content" :key="index" >
      {{ text }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>

.heading {
  color: $dark-text;
  margin: 5px 10px 0 20px;
  padding: 0;
  font-size: 36px;
  }
.call-item {
  padding: 0 0 0 5px;
  margin: 0;
  &__text {
    color: $dark-text;
    margin: 0 5px 0 5px;
    padding: 0;
    line-height: 1.1;
    font-size: 25px;
    list-style-type: none;
  }
}

</style>
