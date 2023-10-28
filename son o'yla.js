"use strict";
function sontop(x = 100) {
  let min = 1;
  let max = x;

  while (min !== max) {
    const taxmin = Math.floor((min + max) / 2);
    const javob = confirm(`Sizning oylagan soniz ${taxmin} shumi yoki bundan kattami yoki kichik`);
    if (javob === false) {
      max = taxmin - 1;
    } else if (javob === true) {
      min = taxmin + 1;
    } 
      else{
        break;
      }
  }
  console.log(min);
}

sontop();