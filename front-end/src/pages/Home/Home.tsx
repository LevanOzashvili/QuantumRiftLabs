import React, { useState } from 'react'
import styles from './Home.module.scss'
import BlockchainStatus from '../../components/blockchainStatus/BlockchainStatus'
import AddItemForm from '../../components/items/AddItemForm/AddItemForm'
import ItemList from '../../components/items/ItemList/ItemList'

const Home: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false)

  const handleAddItem = () => {
    setRefresh((prev) => !prev)
  }

  return (
    <div className={styles.home}>
      <BlockchainStatus />
      <h1>Marketplace</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ItemList key={refresh ? 'true' : 'false'} />
    </div>
  )
}

export default Home
