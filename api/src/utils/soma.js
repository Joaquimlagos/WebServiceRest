const soap = require('soap');
const wsdl = 'http://www.dneonline.com/calculator.asmx?wsdl';
function soma (soma1, soma2){
 soap.createClient(wsdl, (err, cli) => {
 if (err) {
    console.log(err);
} else {
    cli.Add({ intA: soma1, intB: soma2 }, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result.AddResult);
        }
    });
}
});
}

module.exports = soma;