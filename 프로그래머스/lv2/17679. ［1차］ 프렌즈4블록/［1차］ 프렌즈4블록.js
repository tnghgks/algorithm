function solution(m, n, board) {
    var answer = 0;
    board = board.map(el => el.split(""));
    while(true){
        
        let deleteList = [];
        
        // 각 원소에서 2×2가 일치하는지 확인하고 deleteList에 추가
        for(let i = 0;i < m-1 ; i++){
            for(let j =0; j < n-1 ; j++){
                if(board[i][j] === 0) continue;
                const friends = board[i][j];
                let dx = 1;
                if(board[i][j+dx] === friends && board[i+1][j] === friends && board[i+1][j+dx] === friends){
                    deleteList.push(...[[i,j],[i,j+dx],[i+1,j],[i+1,j+dx]])
                    dx++
                    while(board[i][j+dx] === friends && board[i+1][j+dx] === friends){
                        deleteList.push(...[[i,j+dx],[i+1,j+dx]])
                        dx++
                    }
                }
            }
        }
        
        // 지울 목록이 없다면 while 탈출
        if(!deleteList.length) break
        
        // 삭제된 부분 한번에 0으로 채우기
        deleteList.forEach(el => {
            const [y,x] = el;
            board[y][x] = 0;
        })

        // 위에서부터 하나씩 내리기
        for(let i = m-1 ; i > 0;i--){
            for(let j = 0 ; j < n;j++){
                let k = 0
                if(board[i][j] === 0){
                    while(i-k >= 0 && board[i][j] === 0){
                        board[i][j] = board[i-k][j];    
                        board[i-k][j] = 0;
                        k++
                    }
                }
            }    
        }
    }
    
    for(let i in board){
        for(let j in board[i]){
            if(board[i][j] === 0) answer++
        }
    }
    return answer;
}