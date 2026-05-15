// let x=1;
let check1=function(nums,x){
    let first=-1;
    let last=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===x){
           if(first===-1) first=i;
            last=i;
        }
    }
    return [first,last];
}
// let arr=[1,2,3,4,2,1,3,2,7];
// console.log(check(arr,7));//time complexity=O(N);

//Use lower bound and upper bound theory for time complexity=O(logn);
let check2=(arr,x)=>{
    let first=0;
    let last=0;
    let high=arr.length-1;
   
    while(first<=high){
        let mid1=Math.floor((first+high)/2);
        if(arr[mid1]>=x){
            high=mid1-1;
        }else{
            first=mid1+1;
        }

       
    }
    //Reset the high: 
    high=arr.length-1;
    while(last<=high){
         let mid2=Math.floor((last+high)/2);
        if(arr[mid2]>x){
             
           high=mid2-1;
        }else{
            last=mid2+1;
        }
    }
    if(arr[first]===x && arr[last-1] === x){
        return [first,last-1]
    
    }
    return [-1,-1];
    
    
}
let arr=[1,1,1,2,2,2,4,6]
console.log(check2(arr,5))