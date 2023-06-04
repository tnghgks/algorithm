function solution(board, moves) {
    var answer = 0;
    let stack = [];
    
    for(let i = 0 ; i < moves.length ; i++){
        let moveIndex = moves[i] - 1;
        for(let j = 0; j < board.length ; j++){
            if(board[j][moveIndex] != 0) {
                stack.push(board[j][moveIndex])
                board[j][moveIndex] = 0;
                break;
            }
        }
        stack.forEach((v,i)=>{
            if(v === stack[i+1]){
                stack.splice(i,2);
                answer += 2;
            }
        })
    }
    
    
    return answer;
}