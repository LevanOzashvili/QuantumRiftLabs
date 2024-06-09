import api from './index'

export const fetchItems = () => api.get('/items')
export const createItem = (item: { name: string; price: number }) =>
  api.post('/items', item)
