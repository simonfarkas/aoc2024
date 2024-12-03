import * as fs from 'fs';

const input: string = fs.readFileSync('input.txt', 'utf8').trim();
// i stole this
const regex: RegExp = /mul\((\d+),\s*(\d+)\)/ig; 
const results: number[] = [];
let matches: RegExpExecArray | null;

while ((matches = regex.exec(input)) !== null) {
  const num = Number(matches[1]) * Number(matches[2])
  results.push(num);
}

let total = 0;

for(let num of results) total+=num; 

console.log(total);
