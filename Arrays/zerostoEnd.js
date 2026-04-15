 function zerostoEnd(nums) {

        let l=nums.length;
        // let temp=[];
        // let count=0;
        // for(let i=0;i<l;i++){
        //             if(nums[i]===0){
        //         count++;
        //     }
        // }
        let k=0;
        for(let j=0;j<l;j++){
            if(nums[j]!==0){
                nums[k]=nums[j];
                k++;
            }
        }
        for(let n=k;n<l;n++){
            nums[n]=0;
        }
        // for(let i=0;i<nums.length;i++){
        //     nums[i]=temp[i];
        // }
       return nums;

};
let nums=[1];
console.log(zerostoEnd(nums));