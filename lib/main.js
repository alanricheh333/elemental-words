"use strict";
const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
function wordBreak(s, wordDict) {
    let wordSet = wordDict;
    let memo = {};
    function _wordBreak_topdown(s) {
        if (s === "") {
            return [[]];
        }
        if (s in memo) {
            return memo[s];
        }
        else {
            memo[s] = [];
        }
        for (let endIndex = 1; endIndex <= s.length; ++endIndex) {
            let word = s.substring(0, endIndex);
            if (wordSet.includes(word)) {
                let subsentences = _wordBreak_topdown(s.substring(endIndex));
                if (subsentences != undefined) {
                    for (var sub of subsentences) {
                        var newSentence = JSON.parse(JSON.stringify(sub));
                        newSentence.push(word);
                        memo[s].push(newSentence);
                    }
                }
            }
        }
        return memo[s];
    }
    _wordBreak_topdown(s);
    let ret = [];
    for (let words of memo[s]) {
        let sentence = "";
        for (let w of words) {
            sentence = sentence.slice(0, 0) + w + " " + sentence.slice(0);
        }
        sentence = sentence.slice(0, -1);
        ret.push(sentence);
    }
    return ret;
}
console.log(wordBreak(s, wordDict));
//# sourceMappingURL=main.js.map