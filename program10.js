// print only the numbers that are both even and perfect squares

const n =20;
for(let i= 1; i<=n ; i++){
    if(i%2==0 && Number.isInteger(Math.sqrt(i))){
        console.log(i);
        
    }
}