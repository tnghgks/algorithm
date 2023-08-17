function solution(n,a,b)
{
    var answer = 0;
    let restPlayer = n
    let aNum = a
    let bNum = b

    while(restPlayer !== 1){
        answer++
        if(aNum > bNum && aNum % 2 === 0 && aNum - 1 === bNum) return answer;
        if(aNum < bNum && bNum % 2 === 0 && bNum - 1 === aNum) return answer;
        restPlayer = restPlayer/2
        aNum = Math.ceil(aNum/2)
        bNum = Math.ceil(bNum/2)
    }
    
    return answer;
}