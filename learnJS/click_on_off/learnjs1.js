//Добавити клас borderer до картинок і забрати клас з картинок.
// 1
//var img = document.querySelectorAll("img");
/*for (var i = 0; i < img.length; i++) {
  img[i].onclick = function(){
    this.classList.add('bordered');
  };
}*/
// 2
document.onclick = function (event) {
  console.log(event);
  event = event || window.event;
  if (event.target.tagName == 'IMG') {
    if (event.target.classList.contains('bordered')) {
      event.target.classList.remove("bordered");
    }
    else event.target.classList.add("bordered");
  }
}