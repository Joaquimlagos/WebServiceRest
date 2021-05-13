const soap = require("soap");
const wsdl = "http://www.dneonline.com/calculator.asmx?wsdl";

class CalcController {
  async sum(value1, value2) {
    const soapClient = await soap.createClientAsync(wsdl);
    
      await soapClient.Add({ intA: value1, intB: value2 }, (err, result) => {
      if (err) {
        console.log(err);
      }
      return result.AddResult;
    })
  }
}
module.exports = CalcController;


