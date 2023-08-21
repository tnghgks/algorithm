function solution(numbers, target) {
    var answer = 0;
    
    dfs(0,0)
    
    return answer;
    
    function dfs(startIdx,sum){
        if(startIdx === numbers.length){
            if(sum === target) return answer++
            else return;
        };
        
        dfs(startIdx+1,sum + numbers[startIdx])
        dfs(startIdx+1,sum - numbers[startIdx])
    }
    
}