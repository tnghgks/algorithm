function solution(s) {
    var answer = [0,0];
    
    while(s !== "1"){
        answer[0]++
        s = s.split("").filter((a)=> {
            if(a === "0") answer[1]++;
            return a === "1" }).join("").length.toString(2)
    }
    return answer;
}