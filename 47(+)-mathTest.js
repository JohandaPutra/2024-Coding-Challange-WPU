// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function numberProperty(n){
    var prime = n > 1, i = 2, cap = Math.sqrt(n);
    while (i <= cap) {
      if (n % i++ == 0) {
        prime = false;
        break;
      }
    }
    return [prime, !(n & 1), !(n % 10)];
  };


console.log(numberProperty(5))