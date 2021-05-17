const soap = require("soap");
const wsdl = "http://www.dneonline.com/calculator.asmx?wsdl";

class CalcMultiply {
  async multiply(req, res) {
    const {
      value1,
      value2
    } = req.body;
    const soapClient = await soap.createClientAsync(wsdl);
    
      await soapClient.Multiply({ intA: value1, intB: value2 }, (err, result) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json({
        Response: result.MultiplyResult 
      })
    })
  }
}
module.exports = CalcMultiply;