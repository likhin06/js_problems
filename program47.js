function findSecondSmallest(arr) {
    if (arr.length < 2) return "Not enough elements";

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } 
        else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest value";
    }

    return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 20, 8])); // 8