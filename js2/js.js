pushOn.onclick = function(){
  setTimeout(function(){
      if (box.className == 'box') {
          box.className = 'show';
      } else {
          box.className = 'box';
      }
  },1000)  
};