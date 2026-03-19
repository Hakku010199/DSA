let arr1=[0,0,1,1,2,2,2,3,3];
let arr2=[];
arr2[0]=arr1[0];
console.log(arr2)
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr2[i]!=arr1[j]){
                arr2.push(arr1[j]);
        }
    }
    console.log(arr2)
}
