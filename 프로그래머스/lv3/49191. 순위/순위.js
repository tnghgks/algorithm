function solution(n, results) {
    let answer = 0;
    const players = Array.from({length:n},(_,i)=>i+1)
    const matrix = Array.from({length:n+1},()=>new Array(n+1).fill(false))

    results.forEach((el)=>{
        const [left, right] = el;
        matrix[left][right] = 1;
        matrix[right][left] = -1;
        matrix[left][left] = 0;
        matrix[right][right] = 0;
    })
    
    for(let mid of players){
        for(let a of players){
            for(let b of players){
                if(matrix[a][mid] === 1 && matrix[mid][b] === 1) matrix[a][b] = 1
                if(matrix[a][mid] === -1 && matrix[mid][b] === -1) matrix[a][b] = -1
            }
        }
    }
    
    for(let i of players){
        let hasFalse = false
        for(let j of players){
            if(matrix[i][j] === false){
                hasFalse = true;
                break;
            }
        }
        answer += hasFalse ? 0 : 1
    }
    
    return answer
}