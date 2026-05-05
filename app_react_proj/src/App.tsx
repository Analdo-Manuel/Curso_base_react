import { useActionState, useState } from "react"

function App() {
  const [count, setcount] = useState(0)
  return (
    <>
      <h1>Hello, React!</h1>
      <button onClick={() => setcount( count + 1)}>
        count {count}
      </button>
    </>
  )
}

export default App
