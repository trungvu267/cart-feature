import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'
import Product from './Product'
const Products = () => {
  const { products } = useProducts()
  const { cart } = useCart()
  console.log(cart)
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
