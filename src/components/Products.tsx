import ProductsContext from '../context/ProductProvider'
import { useContext } from 'react'
import Product from './Product'
const Products = () => {
  const { products } = useContext(ProductsContext)
  console.log(products)
  return (
    <div className="pt-20 mx-2 sm:mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-3">
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  )
}

export default Products
