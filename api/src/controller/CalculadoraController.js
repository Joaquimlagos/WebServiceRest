const soma = require('../utils/soma');

class CalculadoraController{
    calculadora (req,res){
        const{
            soma1,
            soma2,
        }= req.body;
        if (!soma(soma1, soma2)) {
            return res.status(400).json({
              Response: '',
            });
          }
    }
}

module.exports = CalculadoraController;