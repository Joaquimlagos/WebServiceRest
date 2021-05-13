const express = require('express');
const CalculatorController = require('./controller/CalculatorController');
const router = express.Router();

const calculatorController = new CalculatorController();

router.post("/soma", calculatorController.adder);
module.exports = router;