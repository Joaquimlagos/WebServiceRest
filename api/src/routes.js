const express = require('express');
const CalculatorController = require('./controller/CalculatorController');
const router = express.Router();

const calculatorController = new CalculatorController();

router.get("/soma", calculatorController.adder);
module.exports = router;