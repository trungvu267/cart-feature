import Products from './components/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className=" dark:bg-gray-600">
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default App
