//LeetCode No-> 231  Power of Two using recursion :

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.


function powerOfTwo(n){
    if(n==1) return true;
    if(n<1 || (n%2!=0)) return false;
    
    return powerOfTwo(n/2)
}

console.log(powerOfTwo(16))
console.log(powerOfTwo(24))












