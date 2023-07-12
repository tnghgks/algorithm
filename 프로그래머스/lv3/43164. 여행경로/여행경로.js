function solution(tickets) {
    const answer = [];
    const goal = tickets.length + 1
    const ch = Array(tickets.length).fill(0)
    
    function dfs(path){
        if(path.length === goal){
            answer.push(path)
        }else{
            for(let i in tickets){
                if(ch[i] === 0){
                    const [start, end] = tickets[i]
                    if(path[path.length - 1] === start){
                        ch[i] = 1;
                        dfs([...path, end]);
                        ch[i] = 0;
                    }
                }
            }
        }
    }
    dfs(["ICN"])
    
    return answer.sort()[0]
}