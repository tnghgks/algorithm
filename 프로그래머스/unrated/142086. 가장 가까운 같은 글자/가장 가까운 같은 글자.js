function solution(s) {
    var answer = [];
    
    for (let i in s){
        const index = s.substring(0,i).lastIndexOf(s[i])
        if(index === -1 ){
            answer.push(-1)
        }else{
            answer.push(i-index)
        }
    }
    
    return answer;
}