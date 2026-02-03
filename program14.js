// check if a character is vowel or  consonent 
let char='4';
const charlowerCase= char.toLowerCase()
if(charlowerCase=='a' || charlowerCase=='e'||charlowerCase=='i' || charlowerCase=='o'||charlowerCase =='u'){
    console.log(char,"is an vowel")
}
else if(/[a-z]/.test(charlowerCase)){
    console.log(char,"is an consonant")
}else{
    console.log("not a valid alphabetic");
    
}