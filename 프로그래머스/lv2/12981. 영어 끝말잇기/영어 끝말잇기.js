function solution(n, words) {
    
    const isSame = (str,str2) => {
        const lastIdx = str.length-1

        if(str[lastIdx] === str2[0]){
            return true
        }
    
        return false
    }
    
    var answer = [0,0];
    let prevWords = [words[0]];

    for(let i = 1 ; i < words.length; i++){
        if(isSame(words[i-1],words[i])){
            if(prevWords.includes(words[i])){
                answer[0] = (i+1)%n === 0 ? n : (i+1)%n
                answer[1] = Math.floor(i/n)+1
                return answer
            }else{
                prevWords.push(words[i])
            }
        }else{
            answer[0] = (i+1)%n === 0 ? n : (i+1)%n
            answer[1] = Math.floor(i/n)+1
            return answer
        }

    }
    
    return answer;
}


