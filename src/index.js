import { fibs, fibsRec } from "./modules/fibonacci.js";

// Print the Fibonacci Sequence using Iteration:
function printIterationFib() {
	console.log("Iteration:");
	console.log("----------------");
	console.log("Print 3 Fibonacci numbers:");
	console.log(fibs(3));
	console.log("----------------");
	console.log("Print 5 Fibonacci numbers:");
	console.log(fibs(5));
	console.log("----------------");
	console.log("Print 8 Fibonacci numbers:");
	console.log(fibs(8));
	console.log("----------------");
	console.log("Print 12 Fibonacci numbers:");
	console.log(fibs(12));
	console.log("----------------");
}
printIterationFib();
// Print the Fibonacci Sequence using Recursion:
function printRecursionFib() {
	console.log("Recursion:");
	console.log("----------------");
	console.log("Print 4 Fibonacci numbers:");
	console.log(fibsRec(4));
	console.log("----------------");
	console.log("Print 6 Fibonacci numbers:");
	console.log(fibsRec(6));
	console.log("----------------");
	console.log("Print 9 Fibonacci numbers:");
	console.log(fibsRec(9));
	console.log("----------------");
	console.log("Print 13 Fibonacci numbers:");
	console.log(fibsRec(13));
	console.log("----------------");
}
printRecursionFib();
