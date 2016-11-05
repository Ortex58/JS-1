//alert('Hello');
//console.log('Hello');
//document.write('Hello');
/*var  year = Number(prompt('Input your year'));
var month = Number(prompt('Month'));
var day = Number(prompt('Day'));
var sum= add(year, month, day);
var text = 'Your magic namber: ';
var result = text + sum;
document.write(result);

function add(a, b, c) {
    var result = a + b + c;
    return result;
}
*/

function tellAge(age) {
    if (age < 18) {
        return 'You are kid';
    } else if(age > 80) {
        return 'You are old';
    } else {
        return 'You are adult';
    }
}

/*var age = Number(prompt('Tell your age: '));
var result = tellAge(age);
document.write(result);*/
var result = Math.sqrt(25);
document.write(result);