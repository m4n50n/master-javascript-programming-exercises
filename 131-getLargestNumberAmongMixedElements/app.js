function getLargestNumberAmongMixedElements(arr) {
    if (arr.length === 0) { return 0; }
  
    let max;
    let nan = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) { console.log(arr[i]);
        max = (i === 0) ? arr[i] : arr[i] > max ? arr[i] : max;
      }
      else {
        nan++;
              console.log("na " + nan);
      }
    } 
  
    return (nan === arr.length) ? 0 : max;
  }
  
  var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
  console.log(output); // --> 5