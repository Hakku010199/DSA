// let fu=(arr)=>{
//    let count=1;
//     let value=0
//     let x=arr[value]
//    while(count<3){
//      let i=0
    
    
//     if(arr[i]==x){
//         count++;
    
//     }
//     i++;
//    }
//    if(count=1) return arr[i];
//    value=value+2;

//    return -1;
// }

function check(arr){
        let value=0;
         let x=arr[value];
        let count=0;
    for(let i=0;i<arr.length+1;i++){
        if(arr[i]===x){
            count++
            if(count===2){
                value=value+2;
                x=arr[value];
                count=0;
            }
            
        }else{
            return arr[i-1];
        }
    }
    return 0;
}



let check2=(arr)=>{
   let l=arr.length;
    if(arr[0]!=arr[1]) return arr[0];
    if(arr[l-1]!=arr[l-2]) return arr[l-1];
    for(let i=1;i<l-1;i++){
        if(arr[i]!==arr[i-1] && arr[i]!==arr[i+1]){
            return arr[i];
        }
    }
    
}
//        0 1 2 3 4 5 6 7 8 9 10
let nums=[1,1,2,2,3,3,4,4,5,5,6]
console.log(check(nums)); //O(n) time complexity.
console.log(check2(nums));

 function check3(arr){
    let l=arr.length;
    if(l===1) return arr[0];
    if(arr[0]!==arr[1]) return arr[0];
    if(arr[l-1]!==arr[l-2]) return arr[l-1];

    let low=1;
    let high=l-2;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]!==arr[mid-1] && arr[mid]!=arr[mid+1]){
            return arr[mid];
        }
       if(mid%2===0 && arr[mid]===arr[mid-1] || mid%2===1 && arr[mid]===arr[mid+1]){
            high=mid-1;
       };
       if(mid%2!==0 && arr[mid]===arr[mid-1] || mid%2===0 && arr[mid]===arr[mid+1] ){
             low=mid+1;
       }
       
    }
 }//Time complexity  O(log n)
 console.log(check3(nums));


