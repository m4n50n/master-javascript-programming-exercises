function getLongestWordOfMixedElements(arr) {
    if (arr.length == 0) { return ""; }

    let a = arr.filter(function(value, index) {
        return typeof value == "string";
    });

    if (a.length == 0) { return ""; }

    return a.sort(function(a, b) {
        return b.length - a.length;
    })[0];
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'