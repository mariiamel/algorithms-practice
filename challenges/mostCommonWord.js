
// time - O(m + n), where m = length of paragraph, n = number of words in banned
// splace -  O(m + n)

const mostCommonWord = (paragraph, banned) => {
    let mostCommonWord;
 
    // paragraph to lower case
    paragraph = paragraph.toLowerCase().replace(/\W/g, " ");

    // Replace all punctuations with white space
    paragraph = paragraph.trim().split(/\s+/);

    let freqMap = new Map();
    let bannedSet = new Set(banned);

    // Extract words separated by one or more white spaces
    for (let i = 0; i < paragraph.length; i++) {
        let word = paragraph[i];
        // Using HashMap, ount the number of occurrences for each word that is not in banned set
        if (!bannedSet.has(word)) {
            freqMap.set(word, freqMap.get(word) + 1 || 1);
        }
    }

    let maxFreq = 0, mostCommonWordIs = "";
    
    // Iterate through HashMap and return the most common word
    for (let [word, freq] of freqMap) {
        if (freq > maxFreq) {
            maxFreq = freq;
            mostCommonWordIs = word;
        }
    }
    return mostCommonWordIs;
};