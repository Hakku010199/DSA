let arr=[0,0,1,1,1,2,2,3,3,4,5,5,6]
let l=arr.length;
let newArr=[]
newArr[0]=arr[0];

for(let i=0;i<l-1;i++){
    if(arr[i]!=arr[i+1]){
        newArr.push(arr[i+1]);
    }

}
console.log(newArr);