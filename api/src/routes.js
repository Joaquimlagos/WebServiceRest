const express = require('express');
const CalculatorController = require('./controller/CalculatorController');
const fieldsMiddleware = require('./middlewares/fieldsMiddlewares');
const router = express.Router();

const calculatorController = new CalculatorController();

router.post("/*", fieldsMiddleware);
router.post("/sum", calculatorController.adder);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

module.exports = router;