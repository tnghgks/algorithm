function solution(new_id) {
    var answer = '';
    let possible = /[a-z0-9\-\_\.]/
    new_id = new_id.toLowerCase();
    let arr = new_id.split("")
    
    let newArr = arr.map((str)=>{
        if(!possible.test(str)) return "";
        return str
    }).join("").split("").map((str,i,arr)=>{
        if(arr[i-1] === "." && arr[i ]=== ".") return "";
        return str
    }).join("").split("").map((str,i,arr)=>{
        if((i === 0 || i === arr.length-1) && str === ".") return "";
        return str
    }).join("") || "a"
    
    if(newArr.length >= 16) {
        newArr = newArr.slice(0,15).split("").map((str,i,arr)=>{
        if((i === 0 || i === arr.length-1) && str === ".") return "";
        return str
    }).join("");
    }
    
    if(newArr.length <= 2){
        while(newArr.length < 3){
            newArr += newArr[newArr.length - 1];
        }
    }
    
    return newArr;
}