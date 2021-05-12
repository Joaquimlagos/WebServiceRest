const soap = require('soap');
const wsdl = 'http://www.dneonline.com/calculator.asmx?wsdl';
function sum (value1, value2){
 soap.createClient(wsdl, (err, cli) => {
 if (err) {
    console.log(err);
} else {
    cli.Add({ intA: value1, intB: value2 }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
       return result.AddResult;
        }
        console.log(result.AddResult);
    });
}
});
}

module.exports = sum;