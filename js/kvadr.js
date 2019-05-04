alert('Hello');
function kvadratne(a, b, c) {
    var result
    var D = (b*b) - (4 * a * c);
    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);
        result = ('x1' + '= ' + x1 + ", " + "x2" + '=' + x2);
    }else if (D === 0) {
        x1 = -b / (2*a);
        x2 = x1;
        result = ('x1' + '= ' + x1 + ", " + "x2" + '=' + x2);
    }else {
        result = ('Рішення не має');
    }
}
var result;
var a = Number(prompt('Введіть а яке не дорівнює - 0'));
var b = Number(prompt('Введіть - b'));
var c = Number(prompt('Введіть - c'));
kvadratne(a, b, c);
document.write(result);
