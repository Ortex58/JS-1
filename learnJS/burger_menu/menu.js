document.querySelector('#result').onclick = getResult;

getResult();

function getResult() {
    var kkal = 0;
    var cost = 0;
    var menu = document.querySelectorAll('.menu');
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
            cost += parseFloat(menu[i].getAttribute('data-cost'));
        }
        document.querySelector('#kkal').innerHTML = kkal;
        document.querySelector('#cost').innerHTML = cost;
    }
}