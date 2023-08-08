function solution(wallpaper) {
    let min = [Infinity,Infinity];
    let max = [0,0];
    wallpaper = wallpaper.map(el=>el.split(""));
    
    for(let i in wallpaper){
        for(let j in wallpaper[i]){
            if(wallpaper[i][j] === "#"){
                const [y,x] = [Number(i),Number(j)]
                if(min[0] > y) min[0] = y
                if(min[1] > x) min[1] = x
                if(max[0] < y+1) max[0] = y+1
                if(max[1] < x+1) max[1] = x+1
            }
        }
    }
    return [...min,...max];
}