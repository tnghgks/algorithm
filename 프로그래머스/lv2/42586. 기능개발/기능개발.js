function solution(progresses, speeds) {
    var answer = [];
    let arr = [];
    
    while(progresses.length > 0){
        
        for(let i in progresses){
            progresses[i] += speeds[i];
        }
        while(progresses[0] >= 100){
            arr.push(progresses.shift())
            speeds.shift()
        }
        if(arr.length){
            answer.push(arr.length);
            arr = [];
        }
    }
    
    return answer;
}