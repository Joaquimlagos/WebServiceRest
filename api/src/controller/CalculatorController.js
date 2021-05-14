const CalcSum = require('../sum');
const CalcSubtract = require('../subtract');
const CalcMultiply = require('../multiply');

const calcSum = new CalcSum();
const calcSubtract = new CalcSubtract();
const calcMultiply = new CalcMultiply();

class CalculatorController{
 
      adder (req, res){
        const resultSum = calcSum.sum(req,res);
      };

      subtract (req,res){
        const resultSubtract = calcSubtract.subtract(req,res);
      }

      multiply (req,res){
        const resultSubtract = calcMultiply.multiply(req,res);
      }


    }
module.exports = CalculatorController;