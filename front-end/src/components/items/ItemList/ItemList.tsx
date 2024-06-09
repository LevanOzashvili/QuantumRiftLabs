import React from 'react'
import useFetchItems from '../../../hooks/useFetchItems'
import ItemListItem from '../ItemListItem/ItemListItem'
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'
import styles from './ItemList.module.scss'

const ItemList: React.FC = () => {
  const { items, loading, error } = useFetchItems()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.itemList}>
      <h2>Items</h2>
      <ul className={styles.listGroup}>
        {items.map((item) => (
          <ItemListItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
