/*function hidener() {
    var elem = document.getElementById('tekst');
    elem.className = 'hide';
}
function hideButton() {
    this.className = 'hide';
}*/

//btn.addEventListener("click", hidener); //ховає блок
//btn.addEventListener("click", hideButton); //ховає сама себе
//http://learn.javascript.ru/introduction-browser-events
var element = document.querySelector('.show');
var button = document.querySelector('button');
button.addEventListener('click', function(event){
   event.preventDefault();
   setTimeout(function(){
    if (element.className === 'show') {
        element.classList.remove('show');
        element.classList.add('hide');    
   }
   else {
       element.classList.remove('hide');
       element.classList.add('show');
   }    
   },1000);
   
   
});