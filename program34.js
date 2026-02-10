//generate all possible numbers
let arr = [4, 3, 2];

function generatePermutations(nums, current = [], used = []) {
    if (current.length === nums.length) {
        console.log(current.join(""));
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        current.push(nums[i]);

        generatePermutations(nums, current, used);

        current.pop();
        used[i] = false;
    }
}

generatePermutations(arr);
