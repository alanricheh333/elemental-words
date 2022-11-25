"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementalForms = void 0;
const data_1 = require("./data");
/**
 * Gives the elemental forms that can be formed by letters of a certain word
 * @param word: string representing the inspected word
 * @returns list of arrays (each one represent the combination of elements formed) with each item as the elemental name + element symbol
 */
function elementalForms(word) {
    //get the elements data object and convert it to dict
    var elementsDict;
    elementsDict = data_1.ELEMENTS;
    //extract the keys of the dict object
    let elementsSet = Object.keys(elementsDict);
    //define the dict of suffixes
    let memo = {};
    /**
     * Breakes the word top down way, gets the suffixes as keys and list of arrays of prefixes combinations as values
     * @param suffix: string representing the remaining suffix of the word
     * @returns the memo as dict of suffixes as keys and list of arrays of elements combinations as value
     */
    function wordBreakTopDown(suffix) {
        //if empty string return empty list
        if (suffix === "") {
            return [[]];
        }
        //check if suffix is already in memo
        if (suffix in memo) {
            return memo[suffix];
        }
        else {
            memo[suffix] = [];
        }
        //iterate over suffix size
        for (let endIndex = 1; endIndex <= suffix.length; ++endIndex) {
            //get letters from suffix
            let letters = suffix.substring(0, endIndex);
            if (letters.length > 3)
                continue;
            //convert the letters to lowercase then make the first letter uppercase
            letters = letters.toLocaleLowerCase();
            letters = letters.charAt(0).toUpperCase() + letters.slice(1);
            //check if elements set contains the combination of letters
            if (elementsSet.includes(letters)) {
                //recrusively call the break top down function on the remaining part of the word
                let subsentences = wordBreakTopDown(suffix.substring(endIndex));
                if (subsentences != undefined) {
                    //form the combiniation of letters and add it to the memo with the current suffix
                    for (var sub of subsentences) {
                        var newSentence = JSON.parse(JSON.stringify(sub));
                        newSentence.push(letters);
                        memo[suffix].push(newSentence);
                    }
                }
            }
        }
        return memo[suffix];
    }
    wordBreakTopDown(word);
    //in case of empty string passed
    if (!memo[word])
        return [];
    let result = [];
    //iterate over the combinations of elements of only the word as a suffix
    for (let words of memo[word]) {
        //form the elemental form array
        let elementalFromsArray = [];
        for (let w of words) {
            let element = elementsDict[w];
            let sentence = element + " (" + w + ")";
            elementalFromsArray.unshift(sentence);
        }
        //push the array to the result array
        result.push(elementalFromsArray);
    }
    return result;
}
exports.elementalForms = elementalForms;
console.log(elementalForms("beach"));
//# sourceMappingURL=main.js.map