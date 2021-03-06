/**
 * Created by eugene on 07/21/17.
 */

var LIST = [
    {
        city: 'Lviv',
        population: '727968'
    },
    {
        city: 'Kyiv',
        population: '2906569'
    },
    {
        city: 'Paris',
        population: '2220445'
    },
    {
        city: 'Odesa',
        population: '1010848'
    },
    {
        city: 'Ternopil',
        population: '218022'
    },
    {
        city: 'Sidney',
        population: '3908643'
    }
];
var h1;

//Створення елементу input для введення пошуку
var input = document.createElement('input');
input.setAttribute('name', 'search');
input.setAttribute('id', 'search');
input.setAttribute('placeholder', 'Введіть місто');
input.setAttribute('type', 'text');
document.body.appendChild(input);
//Створюємо список
var ul = document.createElement('ul');
ul.setAttribute('id', 'list');
document.body.appendChild(ul);
ul.classList.add('hiden');
//При нажиманні в інтпут створюються списки міст більше одного мільйона
var search = document.getElementById('search');


input.addEventListener('click', function(e) {
    e.preventDefault();
            while (ul.hasChildNodes(h1)) {
            ul.removeChild(ul.lastChild);
           
             }
            for (var i = 0; i < LIST.length; i++) {

                if (LIST[i].population > 1000000) {
                    console.log(LIST[i].city, (LIST[i].population/1000000).toFixed(1));
                    // if (document.search.search(myExp) != -1) 
                    var h1 = document.createElement('h1');
                    h1.setAttribute('class', 'noSelected');
                    ul.appendChild(h1);
                     h1.textContent = LIST[i].city + ' ' + 'населення ' + (LIST[i].population/1000000).toFixed(1) + 'млн.';

                }
            
        }
addclassActive(); 

    search.addEventListener('keyup', function(e) {
        e.preventDefault();
        while (ul.hasChildNodes(h1)) {
            ul.removeChild(ul.lastChild);
            var searchField = search.value;
            var myExp = new RegExp(searchField, 'i');
        }
        for (var i = 0; i < LIST.length; i++) {

            if (LIST[i].city.search(myExp) != -1) {

                if (LIST[i].population > 1000000) {
                    //console.log(LIST[i].city, LIST[i].population);
                    // if (document.search.search(myExp) != -1) 
                    var h1 = document.createElement('h1');
                    h1.setAttribute('class', 'noSelected');
                    ul.appendChild(h1);
                    h1.textContent = LIST[i].city + ' ' + 'населення ' + (LIST[i].population/1000000).toFixed(1) + 'млн.';

                }
            }
            addclassActive(); 
        }


    })
    
            if (ul.classList == 'hiden') {
            ul.classList.remove('hiden');
            }
            else {
                ul.classList.add('hiden');
            }

})

//Зміна класу при кліку на h1
function addclassActive() {
    var items = document.querySelectorAll('.noSelected');

    for (var i = 0; i < items.length; i++) {
        items.item(i).onclick = function(e) {
            e.preventDefault;
            //input.value = items.value;
            this.classList.add('active');
            input.value = this.outerText;
            ul.classList.add('hiden');
            //alertHello();
        }
    }
}
function alertHello() {
   itemActive = document.querySelectorAll('.active');
    for (var i = 0; i < itemActive.length; i++) {
            var itemActive = document.querySelectorAll('.active');
            itemActive.item(i).onclick = function(e) {
            e.preventDefault;
            alert('hello!');
        }
    } 
}


