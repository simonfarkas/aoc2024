import * as fs from 'fs';

const rows: string[] = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .filter(Boolean);

let total = 0;

const isIncreasing = (arr: number[]): boolean => {
    return arr.filter((num) => num > 0)
        .every((num, idx, arr) => {
            if (idx === 0) return true;
            return num > arr[idx - 1];
        });
}

const isDecreasing = (arr: number[]): boolean => {
    return arr.filter((num) => num > 0)
        .every((num, idx, arr) => {
            if (idx === 0) return true;
            return num < arr[idx - 1];
        });
}

for (let i = 0; i < rows.length; i++) {
    const row: number[] = rows[i].split(" ").map(n => Number(n));

    let isRowValid: boolean = true;

    for (let j = 0; j < row.length - 1; j++) {
        const diff: number = Math.abs(row[j] - row[j + 1]);
        if (diff > 3 || diff < 1) {
            isRowValid = false;
            break;
        }
    }

    const increasing: boolean = isIncreasing(row);
    const decreasing: boolean = isDecreasing(row);

    if (isRowValid && (increasing || decreasing)) total++;
}

console.log(total);
