// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function rentalCarCost(d) {
    return d * 40 - (d>=7? 50 : d>=3? 20: 0);
  }

  console.log(rentalCarCost(2))