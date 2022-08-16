
const longestPrefix = (arr) => {
    for (let i = 0; i < arr[0].length; i++) {
        for (let word of arr) {
            if (word[i] !== arr[0][i]) {
                word.slice(0, i);
            }
        }
    }
    return arr[0];
}

longestPrefix(["flower","flow","flight"]);
longestPrefix(["dog","racecar","car"]);