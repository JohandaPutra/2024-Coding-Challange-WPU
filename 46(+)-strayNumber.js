// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function stray(numbers) {
    return numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]
}


  console.log(stray([1, 1, 2]))