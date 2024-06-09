import { Item } from '../models/item';
import { IItemService } from '../interfaces/IItemService';

export default class ItemService implements IItemService {
  private items: Item[] = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 150 },
  ];

  async getItems(): Promise<Item[]> {
    // Simulate async operation
    return this.items;
  }

  async addItem(item: Item): Promise<Item> {
    this.items.push(item);
    return item;
  }
}
