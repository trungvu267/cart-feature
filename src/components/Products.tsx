import ProductsContext from '../context/ProductProvider'
import { useContext } from 'react'
const Products = () => {
  const { products } = useContext(ProductsContext)
  console.log(products)
  return <div className="bg-red-500">Products</div>
}

export default Products
