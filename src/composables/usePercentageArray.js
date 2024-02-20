import useRandomData from "./useRandomData.js";

const usePercentageArray = (valuesPerChart, noOfCharts, refeshChartCount) => {

    const valuesArray = useRandomData(valuesPerChart, noOfCharts, refeshChartCount);

    const getTotals = (array) => array[0].map((_, i) => array.reduce((acc, _, j) => 
    acc + array[j][i], 0));

    const totals = getTotals(valuesArray);

    const COLORS = ["#1A8DDD", "#35DDB3", "#DDDC61", "#DD6844", "#BF71DD"];
    const OPTIONS_LABELS = ['Adherence', 'Combination therapy', 'Dosing', 'Guidelines', 'Safety', 'Other'];

    const percentageArray = valuesArray.map((item) => item.map((value, index) => {
                    return Math.floor(value/totals[index]*100);
            })
    );
    
    const fullPercentageArray = [...percentageArray, 
        getTotals(percentageArray).map(total => 100-total)];

    const chartDataArray = fullPercentageArray.map((item, i) => {
        return {
            backgroundColor: COLORS[i],
            label: OPTIONS_LABELS[i],
            data: item
        }
});

    return chartDataArray;
}
export default usePercentageArray;