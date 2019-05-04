//заповнення прогрес бару за час який вказує девелопер
function progressBar(time) {
  
  var start = 0;
  var proBar = document.querySelector('#user-progres');
  var time = Math.round(time*1000/100);
  var timerId = setInterval(function() {
    if (start > 100) {
      console.log('Finish');
      clearTimeout(timerId);
    }
    else {
     proBar.value = start; 
    }
    start++;
  }, time);
  
}
   
progressBar(10);