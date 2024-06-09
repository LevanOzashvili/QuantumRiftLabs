import { Item } from '../models/item';

export interface IItemService {
  getItems(): Promise<Item[]>;
  addItem(item: Item): Promise<Item>;
}
