function solution(n) {
    var answer = 0;
    let binary = n.toString(2)
    let count = n.toString(2).match(/1/g).length
    let i = 1;

    while(true){
        if((n+i).toString(2).match(/1/g).length === count){
            answer = n+i
            break;
        }
        i++
    }
    
    return answer;
}