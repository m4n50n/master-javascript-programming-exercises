function getElementsGreaterThan10AtProperty(objeto, key) {
    return objeto[key].map(function(value, index) {
        if (value > 10) {
            return value;
        }
    });
}

var obj = {
    key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]