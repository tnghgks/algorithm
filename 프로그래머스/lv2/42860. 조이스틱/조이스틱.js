function solution(name) {
    var answer = 0;
    let minMoves = name.length - 1;

    for(let i=0; i < name.length ;i++){
        let charCode = name[i].charCodeAt();
        
        if(charCode <= 78) {
            answer += charCode - 65;
        }else if(charCode > 78){
            answer += 91 - charCode;
        }
        
        let nextIndex = i + 1;

        while (nextIndex < name.length &&  name[nextIndex] == "A") nextIndex++;

        minMoves = Math.min(minMoves,(i*2) + name.length - nextIndex ); 

        minMoves = Math.min(minMoves,(name.length - nextIndex) * 2 + i )
    }

    return answer + minMoves;
}