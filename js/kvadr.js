alert('Hello');
function kvadratne(a, b, c) {
    var a = Number(prompt('Введіть а яке не дорівнює - 0'));
    var b = Number(prompt('Введіть - b'));
    var c = Number(prompt('Введіть - c'));
    var D = (b*b) - (4 * a * c);
    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);
        document.write('x1' + '= ' + x1 + ", " + "x2" + '=' + x2);
    }else if (D === 0) {
        x1 = -b / (2*a);
        x2 = x1;
        document.write('x1' + '= ' + x1 + ", " + "x2" + '=' + x2);
    }else {
        document.write('Рішення не має');
    }
}
var a, b, c;
var result = kvadratne(a, b, c);