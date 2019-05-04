var count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
         count++;
}
switch(card) {      
    case 7:
    case 8:
    case 9:
         count = count + 0;
}
switch(card) {  
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
         count--;
  }
  
  

  
  // Only change code above this line
}
if (count > 0) {
  console.log(count + ' ' + 'Bet');
}

console.log(count + ' ' + 'Hold');

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');