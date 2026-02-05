//print hollow inverteed pyramid
let n =5;
for(let i = n; i>=1 ;i--){
    let str=""
    for(let j=n-i; j>=1;j--){
         str+= " "

    }for(let s =2*i-1; s>=1;s--){
       if(s===1 || s===2*i-1 || i===n){
        str+="*"
       }else{
        str+=" "
       }
    }
    console.log(str);
    
}