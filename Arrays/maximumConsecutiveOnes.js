let arr=[0,1,1,1,1,1,0,0,1,1,1,0];
let count=0;
let max_ones=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
        count++;
    }else{
        if(count>max_ones){
            max_ones=count;
        }
        count=0;
    }
    
}
console.log(max_ones);