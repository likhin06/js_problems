// print inverted  pymarmid 
let n = 5;
for( let i = n ; i>=1 ;i--){
    let str=""
    for(let s=n-i;s>=1;s--){
        str+=" "
    }
    for(let j=2*i-1;j>=1;j--){
        str+= "*"
    }
    console.log(str);
}