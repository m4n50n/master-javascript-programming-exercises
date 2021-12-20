const getElementsLessThan100AtProperty = (objeto, key) => {
    return objeto[key].filter(function(value, index) {
        return value < 100;
    });
}

var obj = {
    key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]