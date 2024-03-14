// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function digPow(n, p){
    const k = ('' + n).split('').map((a,i) => Math.pow(a,i+p)).reduce((el,i) => el+=i);
    return k/n % 1 == 0? k/n : -1 ; 
  }

  console.log(digPow(46288, 3))