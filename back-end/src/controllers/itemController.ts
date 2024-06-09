import { Request, Response, NextFunction } from 'express';
import ItemService from '../services/itemService';
import { HttpException } from '../middleware/errorMiddleware';
import { Item } from '../models/item';

const itemService = new ItemService();

export const getItems = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const items = await itemService.getItems();
    res.json(items);
  } catch (error) {
    next(new HttpException(500, 'An error occurred while fetching items.'));
  }
};

export const addItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newItem: Item = req.body;
    const createdItem = await itemService.addItem(newItem);
    res.status(201).json(createdItem);
  } catch (error) {
    next(new HttpException(500, 'An error occurred while adding the item.'));
  }
};
