import { useContext } from 'react'
import { CartContext } from './cart-context'

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart ကို CartProvider အတွင်းမှာသာ အသုံးပြုနိုင်ပါတယ်')
  }

  return context
}
