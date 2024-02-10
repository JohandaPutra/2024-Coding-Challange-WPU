function smash (words) {
    let result = '';
    for(let i=0;i<words.length;i++){
        result += words[i];
        if (i != words.length-1){   
            result += ' ';
        };  
    };
    return result;
};




// menggunakan function join pada array untuk menggabungkan array
// function smash (words) {
//     return words.join(' ');
//  };

// menggunakan join dan function expression 
// const smash = (words) => words.join(' ');


 console.log(smash(['hello', 'world', 'this', 'is', 'great']));