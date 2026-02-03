function electricBill(units){
    let total = 0;
    if (units <= 100){
       total = units * 5
    }
    else if(units <=200){
       total = (100 * 5) + (units - 100) * 7
    }
    else if(units <=300){
        total = (100 * 5 ) + (100 * 7) +(units - 200) * 10
    }
    return total
}
console.log(electricBill(230));
