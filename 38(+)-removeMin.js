// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function removeSmallest(numbers) {
    return numbers.filter((el,i) => i !== numbers.indexOf(Math.min(...numbers)));
  }
console.log(removeSmallest([2, 2, 1, 2, 1, 1]))