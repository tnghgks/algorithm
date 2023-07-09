function solution(keymap, targets) {
    var answer = [];
    let obj = {};
    
    for(let str of keymap){
        for(let i in str){
            obj[str[i]] = obj[str[i]] < Number(i) + 1 ?  obj[str[i]] : Number(i) + 1
        }
    }
    for(let str of targets){
        let count = 0;
         for(let i in str){
            if(!obj[str[i]]){
                count = 0;
                break;
            }
            count += obj[str[i]]
         }
        answer.push(count || -1);
    }
    
    return answer;
}