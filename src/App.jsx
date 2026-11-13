import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Cart />
      <ProductList />
    </CartProvider>
  )
}

export default App
