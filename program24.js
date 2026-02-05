//  print alternating binary triangle
let n = 5;
for(let i = 1; i<=n ;i++){
    let str =""

for(let j =1 ; j<=i ;j++){
    if( (i+j) %  2=== 0 ){

        str += "1"
    }else{
        str +="0"
    }
}
console.log(str);

}