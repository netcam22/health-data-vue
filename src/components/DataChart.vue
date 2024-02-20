<script setup>
import {ref, computed} from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const optionsLabels = ref([ 'Adherence', 'Combination therapy', 'Dosing', 'Guidelines', 'Safety', 'Other']);
const optionsData = ref([19, 23, 17, 21, 19, 1]);

const chartData = computed(() => {
    return {
        labels: optionsLabels.value,
        datasets: [ { data:  optionsData.value} ]
    }
});
const chartOptions = computed(() => {
    return {
        responsive: true
    }
});
</script>

<template>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>
