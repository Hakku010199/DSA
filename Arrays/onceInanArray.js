
function twiceCheck(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
               if(arr[i]===arr[j]){
                count++;
               }
        }
        if(count!=2){
            return arr[i];
        }
     
    }
}
let arr=[1,2,4,2,1,3,3,4,5,5,6,];
console.log(twiceCheck(arr));