
//two pointers approach
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