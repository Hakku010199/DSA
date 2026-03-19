
function largest(){
    //let arr=[2,6,5,8,11]
   // let arr=[-1,-2,-3,-4]
    let target=14;
    let i,j,found;
    for( i=0;i<arr.length-1;i++){
        for( j=i+1;j<arr.length;j++){
             if(arr[i]+arr[j]=== target){
                return [i,j];
                found=true;
                break;
            }
     }
     if(found) break;
}

}

console.log(largest());