function processData(input) {
    let stack = []; 
    let max = 0; 
    let linesFromMaxIndex = 0;
    input.split('\n').slice(1).forEach((line, i) => {
        switch(line[0]){
            case '1': 
                let newVal = parseInt(line.split(" ")[1]); 
                stack.push(newVal); 
                if (newVal > max){
                    max = newVal; 
                    linesFromMaxIndex = 0; 
                }else
                    linesFromMaxIndex++; 
                break;
            case '2': 
                stack.pop(); 
                if (--linesFromMaxIndex <= 0){
                    max = Math.max(...stack); 
                    lineFromMaxIndex = 0; 
                }                    
                break;
            case '3': console.log(max); 
        } 
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});