const [items, setItems] = useState([]) // Initialize with empty array instead of null/undefined

// When fetching data:
const [isLoading, setIsLoading] = useState(true)

// Safe pattern 1 - Using optional chaining and nullish coalescing
{items?.map(item => <div key={item.id}>{item.name}</div>) ?? []}

// Safe pattern 2 - Using Array.isArray
{Array.isArray(items) && items.map(item => <div key={item.id}>{item.name}</div>)}

// Safe pattern 3 - Using loading state
{isLoading ? (
  <LoadingSpinner />
) : (
  items?.map(item => <div key={item.id}>{item.name}</div>)
)}