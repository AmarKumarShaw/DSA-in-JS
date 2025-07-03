// // Selection Sort of Array
// Here we sort an array by finding the minimum element and then replacing 
// it with the first first element and then keep moving in the forward directon


const arr = [1,25,5,63,62,2]
function selectionSort(arr){
    let n =arr.length;
    
    for(let i=0;i<n-1;i++){
        let min=i;
        
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
         
        }

        if(min!==i){
            [arr[i],arr[min]] =[arr[min],arr[i]]
           }
    }

   return arr;
}

console.log(selectionSort(arr))