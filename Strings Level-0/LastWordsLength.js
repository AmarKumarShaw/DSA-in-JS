// LeetCode Problem 58: Length of Last Word

// Approach 1 : Not Recommended due to usage of inbuilt methods
var lengthOfLastWord = function(s) {

    let words = s.trim().split(" ")        
    // Trim leading/trailing spaces, then split string by space into array of words
    
    return words[words.length-1].length    
    // Return the length of the last word in the array

};

// Approach 2: Recommended Using Loop 
var lengthOfLastWord = function(s) {
    
    let count = 0;                          // Initialize counter to count characters in the last word
    for (let i = s.length - 1; i >= 0; i--) {
         // Start iterating from the end of the string
        if (s[i] !== " ") {                 
            // If the character is not a space
             count++;                       
             // Increment the count
        }
        else if (count > 0) {               
            // If a space is found after counting some characters
            return count;                   
            // That means the last word has ended, return the count
        }
    }
    return count;                           
    // In case the loop ends (i.e., the string is a single word), return the count
}; 
