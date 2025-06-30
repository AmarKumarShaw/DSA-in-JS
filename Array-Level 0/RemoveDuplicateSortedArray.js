const arr = [1,1,2,3,3,3,4,5,6,6,7,7,7,8]

function removeDuplicate(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x=x+1;
            arr[x]=arr[i]
        }
    }
    return x+1
}