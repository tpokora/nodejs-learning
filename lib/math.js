var multiplicator = 5;

function multiplicate(number) {
	return number * multiplicator;
}

function description(number) {
	return number + ' times 5:\n';
}

exports.multiplyByFive = function(number) {
	return description(number) + multiplicate(number);
}

