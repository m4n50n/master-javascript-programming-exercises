const computeCompoundInterest = (p, t, r, n) => {
  const amount = p * (Math.pow((1 + (r / n)), (n * t)));
  return amount;
};

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543