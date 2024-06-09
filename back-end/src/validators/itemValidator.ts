import { check } from 'express-validator';

const itemValidationRules = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  check('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a number greater than 0'),
];

export default itemValidationRules;
