import { fetchItems, createItem } from '../api/items'

export const getItems = async () => {
  const response = await fetchItems()
  return response.data
}

export const addItem = async (item: { name: string; price: number }) => {
  const response = await createItem(item)
  return response.data
}
