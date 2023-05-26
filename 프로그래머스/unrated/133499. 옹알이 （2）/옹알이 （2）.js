function solution(babbling) {

    var answer = 0;
    let posible = ["aya", "ye", "woo", "ma"]
    let imposible = ["ayaaya", "yeye", "woowoo", "mama"]
    
    for(let i in babbling){
        let temp = babbling[i];
        
        for(let j in posible){
            if(temp.includes(imposible[j])) break;
            temp = temp.replaceAll(posible[j]," ")
        }
        temp = temp.replaceAll(" ","")
        if(!temp) answer += 1
        
    }
    
    console.log(babbling)
    return answer;
}