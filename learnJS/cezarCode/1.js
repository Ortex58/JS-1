let input = document.getElementById('in');
let outcharCode = document.getElementById('outCharCode');
let outCezar = document.getElementById('outCezar');
let outDecodCezar = document.getElementById('outDecodCezar');
const offset = 3;
let code;

input.oninput = function(){
    let input_Str = this.value;
    let out = '';
    for (let i = 0; i < input_Str.length; i++) {
        code = input_Str.charCodeAt(i);
        code = code + offset;
        outcharCode.innerHTML = code;
        out += String.fromCharCode(code);
    }
    outCezar.innerHTML = out;
    
    //Декодування шифру Цезаря
    console.log(out);
    let outDecoded = '';
    let codeDecoded;
    
    for (let j = 0; j < out.length; j++) {
        codeDecoded = out.charCodeAt(j);
        codeDecoded = codeDecoded - offset;
        outDecoded += String.fromCharCode(codeDecoded);
        
    }
    outDecodCezar.innerHTML = outDecoded;
};