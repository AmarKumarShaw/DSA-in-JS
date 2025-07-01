var reverseString = function(arr) {
    let len = arr.length;
    let halfLen = Math.floor(len / 2);
    for (let i = 0; i < halfLen; i++) {
        let temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    } 
};   