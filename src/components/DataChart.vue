<script setup>
import {computed} from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = computed(() => {
    return {
        labels: [ 'Adherence', 'Combination therapy', 'Dosing', 'Guidelines', 'Safety', 'Other'],
        datasets: [ { data: [19, 23, 17, 21, 19, 1] } ]
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
