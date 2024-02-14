// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// menggunakan reduce untuk menghitung average
function getGrade (...s) {
    const total = s.reduce((acc, curr) => acc+ curr) /3;
    return total >= 90 ? 'A' :
    total >= 80  ? 'B' :
    total >= 70 ? 'C':
    total >= 60 ? 'D' : 'F'
    
  }


  console.log(getGrade(70,70,100));