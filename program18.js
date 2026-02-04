// print  right -angled start triangle

// let rows =5;
// let num = "*"
// for( let i =0 ; i <= rows ; i++){
//     console.log(num);
//     num = num + num[i]
//    }

// method 2
let n =6;
for( let i = 0 ; i<= n ; i++){
    let str = "";
    for( let j = 1 ; j <= i; j++){
        str = str +"*"
    }
    console.log(str);
}
