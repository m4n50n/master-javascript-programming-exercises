function getElementsThatEqual10AtProperty(objecto, key) {
    return objecto[key].filter(value => value = 10);
}

var obj = {
    key: [1000, 10, 50, 10]
};

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]