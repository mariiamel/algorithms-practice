
const lengthOfLastWord = (s) => {
    // remove extra space at the begining and at the end of the Str
    const str = s.trim();
    let length = 0;
    // loop throught the str, starting from the end
    for (let i = str.length - 1; i >= 0; i--) {
        // if character is not empty -- increase the length
        if (str.charAt(i) !== ' ') {
            length++;
        // case if just 1 word in the str
        } else if (length > 0) {
            break;
        }
    }
    return length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("a")); // 1