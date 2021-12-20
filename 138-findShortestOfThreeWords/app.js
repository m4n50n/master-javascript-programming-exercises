function findShortestOfThreeWords(word1, word2, word3) {
    return [word1, word2, word3].sort(function(a, b) {
        return b.length - a.length;
    }).pop();
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'