const express = require('express');
const CalculatorController = require('./controller/CalculatorController');
const router = express.Router();

const calculatorController = new CalculatorController();

router.post("/soma", calculatorController.adder);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
module.exports = router;