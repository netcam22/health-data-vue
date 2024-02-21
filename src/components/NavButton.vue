<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    route: String,
    text: String
})
</script>

<template>
    <RouterLink class="link" :to="`/${route}`">
        <button class="link__button">
            {{ text }}
        </button>
    </RouterLink>
</template>

<style lang="scss" scoped>

.link{

    &:hover {
    background-color:  $sidebar-hover;
    font-weight: bold;
    }

    &__button {
    color: $white;
    background-color: transparent;
    text-decoration: none;
    font-size: 36px;
    margin: 2% 0;
    padding: 0 5%;
    font-weight: normal;
    opacity: 100%;
    border: none;
    cursor: pointer;
    }
}

</style>