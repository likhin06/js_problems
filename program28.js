//print diamond pattern
let n=3;
for(let i=1;i<=n;i++){
    let str=""
    for(let j=1;j<=n-i;j++){
        str+=" "
    }
    for(let s=1;s<=2*i-1;s++){
        if(s===1|| s===2*i-1){

            str+="*";
        }else{
            str+=" "
        }
        }
      
        console.log(str);
    }
    

for(let i=n-1;i>=1;i--){
    let str=""
    for(let j=1;j<=n-i;j++){
        str+=" "
    }
    for(let s=1;s<=2*i-1;s++){
        if(s===1||s===2*i-1||i===n){

            str+="*";
        }else{
            str+=" "
        }
        }
        
       
    
    console.log(str);
    
}
