import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Heading title="Heading" />
      <Section>Hello</Section>
      <Counter count={count} setCount={setCount} />
      <List
        items={['☕ coffee', '🚀 rocket']}
        render={(item: string) => <span>{item}</span>}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
