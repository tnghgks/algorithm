function solution(n) {
    const cache = Array.from({length:n+1},(_,i)=>i)
    
   for(let i = 2 ; i <= n ; i++){
       cache[i] = (cache[i-1]% 1234567 + cache[i-2]% 1234567) % 1234567
   }
   return cache[n]
}