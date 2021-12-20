const getNthElementOfProperty = (objeto, key, elemento) => {
    return objeto[key][elemento];
}

var obj = {
    key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2