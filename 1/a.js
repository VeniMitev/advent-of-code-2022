var fs = require('fs');
var data = fs.readFile('./1/input.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var fileData = data.toString();
        var result = fileData.split('\r\n').join('/').split('/\n\s*\n/').join('||').split('//');
        var calcArr = [];
        for (var i = 0; i < result.length; i++) {
            var res = result[i].split('/');
            var calc = res.reduce(function (acc, val) {
                var total = Number(val) + acc;
                return total;
            }, 0);
            calcArr.push(calc);
        }
        console.log(Math.max.apply(Math, calcArr));
    }
});
