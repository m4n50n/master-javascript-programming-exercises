function getOddLengthWordsAtProperty(objeto, key) {
    return objeto[key].map(function(value, index) {
        if (value.length % 2 != 0) { return value; }
    });
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']