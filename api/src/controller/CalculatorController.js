const sum = require('../sum');

class CalculatorController{
    adder (req,res){
        const{
            value1,
            value2,
        }= req.body;
    
        if (sum(value1, value2)) {
            return res.status(200).json({
              Response: 'sucesso',
            });
          } 
        } 
}

module.exports = CalculatorController;