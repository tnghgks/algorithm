function solution(s) {
    // 순회돌아서 중복없는 객체 생성
    // 순서대로 작은 길이의 원소부터 배열에 넣기
    var answer = [];
    const prequency = {};
    let temp = ""
    
    for(let i = 0 ; i < s.length ; i++){
        if(!isNaN(s[i])){
            if(!isNaN(s[i+1])){
                temp += s[i]
                continue
            }else{
                temp += s[i]
                prequency[temp] = (prequency[temp] || 0) + 1
                temp = ""
            }
        }
    }
    
    answer = Object.entries(prequency).sort((a,b)=>  b[1] -a[1]).map(v=> Number(v[0]))
    
    
    return answer;
}