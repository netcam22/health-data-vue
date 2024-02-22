<script setup>
import {ref} from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DONUT_TOTAL = 28;
const randomNumber = ref(Math.floor(Math.random() * DONUT_TOTAL) + 1);

const donutData = {
datasets: [{
        backgroundColor: ['#DDDDDD', '#F68B15'],
        data: [randomNumber.value, DONUT_TOTAL-randomNumber.value]
    }]
}

const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "90%",
    radius: "90%",
    plugins: {
        tooltip: {
            enabled: false
        },
        datalabels: {
                formatter: function(value) {
                return value.toString()+"/28";
                },
                color: "#666666",
                anchor: "start",
                align: "top",
                font: {
                    size: 30,
                    family: "Montserrat"
                },
                offset: "0",
                clip: false,
                display: function(context) {
                    return context.dataIndex === 1;
                }
            },
    }
}

const donutStyles = {
        position: 'relative'
}

</script>

<template>
    <div class = "donut-container" aria-labelledby="call-donut">
        <Doughnut :data="donutData"
        :options="donutOptions" 
        :styles="donutStyles" />
    </div>
</template>

<style lang="scss" scoped>

.donut-container {
    position: relative;
    min-width: 30vw;
    flex-basis: 30%;
    flex-grow: 3;
    padding: 0;
}
</style>
