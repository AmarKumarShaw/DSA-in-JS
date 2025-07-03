// // Merging two sorted array 

// const arr1 = [2,4,5]
// const arr2 = [1,2,6]

// function mergeSortedArray(arr1,arr2){
    
    
//     function merge(left,right){
//         let mergedSortedArray =[];
//     let i=0;
//     let j=0;
//           while(i < arr1.length && j < arr2.length){
//         if(arr1[i]>arr2[j]){
//             mergedSortedArray.push(arr2[j])
//             j++;
//         }
//         else{
//               mergedSortedArray.push(arr1[i])
//               i++;
//         }
        
//     }
//     while(i<arr1.length){
//             mergedSortedArray.push(arr1[i]);
//         }
//         while(j<arr2.length){
//             mergedSortedArray.push(arr2[j]);
//         }
//     return mergedSortedArray;
//     }
// }

// console.log(mergeSortedArray(arr1,arr2))


// Sorting using Merge Sort 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid,nums.length))
    return merge(left,right);
};

function merge(left,right){
    let mergedSortedArray = []
    let i=0;
    let j=0;
    while(i < left.length && j < right.length){
        if(left[i]>right[j]){
            mergedSortedArray.push(right[j]);
            j++;
        }
        else{
            mergedSortedArray.push(left[i]);
            i++;
        }
    }
    while(i < left.length){
        mergedSortedArray.push(left[i]);
        i++;
    }
    while(j < right.length){
        mergedSortedArray.push(right[j]);
        j++;
    }
return mergedSortedArray;
}
