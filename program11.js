// find the maximum of three numbers
// let a =10;
// let b =20;
// let c =5;
// let max;
//console.log(Math.max(a,b,c));

// method 2

function maxThree(a,b,c){
    let max;
    if(a>=b && a>=c){
        max=a
    }else if( b>=a && b>=c){
        max =b
    }else{
        max =c
    }
    return max
}
console.log(maxThree(5,5,3));

    
