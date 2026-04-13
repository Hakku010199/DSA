// let arr=[11,3,1,2,3,4,5];
// let N=1;
// let temp=arr[0];
// for(let i=1;i<arr.length;i++){
   
//         arr[i-1]=arr[i];
    
// }
// arr[arr.length-1]=temp;
// console.log(arr);


let arr=[1,2,3,4,5];
let M=6;
M=M%arr.length;
let t=[];
for(let i=0;i<M;i++){
        t[i]=arr[i];
}
for(let k=M;k<arr.length;k++){
        arr[k-M]=arr[k];
}
let l=0;
for(let j=arr.length-M;j<arr.length;j++){
        arr[j]=t[l];
        l++;
}
console.log(arr);