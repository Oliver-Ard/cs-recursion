/* Fibonacci Formula: "Fn = Fn-1 + Fn-2" 
-----------------------------------------
--Fibonacci Sequence using iteration-- */
function fibs(num) {
	if (typeof num !== "number") {
		return "Input needs to be a number!";
	}
	if (num < 2) {
		return "Input needs to be at least 2!";
	}
	// The Fibonacci Sequence starts with 0 and 1.
	const fibSeq = [0, 1];
	let fibNum;
	for (let i = 2; i < num; i, i += 1) {
		fibNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
		fibSeq.push(fibNum);
	}

	return fibSeq;
}

/* -----------------------------------------
--Fibonacci Sequence using recursion-- */
function fibsRec(num) {
	if (typeof num !== "number") {
		return "Input needs to be a number!";
	}
	if (num < 2) {
		return "Input needs to be at least 2!";
	}
	// Base Case
	if (num === 2) {
		return [0, 1];
	}
	// Recursively call the function until the base case was reached.
	const fibSeq = fibsRec(num - 1);

	const fibNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
	fibSeq.push(fibNum);

	return fibSeq;
}

export { fibs, fibsRec };
