function keep(array, key) {
    return array.filter(function(value, index) {
        return value = key;
    });
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]