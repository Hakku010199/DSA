
function check(arr,N){
    for(i=1;i<=N;i++){
    let flag=0;
     for(let j=0;j<arr.length;j++){
        if(arr[j]==i){
            flag=1;
            break;
        }
    }
    if(flag!=1){
        return i;
    }
}

}


function check2(arr,N){
    let tsum=0;
    for(let i=1;i<=N;i++){
        tsum+=i;
    }
    let total=0
    for(let j=0;j<arr.length;j++){
        total=total+arr[j];
    }
    let miss=tsum-total;
    return miss;
  
}
let arr=[5,3,2,1,9,6,8,7,4,10,12,11];
let N=13;
console.log(check(arr,N)); 
console.log(check2(arr,N));
