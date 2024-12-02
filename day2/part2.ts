import * as fs from 'fs';

const rows = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .filter(Boolean);

let total = 0;

const isIncreasing = (arr: number[]) => {
	return arr.filter((num) => num > 0)
	  .every((num, idx, arr) => {
	    if (idx === 0) return true;
	    return num > arr[idx - 1];
 	});	
}

const isDecreasing = (arr: number[]) => {
	return arr.filter((num) => num > 0)
	  .every((num, idx, arr) => {
	    if (idx === 0) return true;
	    return num < arr[idx - 1];
 	});	
}

const isRowSafeAfterRemove = (arr: number[]) => {
	let i = 0;
	while(i < arr.length - 2) {
		if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]) {
			arr.splice(i+1, 1)
			if(i > 0) i--
		}
		if(arr[i] > arr[i+1] && arr[i+1] < arr[i+2]) {
			arr.splice(i+1, 1)
			if(i > 0) i--
		}
		if(arr[i] === arr[i+1]) {
			arr.splice(i+1, 1)
			if(i > 0) i--
		}
		i++
	}
	return arr;
}

for(let i = 0; i < rows.length; i++) {
	const row = rows[i].split(" ").map(n => Number(n))
	let isRowValid = true;
	const safeRow = isRowSafeAfterRemove(row)
	for(let j = 0; j < safeRow.length - 1; j++) {
		const diff = Math.abs(safeRow[j] - safeRow[j+1])
		if(diff > 3 || diff < 1) {
			isRowValid = false;
			break;
		}
	}
	const increasing = isIncreasing(safeRow)
	const decreasing = isDecreasing(safeRow)
	console.log(`Row: ${safeRow}, the diff is ${isRowValid ? 'correct' : 'incorrect'}, ${increasing ? 'increasing' : "decreasing"	 }`)
	if(isRowValid && (increasing || decreasing)) total++;
}

console.log(total)
