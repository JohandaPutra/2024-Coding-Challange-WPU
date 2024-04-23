// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function oddOrEven(array) {
    return (array.reduce((a,b) => a+=b,0)) % 2 ? 'odd' : 'even';
}


console.log(oddOrEven([]))