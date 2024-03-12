let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///

let dollarAmount = 137;

let euroValue = dollarToEuro(dollarAmount);
console.log("Value in Euros:", euroValue);

let yenValue = euroToYen(euroValue);
console.log("Value in Yen:", yenValue);