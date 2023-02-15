import orderImage from '../assets/products/apple-watch.png'
import { CartItemType } from '../context/CartProvider'
import useCart from '../hooks/useCart'
type CartItemProps = {
  cartItem: CartItemType
}
const CartItem = ({ cartItem }: CartItemProps) => {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const removeButton = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: { ...cartItem, sku: cartItem.sku },
    })
  }
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={orderImage}
            alt="order-item"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {cartItem.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {cartItem.qty}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${cartItem.price}
        </div>
        <button
          onClick={removeButton}
          className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-red-500 cursor-pointer"
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default CartItem
