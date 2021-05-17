const CalcSum = require('../services/sum');
const CalcSubtract = require('../services/subtract');
const CalcMultiply = require('../services/multiply');
const CalcDivide = require('../services/divide');

const calcSum = new CalcSum();
const calcSubtract = new CalcSubtract();
const calcMultiply = new CalcMultiply();
const calcDivide = new CalcDivide();

class CalculatorController{
 
      adder (req, res){
        const resultSum = calcSum.sum(req,res);
      };

      subtract (req,res){
        const resultSubtract = calcSubtract.subtract(req,res);
      }

      multiply (req,res){
        const resultMultiply = calcMultiply.multiply(req,res);
      }

      divide (req,res){
        const resultDivide = calcDivide.divide(req,res);
      }

    }
module.exports = CalculatorController;