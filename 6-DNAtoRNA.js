// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] === 'T') {
//             rna += 'U';
//         }else{
//             rna += dna[i];
//         }
//     }
//     return rna;
// }

// Menggunakan function ternari   
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//          rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return rna;
// }

// menggunakan  .split .map .join 
//  const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('');
 
//  menggunakan replace dan regex 
//  const DNAtoRNA = (dna) => dna.replace(/T/g , 'U');

//  menggunakan replaceAll
 const DNAtoRNA = (dna) => dna.replaceAll('T' , 'U');


  console.log(DNAtoRNA("TTTT")); 