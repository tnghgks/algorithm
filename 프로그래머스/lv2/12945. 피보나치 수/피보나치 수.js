function solution(n) {
    let cache = Array.from({length:n+1},(_,i)=>i)
    
    for(let i = 2 ; i < cache.length ; i++ ){
        cache[i] = BigInt(cache[i-1]) + BigInt(cache[i-2])
    }
    return Number((cache[n] % 1234567n).toString(10))
}
