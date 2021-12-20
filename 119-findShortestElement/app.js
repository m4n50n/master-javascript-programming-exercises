function findShortestElement(arr) {
    if (arr.length == 0) { return ""; }
    return arr.sort(function(a, b) {
        return b.length - a.length;
    }).pop();
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'