function solution(arr) {
    let prevLCM = LCM(arr[0],arr[1]);
    for(let i = 2 ; i < arr.length  ; i++){
        prevLCM = LCM(prevLCM,arr[i])
    }
    
    return prevLCM;
}

function LCM(a,b){
    return a*b/GCD(a,b)
}

function GCD(a,b){
    let min = a;
    if(a > b) min = b; 
    if(a%b === 0 ) return b
    return GCD(b,a%b)
}