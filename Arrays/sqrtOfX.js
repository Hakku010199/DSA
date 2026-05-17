function sqrt(x){
    let first=1;       //1 2 3 4 5 6 7 8 9 10 11......
    let last=x;        //1 4 9 16 25 36 49 .....
    let mid;
    while(first<=last){
        mid=Math.floor((first+last)/2)
        value=mid*mid;
        if(value===x){
            return mid;
        }else if(value<x){
            first=mid+1;
        }else{
            last=mid-1;
        }
    }
    return last;    
                       //always takes the floor value if square root is not a perfect integer.
}

console.log(sqrt(16));