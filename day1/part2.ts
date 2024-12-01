import * as fs from 'fs';

const rows: number[][] = fs.readFileSync('testInput.txt', 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line: string) => line.split(' ').filter(Boolean).map(Number));

const left: number[] = rows.map(row => row[0]);
const right: number[] = rows.map(row => row[1]);

const rightCounts: Record<number, number> = {};
for (const num of right) {
    rightCounts[num] = (rightCounts[num] || 0) + 1;
}

const numbers: number[] = [];
for (let i = 0; i < left.length; i++) {
    const leftNum = left[i];
    numbers.push(leftNum * (rightCounts[leftNum] || 0));
}

let sum = 0;
for (const num of numbers) sum += num;

console.log(sum);
