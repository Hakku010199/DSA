//lower bound smallest index such that arr[i]>=x;

let arr=[2,3,6,7,7,8,11,11,11,13];
let x;
let lowerBound=(arr,x)=>{

    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>=x){
            high=mid-1;
        }else{
            low=mid+1;
        }

    }
    return low;


}
console.log(lowerBound(arr,11));

let upperBound=function(arr,x){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>x){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}
console.log((upperBound(arr,11)))