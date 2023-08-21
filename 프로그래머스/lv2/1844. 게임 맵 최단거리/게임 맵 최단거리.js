function solution(maps) {
    var answer = 0;
    let lenY = maps.length;
    let lenX = maps[0].length;
    let moveX = [1,-1,0,0];
    let moveY = [0,0,1,-1];
    
    const queue = [[0,0]]
    
    while(queue.length){
        const [curY, curX] = queue.shift()
        
        for(let i = 0 ; i< 4; i++){
            const my = curY + moveY[i];
            const mx = curX + moveX[i];
            
            if(my >= 0 && my < lenY && mx >= 0 && mx < lenX && maps[my][mx] === 1){
                maps[my][mx] = maps[curY][curX] + 1
                queue.push([my,mx])
            }
        }
        
    }
    
    
    
    return maps[lenY-1][lenX-1] === 1 ? -1 : maps[lenY-1][lenX-1]
    
}