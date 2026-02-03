// check triangle type using sides
function IsTriangleSides(a,b,c){
    if(a+b<=c || b+c<=a || c+a <=b ){
        return "not a valid triangle"
    }else if(a === b && b === c){
        return " eqalateral"
    }else if ( a === b || b=== c || c=== a){
        return " isosceles"
    }else{
        return "Scalene triangle"
    }
}
console.log(IsTriangleSides(3,3,4));
console.log(IsTriangleSides(3,5,4));
console.log(IsTriangleSides(3,2,5));
console.log(IsTriangleSides(3,3,3));