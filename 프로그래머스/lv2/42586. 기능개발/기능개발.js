function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    let days = 1;
    let progress = 0;
    
    while(progresses[0]){

        progress = progresses[0] + (speeds[0] * days ) ;
        
        if(progress >= 100){
            
            count++
            progresses.shift();
            speeds.shift();
            
        }else{
            if(count > 0){
                answer.push(count);
                
            }
            days++
            count=0;
        }
        
    }
    answer.push(count);
    
    return answer;
}