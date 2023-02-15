import CartItem from './CartItem'
import useCart from '../hooks/useCart'
const Cart = () => {
  const { cart } = useCart()
  const cartEle = cart.length !== 0 && (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      {cart.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </ul>
  )
  const content = cart.length !== 0 ? cartEle : <NoItemInCart />
  return (
    <div className="w-full h-[500px] max-w-md mx-auto sm:pt-48 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 ">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">{content}</div>
    </div>
  )
}

export default Cart

const NoItemInCart = () => {
  return (
    <div className="text-center font-bold text-3xl text-white">
      No Item In Cart
    </div>
  )
}
