// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function dnaStrand(dna){
    const  complementary = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }
    return [...dna].map((el,i) => complementary[dna[i]]).join('')
  }

console.log(dnaStrand("AAAA"))