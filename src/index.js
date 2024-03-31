import { fibs, fibsRec } from "./modules/fibonacci.js";
import mergeSort from "./modules/mergeSort.js";

// Print the Fibonacci Sequence using Iteration:
function printIterationFib() {
	console.log("Iteration:");
	console.log("----------------");
	console.log(`Print 3 Fibonacci numbers: ${fibs(3)}`);
	console.log("----------------");
	console.log(`Print 5 Fibonacci numbers: ${fibs(5)}`);
	console.log("----------------");
	console.log(`Print 8 Fibonacci numbers: ${fibs(8)}`);
	console.log("----------------");
	console.log(`Print 12 Fibonacci numbers: ${fibs(12)}`);
	console.log("----------------");
	console.log("----------------");
}
printIterationFib();

// Print the Fibonacci Sequence using Recursion:
function printRecursionFib() {
	console.log("Recursion:");
	console.log("----------------");
	console.log(`Print 4 Fibonacci numbers: ${fibsRec(4)}`);
	console.log("----------------");
	console.log(`Print 6 Fibonacci numbers: ${fibsRec(6)}`);
	console.log("----------------");
	console.log(`Print 9 Fibonacci numbers: ${fibsRec(9)}`);
	console.log("----------------");
	console.log(`Print 13 Fibonacci numbers: ${fibsRec(13)}`);
	console.log("----------------");
	console.log("----------------");
}
printRecursionFib();

// Print Sorted Arrays using the Merge Sort Algorithm:
function printSortedArrays() {
	const array1 = [3, -1, -23, 3, 13, 8, 56, 5, 0, 1, 45];
	const array2 = [123, 6, 44, 98, 432, 234];
	const array3 = [987, 468, 237, 322, 8, 43, 245, -1];

	console.log("Merge Sort Algorithm:");
	console.log("----------------");
	console.log("Example 1:");
	console.log("----------------");
	console.log(`Original Array: ${array1}`);
	console.log(`Sorted Array: ${mergeSort(array1)}`);
	console.log("----------------");
	console.log("Example 2:");
	console.log("----------------");
	console.log(`Original Array: ${array2}`);
	console.log(`Sorted Array: ${mergeSort(array2)}`);
	console.log("----------------");
	console.log("Example 3:");
	console.log("----------------");
	console.log(`Original Array: ${array3}`);
	console.log(`Sorted Array: ${mergeSort(array3)}`);
	console.log("----------------");
}

printSortedArrays();
