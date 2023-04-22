function solution(name, yearning, photo) {
    var answer = [];
    
    let yearningName = {};
    
    for(let i in name){
        yearningName[name[i]]  = yearning[i];
    }
    
    for(let i in photo){
        let temp = 0;
        photo[i].forEach(v => temp += yearningName[v] || 0);
        answer.push(temp)
    }
    
    return answer;
}