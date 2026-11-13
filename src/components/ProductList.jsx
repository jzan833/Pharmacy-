import products from '../data/products.json'
import { useCart } from '../context/useCart'
import './ProductList.css'

function ProductList() {
  const { addToCart } = useCart()

  return (
    <main className="store-page">
      <header className="store-header">
        <p className="store-eyebrow">ဒေါ်မြရီ ကုန်စုံဆိုင်</p>
        <h1>နေ့စဉ်သုံး ကုန်စုံပစ္စည်းများ</h1>
        <p className="store-description">လိုအပ်တာလေးတွေကို အိမ်အရောက်မှာယူလိုက်ပါ</p>
      </header>
      <section className="product-section" aria-label="ကုန်ပစ္စည်းများ">
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img className="product-image" src={product.image} alt={product.name} />
              <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price.toLocaleString('my-MM')} ကျပ်</p>
                <button className="add-to-cart-button" onClick={() => addToCart(product)} type="button">
                  ခြင်းထဲထည့်မည်
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductList
