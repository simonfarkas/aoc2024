import * as fs from 'fs';

const input: string = fs.readFileSync('input.txt', 'utf8').trim();
// i stole this
const regex: RegExp = /do\(\)|don't\(\)|mul\((\d+),\s*(\d+)\)/ig;
let enabled = true; 
let total = 0;

let matches: RegExpExecArray | null; 
while ((matches = regex.exec(input)) !== null) {
  const match = matches[0];
  if (match === 'do()') {
    enabled = true;
  } else if (match === `don't()`) {
    enabled = false;
  }  

  if (match.startsWith('mul(') && enabled) {
    const num1: number = Number(matches[1]);
    const num2: number = Number(matches[2]);
    total += num1 * num2;
  }
}

console.log(total);
