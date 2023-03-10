import { useState } from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
function App() {
  const [toggle, setToggle] = useState(true)
  const content = toggle ? <Products /> : <Cart />
  return (
    <div className=" dark:bg-gray-600">
      <Navbar toggle={toggle} setToggle={setToggle} />
      {content}
      <Footer />
    </div>
  )
}

export default App
