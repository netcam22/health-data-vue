const useRandomData = (arrayLength) => {

	return Array.from({ length: arrayLength }, 
        () => Math.floor(Math.random() * 10*arrayLength+1));
}

export default useRandomData;