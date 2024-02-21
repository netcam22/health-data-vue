import useRandomData from "./useRandomData.js";
import { COLORS, OPTIONS_LABELS } from "@/data/chartData.js";

const usePercentageArray = (valuesPerChart, noOfCharts, refeshChartCount) => {

    const valuesArray = useRandomData(valuesPerChart, noOfCharts, refeshChartCount);

    const getTotals = (array) => array[0].map((_, i) => array.reduce((acc, _, j) => 
    acc + array[j][i], 0));

    const valuesPercentageArray = valuesArray.map((item) => item.map((value, index) => {
                    return Math.floor(value/getTotals(valuesArray)[index]*100);
            })
    );
    
    const percentageArrayWithOther = [...valuesPercentageArray, 
        getTotals(valuesPercentageArray).map(total => 100-total)];

    const chartDataArray = percentageArrayWithOther.map((item, i) => {
        return {
            backgroundColor: COLORS[i],
            label: OPTIONS_LABELS[i],
            data: item
        }
});

    return chartDataArray;
}
export default usePercentageArray;