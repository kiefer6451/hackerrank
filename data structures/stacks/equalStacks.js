'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
    h1 = h1.reverse();
    h2 = h2.reverse();
    h3 = h3.reverse();
    let stackSums = [0, 0, 0];
    h1.forEach(el => stackSums[0] += el); 
    h2.forEach(el => stackSums[1] += el); 
    h3.forEach(el => stackSums[2] += el); 
    while (!stackSums.includes(0)){
        if (stackSums[0] == stackSums[1] && stackSums[0] == stackSums[2])
            return stackSums[0];
        else{
            switch(stackSums.indexOf(Math.max(...stackSums))){
                case 0:
                    stackSums[0] -= h1.pop();
                    break;
                case 1:
                    stackSums[1] -= h2.pop();
                    break;
                case 2:
                    stackSums[2] -= h3.pop(); 
            }
        }
    }
    return 0; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}