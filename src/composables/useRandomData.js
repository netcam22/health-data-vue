const useRandomData = (valuesPerChart, noOfCharts, refeshChartCount) => {

	return Array(valuesPerChart).fill([]).map(() => 
    Array(noOfCharts).fill([]).map(() => 
    Math.floor(Math.random() * 10*valuesPerChart+refeshChartCount)));
}

export default useRandomData;