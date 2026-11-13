import { useMemo, useState } from 'react'
import products from '../data/products.json'
import { useCart } from '../context/useCart'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import NoticeBanner from './NoticeBanner'
import ProductSection from './ProductSection'
import './ProductList.css'

const categories = [
  'အကိုက်အခဲနှင့်ဖျားနာ',
  'အအေးမိနှင့်ချောင်းဆိုး',
  'ဗီတာမင်နှင့်အားဖြည့်',
  'အစာခြေနှင့်ဓာတ်ဆား',
  'ကျန်းမာရေးအသုံးအဆောင်',
]
const shopPhone = '09977260146'

function ProductList({ onOpenCart, onToggleTheme, theme }) {
  const { addToCart, cart } = useCart()
  const [activePage, setActivePage] = useState('home')
  const [activeCategory, setActiveCategory] = useState('အားလုံး')
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('featured')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [addedProductId, setAddedProductId] = useState(null)
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase()
    const filteredProducts = products.filter((product) => {
      const matchesCategory = activeCategory === 'အားလုံး' || product.category === activeCategory
      const matchesSearch = !normalizedSearch ||
        `${product.name} ${product.genericName} ${product.category}`.toLocaleLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })

    if (sortOrder === 'price-low') return filteredProducts.sort((first, second) => first.price - second.price)
    if (sortOrder === 'price-high') return filteredProducts.sort((first, second) => second.price - first.price)
    return filteredProducts
  }, [activeCategory, search, sortOrder])

  function selectPage(page, category = 'အားလုံး') {
    setActivePage(page)
    setActiveCategory(category)
    setSidebarOpen(false)
  }

  function handleAddToCart(product) {
    addToCart(product)
    setAddedProductId(product.id)
    window.setTimeout(() => setAddedProductId(null), 1400)
  }

  return (
    <div className="store-layout">
      <header className="store-topbar">
        <button aria-label="မီနူးဖွင့်ရန်" className="mobile-menu-button" onClick={() => setSidebarOpen(!sidebarOpen)} type="button">☰</button>
        <button className="brand-lockup" onClick={() => selectPage('home')} type="button">
          <span className="brand-mark">S</span>
          <span className="brand-text"><strong>SoeMyitter</strong><small>PHARMACY</small></span>
        </button>
        <label className="store-search">
          <span aria-hidden="true">⌕</span>
          <input
            onChange={(event) => {
              setSearch(event.target.value)
              setActiveCategory('အားလုံး')
              if (event.target.value) setActivePage('catalog')
            }}
            placeholder="ဆေးအမည်၊ ပါဝင်ပစ္စည်းဖြင့် ရှာရန်"
            value={search}
          />
          <kbd>ရှာရန်</kbd>
        </label>
        <div className="topbar-actions">
          <button className="theme-toggle" onClick={onToggleTheme} type="button"><span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span><span className="theme-label">{theme === 'light' ? 'အမှောင်' : 'အလင်း'}</span></button>
          <button className="topbar-cart" onClick={onOpenCart} type="button"><span aria-hidden="true">▣</span><span>ခြင်း</span><b>{cartCount.toLocaleString('my-MM')}</b></button>
        </div>
      </header>

      <div className="store-body">
        {sidebarOpen && <button aria-label="မီနူးပိတ်ရန်" className="sidebar-scrim" onClick={() => setSidebarOpen(false)} type="button" />}
        <aside className={`store-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
          <div className="sidebar-heading">ဆိုင်မီနူး</div>
          <nav aria-label="အဓိကမီနူး" className="main-navigation">
            <button className={activePage === 'home' ? 'active' : ''} onClick={() => selectPage('home')} type="button"><span>⌂</span> ပင်မစာမျက်နှာ</button>
            <button className={activePage === 'catalog' && activeCategory === 'အားလုံး' ? 'active' : ''} onClick={() => selectPage('catalog')} type="button"><span>▦</span> ဆေးပစ္စည်းအားလုံး</button>
            <button className={activePage === 'about' ? 'active' : ''} onClick={() => selectPage('about')} type="button"><span>ⓘ</span> ဆိုင်အကြောင်း</button>
            <button className={activePage === 'contact' ? 'active' : ''} onClick={() => selectPage('contact')} type="button"><span>⌖</span> ဆက်သွယ်ရန်နှင့်မြေပုံ</button>
          </nav>
          <div className="sidebar-heading category-heading">အမျိုးအစားများ</div>
          <nav aria-label="ဆေးအမျိုးအစားများ" className="category-navigation">
            <button className={activeCategory === 'အားလုံး' && activePage === 'catalog' ? 'active' : ''} onClick={() => selectPage('catalog')} type="button"><span className="category-dot all-dot" /> အားလုံး <small>{products.length}</small></button>
            {categories.map((category, index) => (
              <button className={activeCategory === category && activePage === 'catalog' ? 'active' : ''} key={category} onClick={() => selectPage('catalog', category)} type="button">
                <span className={`category-dot category-dot-${index}`} />{category}<small>{products.filter((product) => product.category === category).length}</small>
              </button>
            ))}
          </nav>
          <div className="sidebar-help">
            <span className="help-icon">✳</span><strong>အကူအညီလိုပါသလား?</strong>
            <p>ဆေးပစ္စည်းအကြောင်း ဆိုင်ကို တိုက်ရိုက်မေးမြန်းနိုင်ပါတယ်။</p>
            <a href={`tel:${shopPhone}`}>ဆိုင်သို့ ဖုန်းခေါ်ရန်</a>
          </div>
          <p className="sidebar-footnote">© SoeMyitter Pharmacy</p>
        </aside>

        <main className="store-main">
          {activePage === 'home' && (
            <>
              <section className="pharmacy-hero">
                <div className="hero-copy">
                  <span className="hero-pill"><span /> မြောက်ဒဂုံ၊ ရန်ကုန်</span>
                  <h1>ကျန်းမာရေးအတွက်<br /><em>ယုံကြည်စိတ်ချရတဲ့</em><br />မိတ်ဖက်ဆိုင်</h1>
                  <p>ဆေးဝါးနဲ့ ကျန်းမာရေးအသုံးအဆောင်တွေကို အဆင်ပြေစွာ ရှာဖွေမှာယူလိုက်ပါ။</p>
                  <button className="hero-cta" onClick={() => selectPage('catalog')} type="button">ပစ္စည်းများကြည့်ရန် <span>→</span></button>
                  <div className="hero-trust"><span>✓</span> ပစ္စည်းရရှိမှုကို ဆိုင်တွင် အတည်ပြုပေးပါမည်</div>
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-cross">+</div>
                  <img src="/images/pharmacy/vitamins.jpg" alt="" />
                  <span className="hero-floating-card">ဆိုင်ဖွင့်ချိန်<br /><strong>ဖုန်းဆက်မေးမြန်းပါ</strong></span>
                </div>
              </section>
              <NoticeBanner />
              <section className="quick-categories">
                <div className="section-heading">
                  <div><span className="section-kicker">အလွယ်တကူရှာဖွေပါ</span><h2>အမျိုးအစားအလိုက် ကြည့်ရန်</h2></div>
                  <button onClick={() => selectPage('catalog')} type="button">အားလုံးကြည့်ရန် →</button>
                </div>
                <div className="category-tiles">
                  {categories.slice(0, 4).map((category, index) => (
                    <button className="category-tile" key={category} onClick={() => selectPage('catalog', category)} type="button">
                      <span className={`tile-icon tile-icon-${index}`}>{['✚', '☁', '✳', '◉'][index]}</span>
                      <strong>{category}</strong>
                      <span>{products.filter((product) => product.category === category).length} မျိုး <b>→</b></span>
                    </button>
                  ))}
                </div>
              </section>
              <ProductSection onAddToCart={handleAddToCart} products={products.slice(0, 4)} addedProductId={addedProductId} onViewAll={() => selectPage('catalog')} title="လူကြိုက်များသော ပစ္စည်းများ" subtitle="POPULAR PICKS" />
            </>
          )}

          {activePage === 'catalog' && (
            <>
              <div className="catalog-heading">
                <div><span className="section-kicker">ဆေးဆိုင်စာရင်း</span><h1>{activeCategory === 'အားလုံး' ? 'ဆေးပစ္စည်းအားလုံး' : activeCategory}</h1><p>ပစ္စည်း {visibleProducts.length} မျိုး</p></div>
                <label className="sort-control">စီစဉ်ရန် <select onChange={(event) => setSortOrder(event.target.value)} value={sortOrder}><option value="featured">အကြံပြုထားသည်</option><option value="price-low">ဈေးနှုန်း အနိမ့်မှ</option><option value="price-high">ဈေးနှုန်း အမြင့်မှ</option></select></label>
              </div>
              <NoticeBanner />
              <ProductSection onAddToCart={handleAddToCart} products={visibleProducts} addedProductId={addedProductId} emptyMessage="ဒီရှာဖွေမှုနဲ့ ကိုက်ညီတဲ့ပစ္စည်း မတွေ့ပါ။" />
            </>
          )}

          {activePage === 'about' && <AboutPage onViewCatalog={() => selectPage('catalog')} />}
          {activePage === 'contact' && <ContactPage />}

          <footer className="store-footer">
            <div><strong>SoeMyitter Pharmacy</strong><span>ကျန်းမာရေးအတွက် အနီးနားက ဆေးဆိုင်</span></div>
            <p>မြောက်ဒဂုံ၊ ရန်ကုန် · <a href={`tel:${shopPhone}`}>09 977 260 146</a></p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default ProductList
