// Binary Search using Algorithm 
// Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]


function binarySearch(arr,target){
    let left = 0;
    let right =arr.length-1;
    let mid = Math.floor(arr.length)/2
    
    while(right =>low){
      
        
        if(arr[mid] ==target){
            console.log("Data Found Index and Value is", mid, arr[mid])
            return mid
            
        }
          if(target >mid){
            left = mid+1;
            
            
        }
        if(target<arr[mid]){
            right = mid-1
        }
     
    }
    
}

console.log(binarySearch(arr,23))

