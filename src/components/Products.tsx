import ProductsContext from '../context/ProductProvider'
import { useContext } from 'react'
import Product from './Product'
const Products = () => {
  const { products } = useContext(ProductsContext)
  console.log(products)
  const productsEle = products.map((product) => {
    return <Product key={product.sku} product={product} />
  })
  return (
    <div className="pt-20 mx-2 sm:mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-3">
      {productsEle}
    </div>
  )
}

export default Products
