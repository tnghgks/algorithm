function solution(id_list, report, k) {
    var answer = [];
    let reportCounter = {};
    let toReportList = {};
    let banList = [];
    
    // 객체화
    id_list.forEach((el)=>{
        reportCounter[el] = 0
        toReportList[el] = [];
    })
    
    //신고 처리
    report.forEach((el)=>{
        const [reporter, target] = el.split(" ");
        if(!toReportList[reporter].includes(target)){
            reportCounter[target]++
            toReportList[reporter].push(target)
            if(reportCounter[target] >= k){
                banList.push(target)
            }
            
        }
    })

    //신고 카운터
    return Object.values(toReportList).map(el=>{
        let count = 0;
        el.forEach(item=>{
            if(banList.includes(item)) count++
        })
        return count
    }) ;
}