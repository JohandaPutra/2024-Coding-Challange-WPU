// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function SeriesSum(n)
{
    let result =0;
    for (let  i = 0; i < n; i++){
        result += 1 / (1 + i * 3)
    }
    return result.toFixed(2);
}


console.log(SeriesSum(0))