function solution(cacheSize, cities) {
    var answer = 0;
    
    const cache = cacheSize ? Array(cacheSize).fill("") : null
    
    cities.forEach(v=> {
        const city = v.toUpperCase()
        if(!cache) return answer += 5;
        if(cache.includes(city)){
            cache.splice(cache.findIndex((value)=> value === city),1)
            cache.unshift(city)
            answer += 1;
        }else{
            cache.pop()
            cache.unshift(city)
            answer += 5;
        }

    })
    
    return answer;
}