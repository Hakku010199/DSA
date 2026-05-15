// let numbers=[3,1,2,8,25,26,9,24];[1]
let lcs=(arr)=>{
    let longest=0;
      for(let i=0;i<arr.length;i++){
            let  count=1;
            let x=arr[i]; //x=current;
           let found=true;
        while(found){
             found=false;
            for(let j=0;j<arr.length;j++){
             if(x+1===arr[j]){
                 count++;
                 x=arr[j];
                 found=true;
                 break;
             }
           }
     
        }
;
    if(count>longest){
        longest=count;
    }
 }
    return longest;
}
let numbers=[3,2,8,25,26,9,24];
console.log(lcs(numbers));

  