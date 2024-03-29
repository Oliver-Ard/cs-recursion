import { fibs } from "./modules/fibonacci.js";

function printIterationFib() {
	console.log("Print the Fibonacci Sequence using iteration:");
	console.log("----------------");
	console.log("Examples:");
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
