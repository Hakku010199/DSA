let x=1;
let check=function(nums,x){
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
let arr=[1,2,3,4,2,1,3,2,7];
console.log(check(arr,7));