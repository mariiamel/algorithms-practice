

function SubstringsKDistinct(str, k) {

    let start = 0;
    let end = 0;
    let result = [];

    let len = str.length;

    while (start < len && end < len) {

        while (end <= len) {
            if(str.slice(start, end).length > 1){
                let set = new Set(str.slice(start, end));
                if ( set.size == k) {
                    result.push(str.slice(start, end));
                }
            }
            end++;
        }

        start++;
        end = start;

    }

    return result.length;
}


// let s = "pqpqs", k = 2;
// console.log(SubstringsKDistinct(s,2))

// s = "aabab", k = 3
// console.log(SubstringsKDistinct(s,3))

//OR

function substrCount (str, k) {
    let i = 0, j = 0; 
    let result = 0;
    let count = 0; 
    let len = str.length;

    for( let i = 0; i < len; i++){
        let map = new Map();

        for(j = i; j < len; j++){
            map[str[j]]++;
            if(map[str[j]] == 1) count++;
            if(count == k) result++;
            if(count > k) break;
        }
    }
    return result;
}