// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function bonusTime(salary, bonus) {
    return '\u00A3'+ salary * (bonus ? 10 : 1)
    }

console.log(bonusTime(10000, true))