import { Router } from 'express';
import { getItems, addItem } from '../controllers/itemController';
import itemValidationRules from '../validators/itemValidator';
import validateRequest from '../middleware/validationMiddleware';

const router = Router();

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Retrieve a list of items
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/items', getItems);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Add a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Item added successfully
 *       400:
 *         description: Invalid input
 */
router.post('/items', itemValidationRules, validateRequest, addItem);

export default router;
