import { useState } from 'react'
import Checkout from './components/Checkout'
import ProductList from './components/ProductList'
import { CartProvider } from './context/CartContext'
import './App.css'

const THEME_STORAGE_KEY = 'soe-myitter-theme'

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [view, setView] = useState('store')
  const [theme, setTheme] = useState(getInitialTheme)

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
      } catch {
        // The selected theme still applies for this session if storage is unavailable.
      }

      return nextTheme
    })
  }

  return (
    <CartProvider>
      <div className={`pharmacy-app ${theme}-theme`}>
        {view === 'store' ? (
          <ProductList
            onOpenCart={() => setView('checkout')}
            onToggleTheme={toggleTheme}
            theme={theme}
          />
        ) : (
          <Checkout onContinueShopping={() => setView('store')} />
        )}
      </div>
    </CartProvider>
  )
}

export default App
