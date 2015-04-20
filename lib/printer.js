var Printer = function() {
};

Printer.prototype.printText = function(option) {
	var helloWorld = 'Hello World!';
	var node = 'Node.js';

	switch (option) {
		case 1:
			return helloWorld;
			break;
		case 2:
			return node;
			break;
		default:
			return 'Wrong option!';
			break;
	}
};

module.exports = Printer;

