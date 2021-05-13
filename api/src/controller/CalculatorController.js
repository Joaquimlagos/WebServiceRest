const CalcController = require('../sum');
const calcontroller = new CalcController();
class CalculatorController{
        adder (req,res){
        const{
            value1,
            value2,
        }= req.body;

        const result = calcontroller.sum(value1,value2);
        console.log(result);
        return res.status(200).json({
          Response: result
        })
      }
    }
module.exports = CalculatorController;