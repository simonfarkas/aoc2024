import * as fs from 'fs';

const rows = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' ').filter(Boolean).map(Number));

const left: number[] = rows.map(row => row[0]).sort((a, b) => a - b);
const right: number[] = rows.map(row => row[1]).sort((a, b) => a - b);

const totalDistance = left.reduce((total, leftVal, i) => {
    const distance: number = Math.abs(leftVal - right[i]);
    return total + distance;
}, 0);

console.log(totalDistance);
