
function bs(arr,target){
    let low=0;
    let l=arr.length;
    let high=l-1;
    
    while(low<high){
        mid=Math.floor((low+high)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return -1;
}
let nums=[1,2,5,9];
let t=7;

console.log(bs(nums,t));
