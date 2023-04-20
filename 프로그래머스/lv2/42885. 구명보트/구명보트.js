function solution(people, limit) {
    var answer = 0;

    people.sort((a,b) => a-b)

    let left = 0
    let right = people.length-1

    while(left <= right){
        answer += 1;
        // 혼자남았을때 탈출
        if(left === right) break;
        
        // 남은 Kg이 제일 작은사람을 태울 수 있으면
        if(limit - people[right] >= people[left]){
            left += 1
            right -= 1
        // 남은 Kg이 제일 작은사람을 태울 수 없으면
        }else if (limit - people[right] < people[left]){
            right -= 1
        }
    }
    
    return answer;
}