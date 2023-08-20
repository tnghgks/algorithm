function solution(n, left, right) {
    const answer = [];
    const minMax = (a,b) => a < b ? [a,b] : [b,a]
    const [min,max] = minMax(left,right);
    
    for(let i = min; i <= max; i++){
        const [,max] = minMax(Math.floor(i/n)+1, i%n+1)
        answer.push(max)
    }

    return answer
}