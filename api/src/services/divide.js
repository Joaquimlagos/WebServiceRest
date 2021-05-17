const soap = require("soap");
const wsdl = "http://www.dneonline.com/calculator.asmx?wsdl";

class CalcDivide {
  async divide(req, res) {
    const { value1, value2 } = req.body;
    const soapClient = await soap.createClientAsync(wsdl);

    await soapClient.Divide({ intA: value1, intB: value2 }, (err, result) => {
      if (value2 == 0) {
        return res.status(400).json({
          Response: "O divisor não pode ser 0",
        });
      } else if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          Response: result.DivideResult,
        });
      }
    });
  }
}
module.exports = CalcDivide;
