const soap = require("soap");
const wsdl = "http://www.dneonline.com/calculator.asmx?wsdl";

class CalcSum {
  async sum(req, res) {
    const {
      value1,
      value2
    } = req.body;
    const soapClient = await soap.createClientAsync(wsdl);
    
      await soapClient.Add({ intA: value1, intB: value2 }, (err, result) => {
      if (err) {
        console.log(err);
      }
      return res.status(200).json({
        Response: result.AddResult 
      })
    })
  }
}
module.exports = CalcSum;


