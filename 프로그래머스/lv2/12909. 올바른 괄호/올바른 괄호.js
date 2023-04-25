function solution(s){
    let stackCount = 0;
    
    for(let i =0 ; i < s.length ; i++){
        if(s[i] === "(" ){
            stackCount += 1;
        }else{
            if(stackCount === 0) return false
            stackCount -= 1; 
        }
    }

    return stackCount === 0;
}