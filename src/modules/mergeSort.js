// --Merge Sort Algorithm --
function merge(leftArray, rightArray) {
	const resultArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Check the conditions for merging
	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			resultArray.push(leftArray[leftIndex]);
			leftIndex += 1;
		} else {
			resultArray.push(rightArray[rightIndex]);
			rightIndex += 1;
		}
	}

	return resultArray
		.concat(leftArray.slice(leftIndex))
		.concat(rightArray.slice(rightIndex));
}

function mergeSort(array) {
	if (!Array.isArray(array)) {
		return "Input needs to be an array!";
	}

	const arrLength = array.length;
	// Base case
	if (arrLength <= 1) {
		return array;
	}
	// We need to split the original array into two equal arrays.
	const middle = arrLength / 2;
	const leftArray = array.slice(0, middle);
	const rightArray = array.slice(middle);

	// Recursively call the function for every array until the base case is reached.
	const sortedLeft = mergeSort(leftArray); // Capture sorted left sub-array
	const sortedRight = mergeSort(rightArray); // Capture sorted right sub-array

	// Helper function to merge back the array;
	return merge(sortedLeft, sortedRight);
}

export default mergeSort;
