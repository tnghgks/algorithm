function solution(today, terms, privacies) {
    var answer = [];
    let obj = {};
    
    for(let info of terms){
        const [rank, month] = info.split(" ");
        obj[rank] = Number(month)
    }
    
    privacies = privacies.map(el => el.split(" "))
    
    for(let i in privacies){
        const [date, rank] = privacies[i]
        
        if(toDate(date) + obj[rank]*28 <= toDate(today)){
            answer.push(Number(i)+1)
        }
    }
    
    return answer;
}

function toDate(date){
    const [year, month, days] = date.split(".").map(Number);
    return (year*336) + (month )*28 + days
}
