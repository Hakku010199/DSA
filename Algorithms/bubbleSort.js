
function bubbleSort(){
    let arr=[13,13,100,46,24,52,20,900,46];
    for (let i =arr.length-1;i>0;i--){
        for (let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
     return arr;

}
console.log(bubbleSort());