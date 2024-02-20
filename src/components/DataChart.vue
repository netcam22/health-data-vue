<script setup>
import {ref, computed} from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import usePercentageArray from './../composables/usePercentageArray.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const OPTIONS_LABELS = ref(['Adherence', 'Combination therapy', 'Dosing', 'Guidelines', 'Safety', 'Other']);
const LEGEND_LABELS = ref(['Avg. all', 'Cautious', 'Complacent', 'Confident']);

const refeshChartCount = ref(0);

const optionsData = computed(() => usePercentageArray(
    OPTIONS_LABELS.value.length-1, LEGEND_LABELS.value.length, refeshChartCount.value));

const chartData = computed(() => {
    return {
        labels: LEGEND_LABELS.value,
        datasets: optionsData.value
    }
});

const myStyles = computed(() => {
    return {
        height: "38vw",
        width: "68vh",
        position: 'relative',
    }
}
)

const chartOptions = computed(() => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 20,
        indexAxis: 'y',
        elements: {
            bar: {
                pointStyle: 'rectRot'
            }
        },
        scales: {
            x: {
                display: false,
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: true,
                stacked: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                backgroundColor: "#fff",
                yAlign: "top",
                bodyColor: "black",
                bodyFont: {
                    size: 20
                },
                callbacks: {
                    label: ((tooltipItems) => {
                        console.log(tooltipItems)
                        return `${tooltipItems.formattedValue}%`
                    }),
                    title: () => {return null}
                }
            }
        }
    }
});

function updateDataValues() {
    refeshChartCount.value = refeshChartCount.value+1;
}

</script>

<template>
    <div class = chart-container>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        :styles="myStyles" 
    />
    <button @click="updateDataValues">Update data</button>
</div>
</template>

<style lang="scss" scoped>

.chart-container {
    position: relative;
    height: 40vh;
    width: 70vw;
    padding: 2vw;
}

</style>
