function solution(park, routes) {
    let answer = [];
    let start;
    const queue = [];
    const direction = {W:0,E:1,S:2,N:3};
    const lenY = park.length-1
    const lenX = park[0].length-1
    let count = 0;
    
    // 왼쪽,오른쪽,아래,위
    const dy = [0,0,1,-1];
    const dx = [-1,1,0,0];
    
    // 명령 단순화
    routes = routes.map((el)=>{
        const [dir , count] = el.split(" ")
        const result = [];
        for(let i =0; i < count ; i++){
            result.push(direction[dir])
        }
        return result
    })
    
    // 시작지점 좌표 찾기
    park.forEach((el,i) => el.indexOf("S") !== -1 ? start = [i,el.indexOf("S")] : null)
    queue.push(start)

    // BFS
    while(queue.length && count < routes.length){
        const [curY,curX] = queue.shift();
        let my = curY;
        let mx = curX;
        let cancel = false;
        
        for(let j = 0; j < routes[count].length;j++){
            my = my + dy[routes[count][0]];
            mx = mx + dx[routes[count][0]];
            if(my < 0 || mx < 0 || my > lenY || mx > lenX || park[my][mx] === "X"){
                cancel = true
                break;
            };
        }
        
        if(!cancel){
            answer = [my,mx]
            queue.push([my,mx])   
        }else{
            answer = [curY,curX]
            queue.push([curY,curX]) 
        }
        count++
    }
    
    return answer;
}