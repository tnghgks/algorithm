function solution(lottos, win_nums) {
    // 각각 비교하고
    // 일치하면 카운트를 올리고
    // 0의 갯수만큼 숫자를 저장해놓고
    // 마지막 루프에 각각 더하고 뺀다
    
    var answer = [];
    let cnt  = 7 ;
    let unknownNum = 0;
    
    for(let i = 0; i < lottos.length ; i++){
        if(win_nums.includes(lottos[i])) cnt-- 
        if(lottos[i] == 0) unknownNum++ 
    }
    
    answer.push(cnt -unknownNum  === 7 ? 6: cnt -unknownNum )
    answer.push(cnt === 7 ? 6: cnt)
    
    
    
    return answer;
}