function selectionSort(){
    let arr=[13,46,24,52,11,9];
   // let arr=[-2,10,-10,34,23,8]
    let temp;

    console.log(arr)
    for(let i=0;i<arr.length-1;i++){
     let min=i;
     for(let j=i+1;j<arr.length;j++){
        if(arr[j]< arr[min]){
            temp=arr[j];
            arr[j]=arr[min];
            arr[min]=temp;
        }
    }
}
    return arr;
}

console.log(selectionSort());