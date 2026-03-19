let arr=new Array(11,20,39,49,58,67,75);
//console.log(arr);

let length=arr.length;
let newArr=new Array()

for(let i=0;i<length;i+=2){
    newArr.push(arr[i]);
}
console.log(newArr);