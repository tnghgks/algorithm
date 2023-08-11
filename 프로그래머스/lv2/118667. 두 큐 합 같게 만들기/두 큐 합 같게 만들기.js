function solution(queue1, queue2) {
    let sumOne = queue1.reduce((sum,cur)=>sum+cur,0)
    let sumTwo = queue2.reduce((sum,cur)=>sum+cur,0)
    let pointerOne = 0,pointerTwo = queue1.length;
    let harf = (sumOne + sumTwo)/2
    let limit = queue1.length*3;
    let count = 0;
    let pointer1 = 0, pointer2 = 0;
    
    while(count !== limit){
        if(sumOne === harf){
            return count
        }
        if(sumOne > harf){
            sumOne -= queue1[pointer1]
            queue2.push(queue1[pointer1])
            pointer1++
        }else{
            sumOne += queue2[pointer2]
            queue1.push(queue2[pointer2])
            pointer2++
        }
        count++
    }

    return -1;
}