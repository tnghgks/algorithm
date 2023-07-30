function solution(survey, choices) {
    let totalType = ["RT","CF","JM","AN"]
    let obj = {};
    
    survey.forEach((item,index)=>{
        const [left, right] = item;
        obj[left] = 0;
        obj[right] = 0;
    })
    
    survey.forEach((item,index)=>{
        const [left, right] = item;
        let score = choices[index]-4

        if(score < 0){
            obj[left] +=  Math.abs(score)
        }else if(score > 0){
            obj[right] +=  Math.abs(score)
        }
    })
    
    return totalType.map((item)=>{
        return compare(item,obj)
    }).join("")
}

function compare(str,obj){
    const [left, right] = str;
    if(obj[left] > obj[right] ){
        return left
    }else if(obj[left] < obj[right] ){
        return right
    }else{
        if(left.charCodeAt() < right.charCodeAt()){
            return left
        }else{
            return right
        }
    }
}