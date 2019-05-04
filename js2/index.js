/*push.onclick = function(){
   setTimeout(function(){
        var on = document.getElementById('box');
        on.className = 'show';
   },1000);
    
};

pushOn.onclick = function(){
  setTimeout(function(){
      var off = document.getElementById('box');
      off.className = 'box';
  },1000);  
};*/

push.onclick = function(){
    setTimeout(function(){
        if (box.className == 'box') {
            box.className = 'show';
        }
            
        else{
            box.className = 'box';
        }
        },1000);
};