<script setup>
defineProps({
    title: String,
    content: Array
})
</script>

<template>
      <h2 class="heading">{{ title }}:</h2>
      <div class = "call-item">
      <p class = "call-item__text" v-for="(text, index) in content" :key="index" >
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>

.heading {
  color: $dark-text;
  margin: 5px 10px 0 20px;
  padding: 0;
  font-size: 25px;
  margin-top: 5px;
  }
.call-item {
  &__text {
    color: $dark-text;
    margin: 0 10px 0 20px;
    padding: 0;
    line-height: 1.2;
    font-size: 20px;
  }
}

</style>
