import React, { useState, useEffect } from 'react'

const YourComponent = ({ arrayProp = [] }) => { // Default empty array for props
  const [items, setItems] = useState([]) // Initialize state with empty array
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('your-api-endpoint')
        const data = await response.json()
        setItems(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {Array.isArray(items) && items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default YourComponent