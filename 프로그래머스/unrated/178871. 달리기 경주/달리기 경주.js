function solution(players, callings) {
    let obj = {};
    
    players.forEach((name,index)=>{
        obj[name] = index+1
    })

    callings.forEach((name)=>{
        let cache = "";
        
        obj[name] -= 1;
        const preIndex = obj[name]-1;
        const prePlayer = players[preIndex]
    
        players[preIndex] = name;
        players[preIndex+1] = prePlayer;
        obj[prePlayer]++
    })

    return Object.entries(obj).sort((a,b)=>a[1]-b[1]).map(el=>el[0]);
}



function swap(){
    
}