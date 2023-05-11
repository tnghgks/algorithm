function solution(cards1, cards2, goal) {
    let onePointer=0;
    let twoPointer =0;
    
    let answer = goal.every((v)=>{ 
        if(cards1[onePointer] === v){
            onePointer++
            return true
        }
        if(cards2[twoPointer] === v){
            twoPointer++
            return true
        }
        return false
    })


    
    
    return answer ? "Yes" : "No";
}