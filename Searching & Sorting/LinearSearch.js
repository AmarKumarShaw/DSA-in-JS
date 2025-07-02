// Linear Search 
const arr = [1,12,34,54,34]

function linear(num){
    for(let i=0;i<arr.length;i++){
    if(arr[i]==num)
    return i;
}
}

console.log(linear(34))