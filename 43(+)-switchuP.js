// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function switchItUp(number){
    
    let result = '';
    switch (number) {
        case 1:
            result  = "One";
            break; 
        case 2:
            result  = "Two";
            break; 
        case 3:
            result  = "Three";
            break; 
        case 4:
            result  = "Four";
            break; 
        case 5:
            result  = "Five";
            break; 
        case 6:
            result  = "Six";
            break;
        case 7:
            result  = "Seven";
            break; 
        case 8:
            result  = "Eight";
            break; 
        case 9:
            result  = "Nine";
            break;
        default:
            result = "Zero";
            break;
    }
    return result;
    }

console.log(switchItUp(1));                   //