import Checkout from './components/Checkout'
import ProductList from './components/ProductList'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Checkout />
      <ProductList />
    </CartProvider>
  )
}

export default App
