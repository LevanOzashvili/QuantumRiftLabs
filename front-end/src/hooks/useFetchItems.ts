import { useEffect, useState } from 'react'
import { getItems } from '../services/itemService'

const useFetchItems = () => {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const data = await getItems()
        setItems(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchItemsData()
  }, [])

  return { items, loading, error }
}

export default useFetchItems
