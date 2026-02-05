//print butterfly pattern
let n =5;
for(let i=1;i<=n;i++){
 let str= ""
 for(let j=1;j<=i;j++){
     str += "*"
 }
     for(let s= 1; s<= 2*(n-i);s++){
        str +=" "
     }
     for( let j=1;j<=i;j++){
        str+= "*"
     }
    
 console.log(str);
 
}

for(let i=n;i>=1;i--){
 let str= ""
 for(let j=1;j<=i;j++){
     str += "*"
 }
     for(let s= 1; s<= 2*(n-i);s++){
        str +=" "
     }
     for( let j=1;j<=i;j++){
        str+= "*"
     }
    
 console.log(str);
 
}