function solution(numbers, hand) {
    var answer = '';
    let keypad = {
        1: [1,1], 2: [1,2], 3: [1,3],
        4: [2,1], 5: [2,2], 6: [2,3],
        7: [3,1], 8: [3,2], 9: [3,3],
        '*': [4,1], 0: [4,2], '#': [4,3]
    }
    let curLeft = [4,1];
    let curRight = [4,3]; 

    for(let i of numbers){
        const [y,x] = keypad[i]
        if(x === 1){
            answer += "L"
            curLeft= [y,x]
        }else if(x === 3){
            answer += "R"
            curRight= [y,x]
        }else{
            const left =  Math.abs(curLeft[0] - y )+ Math.abs(curLeft[1]-x)
            const right = Math.abs(curRight[0] - y) + Math.abs(curRight[1]-x)
            if(left === right){
                if(hand === "left"){
                    answer += "L"
                    curLeft= [y,x]
                }else{
                    answer += "R"
                    curRight=[y,x]
                }
            }else if (left < right){
                answer += "L"
                curLeft= [y,x]
            }else if (left > right){
                answer += "R"
                curRight= [y,x]
            } 
        }
    }
    
    return answer;
}