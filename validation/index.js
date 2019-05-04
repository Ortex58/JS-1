function form(){
var form  = document.createElement('form');
    form.setAttribute('name', 'login');
    form.setAttribute('action', 'google.com');
document.body.appendChild(form);

var newinput = document.createElement('input');
    newinput.setAttribute('type', 'text');
    newinput.setAttribute('name', 'age');
form.appendChild(newinput);

var newinput2 = document.createElement('input');
    newinput2.setAttribute('type', 'text');
    newinput2.setAttribute('name', 'username');
form.appendChild(newinput2);

var newinput3 = document.createElement('input');
    newinput3.setAttribute('type', 'text');
    newinput3.setAttribute('name', 'date');
form.appendChild(newinput3);

var newinput4 = document.createElement('input');
    newinput4.setAttribute('type', 'submit');
    newinput4.setAttribute('value', 'Validate Me');
form.appendChild(newinput4);
}
form();
//https://gist.github.com/itspoma/ba11153f0f79d77f3361f4973e348ae7

