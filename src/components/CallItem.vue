<script setup>
defineProps({
    title: String,
    content: Array
})
</script>

<template>
  <h2 class="call__heading">{{ title }}:</h2>
  <div class = "call__item">
    <p class = "call__text" v-for="(text, index) in content" :key="index" >
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>

.call {
  &__heading {
    color: $dark-text;
    margin: 0 10px 0 $standard-spacing;
    padding: 0;
    font-size: $heading-two-size;
  }
  &__item {
    padding: 0 0 0 5px;
    margin: 0;
  }
  &__text {
    color: $dark-text;
    margin: 0;
    padding: 0;
    line-height: 1.1;
    font-size: $paragraph-font-size;
    list-style-type: none;
  }
}

</style>
