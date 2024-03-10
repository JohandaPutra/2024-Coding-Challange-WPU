// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function duplicateCount(text){
//     let texts = text.toLowerCase();
//     let count = [];
//     for (let i = 0;  i < text.length; i++) {
//         for (let j = i+1; j <= text.length; j++){
//             texts[i] == texts[j] ? count.push(texts[i]): '';
//         }
//     }
//     return count.filter((value,index) => count.indexOf(value) === index).length; 
// }

function duplicateCount(text){
    return text.toLowerCase().split('').reduce((a,b) =>  {a[b] = a[b]? a[b]+1 : 1;
    if (a[b] === 2) a.count++;
    return a;
    }, {count:0})
}



console.log(duplicateCount("Indivisibilities"))