function solution(people, limit) {
    var answer = 0;

    people.sort((a,b) => a-b)

    let left=0
    let right = people.length-1
    
    console.log(limit - people[right])
    console.log(people)
    
    while(left <= right){
        if(left === right){
            answer +=1;
            break
        }
        if(limit - people[right] >= people[left]){
            answer += 1
            left += 1
            right -= 1
        }else if (limit - people[right] < people[left]){
            answer += 1
            right -= 1
        }
    }
    
    return answer;
}