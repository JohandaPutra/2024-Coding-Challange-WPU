// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// function removeExclamationMarks(s) {
//     return [...s].filter((el,i) => s[i] != '!'  ).join('')
//   }

  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

console.log(removeExclamationMarks("Hello World!"))