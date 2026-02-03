//check if a character is uppercase, lowercase, digit, or special character
function Ischar(char){
    if(char >= "A" && char <= "Z"){
        return "UpperCase"
    }else if( char >= "a" && char <="z"){
        return "Lowercase"
    }else if( char >= "0" && char  <= "9"){
        return "digit"
    }
    return "special character"

    
}
console.log(Ischar("a"));
console.log(Ischar("B"));
console.log(Ischar("4"));
console.log(Ischar("@"));