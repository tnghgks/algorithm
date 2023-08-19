function solution(n) {
    let cache = [];
    return fibo(n);
    
    function fibo(n){
        if(n <= 3) return n;
        if(cache[n]) return cache[n];
        cache[n] = (fibo(n-2) + fibo(n-1))%1234567;
        return cache[n];
    }
}