var http = require('http');
var fs = require('fs');
var math = require('./lib/math');
var Printer = require('./lib/printer'); 

console.log(math.multiplyByFive(3));
console.log('Text from Printer object:');
var printer = new Printer();
for (var i = 0; i < 3; i++) {
	console.log(printer.printText(i));
}

var server = http.createServer(function(req, res) {
	if (req.url === '/') {
		getIndex(res);
	} else if (req.url === '/list') {
		getListPage(res);
	}
	
}).listen(3000);

function getIndex(res) {
	fs.readFile('./public/index.html', function(err, data) {
		if (err) {
			hadError(err, res);
		} else {
			printHTML(data.toString(), res);
		}
	})
}

function getListPage(res) {
	fs.readFile('./titles.json', function(err, data) {
		if (err) {
			hadError(err, res);
		} else {
			getTemplate(JSON.parse(data.toString()), res);
		}
	});
}

function getTemplate(list, res) {
	fs.readFile('./public/list.html', function(err, data) {
		if (err) {
			hadError(err, res);
		} else {
			printList(list, data.toString(), res);
		}
	});
}

function printList(list, tmpl, res) {
	var html = tmpl.replace('%', list.join('</li><li>'));
	printHTML(html, res);
}

function printHTML(html, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
};

function hadError(err, res) {
	console.error(err);
	res.end('Server error');
}

console.log('Server is listening on port 3000.');

