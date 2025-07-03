// Bubble Sort Non-Optimized

const arr = [1,4,5,6,2]

// function bubble(arr){
//     let n = arr.length;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] =  arr[j+1]
//                 arr[j+1] = temp;

//             }
//         }
        
//     }
//     return arr;
// }
// console.log(bubble(arr))

// Optimized Bubble Sort 

function bubble(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let swapped = false;
        for(let j =0; j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp =arr[j];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true
            }
            
        }
        // This will prevent the loop to run if there 
        // is no sorting left
        if(!swapped){
            return;
        }
        return arr;
    }
}console.log(bubble(arr))