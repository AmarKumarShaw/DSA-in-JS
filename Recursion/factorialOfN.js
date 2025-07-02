
// Factorial of N using Recursion

function fact(nums){
    if(nums<=0) return 1;
    return nums * (fact(nums-1))
}

console.log(fact(5))