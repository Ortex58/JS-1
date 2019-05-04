document.querySelector('.square').onmousemove = function(event) {
    event = event || window.event;
    document.querySelector('.osX').innerHTML = event.offsetX;
    document.querySelector('.osY').innerHTML = event.offsetY;
}
    
