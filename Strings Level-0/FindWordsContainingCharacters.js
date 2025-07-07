// LeetCode Problem No 2942 -> Find Words Containing Characters 

var findWordsContaining = function(words, x) {
    let arr = [];
    
    if(words.length == 0) return [];
    for (let i =0;i<words.length;i++){
        let word = words[i].split("");
        for(let j=0;j<word.length;j++){
           
            if(word[j]==x){
                
                arr.push(i);
                break;  //Avoid Duplicate
    
        }
    }
    
};
return arr
}

var findWordsContaining = function(words, x) {
let arr = []
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)) {
            arr.push(i)
        }
    }
return arr ;

}