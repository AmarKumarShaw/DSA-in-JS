// Question No- 27 Remove Duplicate
// Because the function is not removing duplicates — it's removing all occurrences of a specific value (val) from the array.

function removeDuplicate(arr,val){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=val){
            arr[x]=arr[i];
            x++;;
        }
    }
    return x;
}