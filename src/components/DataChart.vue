<script setup>
import {ref, computed} from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);
import usePercentageArray from './../composables/usePercentageArray.js';
import { OPTIONS_LABELS, LEGEND_LABELS } from '@/data/chartData';

defineProps({
    chartTitle: String,
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const OPTIONS = ref(OPTIONS_LABELS);
const LEGEND = ref(LEGEND_LABELS);

const refeshChartCount = ref(0);

const optionsData = computed(() => usePercentageArray(
    OPTIONS.value.length-1, LEGEND.value.length, refeshChartCount.value));

const chartData = computed(() => {
    return {
        labels: LEGEND.value,
        datasets: optionsData.value
    }
});

const chartStyles = {
        height: "38vw",
        width: "68vh",
        position: 'relative',
}

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
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 8,
                bottom: 8
            },
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
                display: false,
                stacked: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                return context.chart.data.labels[context.dataIndex];
                },
                font: {
                    size: 18,
                    color: "#000"
                },
                anchor: "start",
                align: -45,
                offset: "10",
                clip: false,
                display: function(context) {
                    return context.datasetIndex === 0;
                }
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 18
                    },
                    padding: 10
                },
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                backgroundColor: "#fff",
                yAlign: "top",
                bodyColor: "black",
                bodyFont: {
                    size: 18
                },
                callbacks: {
                    label: ((tooltipItems) => {
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
    <div class = "chart">
    <h2 class = "chart__heading">{{ chartTitle }}</h2>
    <div class = chart__container>
        <button class = "chart__button" @click="updateDataValues">Refresh data</button>
        <Bar
        aria-label="Detailing topic breakdown"
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
            :styles="chartStyles" 
        /> 
    </div>
</div>
</template>

<style lang="scss" scoped>

.chart {
    &__heading {
        font-size: $heading-two-size;
        margin: 30px 10px 0 $standard-spacing;
        padding: 0;
        @include respond-medium {
            margin: 20px 10px 0 $standard-spacing;
        }
    }
    &__container {
        position: relative;
        height: 360px;
        min-width: 60vw;
        flex-basis: 60%;
        flex-grow: 3;
        padding: 10px;
    }
    &__button {
        background-color: $white;
        border: 1px solid $dark-text;
        padding: 5px;
        font-size: 15px;
        margin: 2px 2px 2px $standard-spacing;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: $global-grey;
        }
    }
}

</style>
