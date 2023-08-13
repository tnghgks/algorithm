    
// 인접리스트 만들기
// 1번리스트에서 해당 노드까지 간선갯수 리스트 만들기
// BFS돌면서 리스트에 숫자 올리기
function solution(n, edge) {
    var answer = 0;
    let adjacencyList = {};
    let weightList = {};
    
    for(let i = 1 ; i <= n ; i++ ){
        adjacencyList[i] = [];
        weightList[i] = 0;
    }
        
    edge.forEach((el)=>{
        const [left , right] = el
        adjacencyList[left].push(right)
        adjacencyList[right].push(left)
    })
    answer = bfs(1)

    function bfs(start){
        const queue = [ start ];
        const visited = [0,1]

        while(queue.length){
            const node = queue.shift();
            
            for(let next of adjacencyList[node]){
                if(!visited[next]){
                    visited[next] = visited[node] + 1
                    queue.push(next)
                }
            }
        }
        const maxNum = Math.max(...visited)
        
        return visited.filter((el)=> el===maxNum).length
    }        

    return answer;
}