
var sortColors = function(arr) {
    let count1=0;let count2=0;let count0=0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count0++;
        }else if(arr[i]===1){
            count1++;
        }else{
            count2++;
        }
    }
    for(let j=0;j<count0;j++){
        arr[j]=0;
    }
    for(let k=count0;k<count0+count1;k++){
        arr[k]=1;
    }
    for(let l=count0+count1;l<count0+count1+count2;l++){
        arr[l]=2;
    }
    return arr;
};
let arr=[1,0,0,1,2,1,1,2];
console.log(sortColors(arr));