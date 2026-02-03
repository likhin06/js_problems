// check if a year is a leap year
function LeapYear(year){
     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return "leap year"
    }
    return " not a leap year"
}
console.log(LeapYear(1700));
