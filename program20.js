// print pyramid pattern
// let row = 5;
// for ( let i = 1;i <= 2*row -1 ; i+=2){
//     let str = ''
//     const currentRow= (i+1)/ 2
//     for( let j = 1 ; j<= row+ currentRow -1; j++){
//         if(j <=row - currentRow){
//             str += " "
//         }else{

//             str +="*"
//         }
//     }
    
//     console.log(str);
    
// }

// method 2
let n = 5;
 
for( let i = 1; i<=n ; i++){
    let str = ""

for (let s = 1; s<=n-i;s++){
    str += " ";
}
for(let j =1; j<=2*i-1;j++){
     str += "*"
}
console.log(str);
}