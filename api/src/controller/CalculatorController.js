const CalcSum = require('../sum');
const calcSum = new CalcSum();
class CalculatorController{
       adder (req, res){
        const result = calcSum.sum(req,res);
      }
    }
module.exports = CalculatorController;