// check if a number is positive ,negtive ,or zero

function numberSign(num){
    if(num >0){
        return 'positive'
    }
    else if(num < 0){
        return 'negative'
    }
    return 'Zero'
}
console.log(numberSign(9));
