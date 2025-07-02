// Sum of All Odd in an Array using Recursion 

function sumOdd(arr,index=0){
    
    if(index >= arr.length) return 0;
    isOdd = arr[index]%2!==0;
    if(isOdd){
        return arr[index] + sumOdd(arr,index+1);
    }else{
        return sumOdd(arr,index+1);
    }
   
}
const nums =[1,2,4,4,6,5,23]
console.log(sumOdd(nums))