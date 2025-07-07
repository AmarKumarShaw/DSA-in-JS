// Approach 1: Brute-force approach using nested loops to check each character
var findWordsContaining = function(words, x) {
    let arr = [];
    
    if(words.length == 0) return [];  // Return empty array if no words
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("");  // Split the word into characters
        for (let j = 0; j < word.length; j++) {
            if (word[j] == x) {
                arr.push(i);  // Store index if character x is found
                break;  // Avoid duplicate entries
            }
        }
    }
    return arr;
    // One-liner explanation: Iterate through each word and character to check if x exists, storing the index if found.
}


// Approach 2: Optimized approach using String.prototype.includes()
var findWordsContaining = function(words, x) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            arr.push(i);  // Store index if word contains character x
        }
    }
    return arr;
    // One-liner explanation: Check if each word contains x using includes(), and store the index if it does.
}
