function solution(n, lost, reserve) {
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) =>  a-b);            
    
    const newLost = lost.filter(item => !reserve.find(element => item === element ))
    const newReserve = reserve.filter(item => !lost.find(element => item === element ))

    let lostStudent = newLost.filter(lostItem => newReserve.every(resItem => notMatched(lostItem,resItem)))
             
    function notMatched(operand,target) {
        if(operand - 1 === target){
            newReserve.splice(newReserve.indexOf(target),1)
            return false
        }else if (operand + 1 === target){
            newReserve.splice(newReserve.indexOf(target),1)
            return false
        }else {
            return true
        }
}
    
    return n - lostStudent.length ;
}