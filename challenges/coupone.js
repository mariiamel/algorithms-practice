
// two pointers approach
// time complexity - O(n) because I am looping each character only once
// space complexity - O(1) as only some variable is used to store some states: left pointer, right pointer and boolean


 function validateCoupon(str) {
    if (str.length == 0 ) return true;
    if (str.length % 2  == 1) return false;
    
    let left = 0;
    let right = str.length - 1;

    while (left < right && left < str.length) {
        if (str.charAt(left) == str.charAt(right)) {
            left++;
            right--;
        } else {
            let isMirror = false;
            if (str.charAt(left) == str.charAt(left + 1)) {
                left+=2;
                isMirror = true;
            }
            if (str.charAt(right) == str.charAt(right-1)) {
                right-=2;
                isMirror = true;
            }
            if (!isMirror) {
                return false;
            }
        }
    }
    return true;
}

//OR
function isValid(str) {
    if (str.length % 2 !== 0) {
      return false;
    }
    if (str === "") {
      return true;
    }
    const strArr = str.split("");
    let i = 0;
    let j = 1;
    while (j < strArr.length) {
      if (strArr[i] !== strArr[j]) {
        i++;
        j++;
      } else {
        strArr.splice(j, 1);
        strArr.splice(i, 1);
        i = 0;
        j = 1;
      }
    }
    console.log(strArr, i, j);
    return strArr.length === 0 ? true : false;
}

//or
function isValid(s, left=0, right=0){
    //Emtpy str
    if(left==right+1){
        return true;
    }
    if(left>right) return false;

    //Checking if even len str
    if((right-left+1)%2!=0){
        return false;
    }
    if(s.charAt(left) == s.charAt(right)){
        rule1 = isValid(s,left+1,right-1);
       if(rule1){
           return true;
       }
    }
       let mid = left + (right-left)/2;
        rule2 = isValid(s,left+1,mid) && isValid(s,mid+1,right-1);
       return rule2;
}