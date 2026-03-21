let str1=["abcdd","abceee","abcfff"];
let str2=["ab","ab","ab"]
let str3=["hakeem","abdul"]


function lp(str){
    let prefix='';
    for(let i=0;i<str[0].length;i++){
      for(let j=1;j<str.length;j++){
        if(str[0][i]!==str[j][i]){
           return prefix;//mismatch breaking;
        }
       
      }
      prefix=prefix+str[0][i];
     
    }
     
     return prefix;//no match breaking.
}
console.log(lp(str1));
console.log(lp(str2));
console.log(lp(str3));


