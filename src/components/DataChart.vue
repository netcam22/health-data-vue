<script setup>
import {ref, computed} from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import usePercentageArray from './../composables/usePercentageArray.js';
import useRandomData from './../composables/useRandomData.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const OPTIONS_LABELS = ref(['Adherence', 'Combination therapy', 'Dosing', 'Guidelines', 'Safety', 'Other']);
const dataValues = ref([14, 23, 35, 24, 22, 3]);
const optionsData = computed(() => usePercentageArray(dataValues.value));

const chartData = computed(() => {
    return {
        labels: OPTIONS_LABELS.value,
        datasets: [ { data:  optionsData.value} ]
    }
});
const chartOptions = computed(() => {
    return {
        responsive: true
    }
});

function updateDataValues() {
    console.log("data values", dataValues.value);
    dataValues.value = useRandomData(OPTIONS_LABELS.value.length);
}

</script>

<template>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
    <button @click="updateDataValues">Update data</button>
</template>
