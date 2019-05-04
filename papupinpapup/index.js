console.log('Hello');
var button = document.querySelector('.button');
var father  = document.querySelector('#father');

    function showhide() {
        button.addEventListener('click', function(e){
            e.preventDefault();
            if (father.classList.contains('hide')) {
                father.classList.remove('hide');
            }
            else {
                father.classList.add('hide');
            }
            
            console.log('print me');
        })
    };
    
    function showhideFather() {
        father.addEventListener('click', function(e) {
            e.preventDefault();
            if (father.classList.contains('hide')) {
                father.classList.remove('hide');
            }
            else {
                father.classList.add('hide');
            }
            
            console.log('father');
        })
    }
    
    showhide();
    showhideFather();
 //   https://habrahabr.ru/sandbox/54323/