const usePercentageArray = (dataValues) => {

    const valuesTotal = dataValues.reduce((count, value) => count+value, 0);
    return dataValues.map(value => Math.ceil(value/valuesTotal*100));
}
export default usePercentageArray;