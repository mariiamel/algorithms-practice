
// O(N) time complexity -- with frequency counter pattern
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let lookup = {};

    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        //check if letter is in the lookup --increment --otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('cat', 'tag'); // false
validAnagram('anagram', 'nagaram'); // true