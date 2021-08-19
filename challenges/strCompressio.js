let chars = ["a","a","b","b","c","c","c"]

var compress = function(chars) {
    if(!chars.length) return 0;
    const result = []
    let count = 1;
    
    for (let i = 0; i < chars.length; i++){
        let current = chars[i];
        let next = chars[i + 1]; 
        if(current === next){
            count++;
        } else {
            result.push(current,count);
            count = 1; 
        }
    }
    return result;
};

console.log(compress(chars))