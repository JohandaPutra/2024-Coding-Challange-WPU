// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// Sum Numbers
function sum (numbers) {
    return numbers.reduce((acc,curr) => acc += curr,0)
};

console.log(sum([1, 5.2, 4, 0, -1]))