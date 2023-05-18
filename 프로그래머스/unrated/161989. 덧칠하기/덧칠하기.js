function solution(n, m, section) {
    var answer = 0;
    let temp = 0 ;
    
    for(let i = 0 ; i < section.length; i++ ){
        if(section.length <= i + 1) return answer += 1 
        const nextGap = section[i + 1] - section[i];
        if (temp + nextGap <= m - 1 ){
            temp += nextGap;
        }else if (temp + nextGap > m - 1 ){
            answer += 1;
            temp = 0;
        }
    }

    
    return answer;
}