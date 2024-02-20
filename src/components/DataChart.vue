<script setup>
import {computed} from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = computed(() => {
    return {
        labels: [ 'January', 'February', 'March', 'April' ],
        datasets: [ { data: [40, 20, 12, 10] } ]
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
