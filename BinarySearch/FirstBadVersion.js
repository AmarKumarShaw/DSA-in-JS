/*
  LeetCode #278: First Bad Version
  --------------------------------
  🔹 Problem:
    You're a product manager leading a team to develop a product.
    Some version in the list `[1, 2, ..., n]` is the first bad version.
    All versions after it are guaranteed to be bad as well.

    You're given an API `isBadVersion(version)` that returns `true` if the version is bad.
    Your task is to minimize the number of API calls and return the first bad version.

  🔹 Constraints:
    - 1 <= bad <= n
    - At least one version is bad.

  🔹 Goal:
    Implement an efficient algorithm (ideally O(log n)) using `isBadVersion(version)`.

  🔹 Time Complexity: O(log n) - using Binary Search
  🔹 Space Complexity: O(1) - constant space
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    // Return a function that takes total number of versions
    return function(n) {
        // Initialize the binary search left boundary
        let left = 1;

        // Initialize the binary search right boundary
        let right = n;

        // Continue while search range is valid
        while(left <= right){
            // Calculate the mid-point safely to avoid overflow
            let mid = Math.floor(left + ((right - left) / 2));

            // Store the result of isBadVersion for mid
            let result = isBadVersion(mid);

            // Check if current mid is the first bad version
            if(isBadVersion(mid - 1) == false && isBadVersion(mid) == true){
                // If yes, return mid as the answer
                return mid;

                // Break is redundant after return but harmless
                break;
            }

            // If mid is bad, move search to the left half
            if(result == true){
                right = mid - 1;
            } else {
                // If mid is not bad, move search to the right half
                left = mid + 1;
            }
        }
    };
};
