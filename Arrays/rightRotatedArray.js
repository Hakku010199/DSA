let arr=[3,99,-1,-100];
console.log(arr);
let l=arr.length;

let N=7;
N=N%l;
//expected [5,6,7,1,2,3,4]
let temp=[];
let j=0;
for(let i=l-1;i>=l-N;i--){
    temp[j]=arr[i];
    j++;
}
console.log(temp);
let k=l-1;
for(let j=l-N-1;j>=0;j--){
    arr[k]=arr[j];
    k--;
}
console.log(arr);
let d=N-1;
for(let i=0;i<temp.length;i++){
        arr[d] =temp[i];
        d--;
}
console.log(arr);