let arr1=[2,3,3];
let arr2=[2,3,3,4];
let l1=arr1.length;
let l2=arr2.length;
let visit= new Array(l1).fill(0);
// console.log(visit);
for(let i=0;i<l2;i++){
    for(let j=0;j<l1;j++){
        if(arr2[i]===arr1[j] && visit[j]!=1){
            visit[j]=1;
            break;
        }
    }
}
let result=[];
        let m=0;
        for(let k=0;k<l1;k++){
            if(visit[k]===1){
                result[m]=arr1[k];
                m++;
            }
        }
console.log(result);

