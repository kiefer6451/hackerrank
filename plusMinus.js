'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let numPositive = 0; 
    let numNegative = 0;
    let numZero = 0;
    arr.forEach(val => {
        if (val > 0){
            numPositive++;
        }else if (val < 0){
            numNegative++;
        }else{
            numZero++; 
        }
    });
    console.log((numPositive/arr.length).toFixed(6));
    console.log((numNegative/arr.length).toFixed(6));
    console.log((numZero/arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}