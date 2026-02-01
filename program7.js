//print the sum of all odd number up to n
let n = 10 ;
let sum = 0;
for(let i = 0; i<=n ; i++){
    if(i%2==1){
      sum +=i;
    }
}

console.log(sum);
