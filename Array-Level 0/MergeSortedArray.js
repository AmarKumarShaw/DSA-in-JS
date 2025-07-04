// Leet Code Problem Number 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


var merge = function(nums1, m, nums2, n) {
    
    let nCopy1 = nums1.slice(0,m)
    let p1=0;
    let p2=0;
    for(let i=0;i<m+n;i++){
        if(p2>=n || (nCopy1[p1]<nums2[p2] && p1<m)){
            nums1[i]=nCopy1[p1];
            p1++;
        }else{
            nums1[i]=nums2[p2];
            p2++;
        }
    }
    return nums1;
    
    };
