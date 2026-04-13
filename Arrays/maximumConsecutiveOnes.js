let arr=[1,1,0,1,1,1]
let count=0;
let max_ones=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
        count++;
    }else{
        count=0;
    }

     if(count>max_ones){
            max_ones=count;
        }
    
}
console.log(max_ones);