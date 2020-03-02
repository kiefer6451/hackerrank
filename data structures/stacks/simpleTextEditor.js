function processData(input) {
    let string = ''; 
    let stack = []; 
    input.split('\n').slice(1).forEach(line => {
        if (line.includes(' ')){
            let args = line.split(' ');
            switch (args[0]){
                case '1':
                    stack.push([1, args[1]]); 
                    string += args[1]; 
                    break;
                case '2':
                    stack.push([2, string.slice(string.length - args[1])]);
                    string = string.substring(0, string.length - args[1]);
                    break; 
                case '3':
                    console.log(string[args[1] - 1]);
                    break;  
            }
        }else{ // Undo operation
            let undo = stack.pop(); 
            if (undo[0] == 1){
                string = string.substring(0, string.length - undo[1].length);
            }else{
                string += undo[1]; 
            }
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