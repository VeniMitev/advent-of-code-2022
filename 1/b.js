"use strict";
exports.__esModule = true;
var fs = require('fs');
var data = fs.readFile('./1/input.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var fileData = data.toString();
        var splitData = fileData.split('\r\n').join('/').split('/\n\s*\n/').join('||').split('//');
        var calcArr = [];
        for (var i = 0; i < splitData.length; i++) {
            var res = splitData[i].split('/');
            var calc = res.reduce(function (acc, val) {
                var total = Number(val) + acc;
                return total;
            }, 0);
            calcArr.push(calc);
        }
        var sortedArr = calcArr.sort(function (a, b) { return a - b; });
        var result = sortedArr.splice(-3).reduce(function (acc, val) { return acc + val; }, 0);
        console.log(result);
    }
});
