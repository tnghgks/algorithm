function solution(s) {
    var answer = 0;
    let stack = [];
    let count = s.length;
    
    while(count !== 0){
        s = s.substr(1)+s[0]
        for(let i in s){
            if(stack[stack.length - 1] === "(" && s[i] === ")") stack.pop();
            else if(stack[stack.length - 1] === "[" && s[i] === "]" ) stack.pop();
            else if(stack[stack.length - 1] === "{" && s[i] === "}" ) stack.pop();
            else stack.push(s[i])
        }
        if(!stack.length) answer++
        count--
        stack = []
    }
    
    return answer;
}
