import React, { useState } from 'react'
import { addItem } from '../../../services/itemService'
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import styles from './AddItemForm.module.scss'

interface AddItemFormProps {
  onAddItem: () => void
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await addItem({ name, price })
      onAddItem()
      setName('')
      setPrice(0)
      setError('')
    } catch (error: any) {
      setError(error.response.data.errors[0].msg)
      console.error('Error adding item:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.addItemForm}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
        />
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Enter item price"
          required
        />
        <Button type="submit">Add Item</Button>
      </form>
      {error && <div className="text-danger">Error: {error}</div>}
    </>
  )
}

export default AddItemForm
