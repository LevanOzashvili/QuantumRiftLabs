import React from 'react'
import styles from './ItemListItem.module.scss'

interface ItemListItemProps {
  item: { id: number; name: string; price: number }
}

const ItemListItem: React.FC<ItemListItemProps> = ({ item }) => {
  return (
    <li className={styles.listGroupItem}>
      <div className={styles.itemImage} />
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.itemPrice}>${item.price}</span>
    </li>
  )
}

export default ItemListItem
