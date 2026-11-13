import { useEffect, useReducer } from 'react'
import { CartContext } from './cart-context'

const CART_STORAGE_KEY = 'soe-myitter-pharmacy-cart-v2'

function getSavedCart() {
  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    const parsedCart = savedCart ? JSON.parse(savedCart) : []

    if (!Array.isArray(parsedCart)) return []

    return parsedCart.filter(
      (item) => Number.isInteger(item.id) && Number.isInteger(item.quantity) && item.quantity > 0,
    )
  } catch {
    return []
  }
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'add': {
      const existingItem = cart.find((item) => item.id === action.product.id)

      if (existingItem) {
        return cart.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...cart, { id: action.product.id, quantity: 1 }]
    }
    case 'increase':
      return cart.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
      )
    case 'decrease':
      return cart
        .map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0)
    case 'remove':
      return cart.filter((item) => item.id !== action.id)
    case 'clear':
      return []
    default:
      return cart
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, getSavedCart)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    dispatch({ type: 'add', product })
  }

  function increaseQuantity(id) {
    dispatch({ type: 'increase', id })
  }

  function decreaseQuantity(id) {
    dispatch({ type: 'decrease', id })
  }

  function removeFromCart(id) {
    dispatch({ type: 'remove', id })
  }

  function clearCart() {
    dispatch({ type: 'clear' })
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

