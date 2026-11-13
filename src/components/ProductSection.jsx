function ProductSection({ onAddToCart, products, addedProductId, onViewAll, title, subtitle, emptyMessage }) {
  return (
    <section className="catalog-section">
      {(title || subtitle) && (
        <div className="section-heading product-section-heading">
          <div><span className="section-kicker">{subtitle}</span><h2>{title}</h2></div>
          {onViewAll && <button onClick={onViewAll} type="button">အားလုံးကြည့်ရန် →</button>}
        </div>
      )}
      {products.length ? (
        <div className="product-grid">
          {products.map((product) => (
            <article className="pharmacy-product-card" key={product.id}>
              <div className="product-image-wrap">
                <img className="product-image" src={product.image} alt={`${product.name} နမူနာပုံ`} loading="lazy" />
                <span className="sample-image-label">နမူနာပုံ</span>
                <button aria-label={`${product.name} ကို ခြင်းထဲထည့်ရန်`} className="quick-add-button" onClick={() => onAddToCart(product)} type="button">+</button>
              </div>
              <div className="product-details">
                <span className="product-category-label">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="generic-name">{product.genericName}</p>
                <p className="product-description">{product.description}</p>
                <a className="image-source-link" href={product.imageSource} rel="noreferrer" target="_blank">ဓာတ်ပုံရင်းမြစ် ↗</a>
                <div className="product-card-bottom">
                  <strong className="product-price">{product.price.toLocaleString('my-MM')} ကျပ်</strong>
                  <button className={`add-to-cart-button ${addedProductId === product.id ? 'is-added' : ''}`} onClick={() => onAddToCart(product)} type="button">
                    {addedProductId === product.id ? 'ထည့်ပြီးပါပြီ ✓' : 'ခြင်းထဲထည့်မည်'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : <p className="empty-search-state">{emptyMessage || 'ဒီအမျိုးအစားမှာ ပစ္စည်းမရှိသေးပါ။'}</p>}
    </section>
  )
}

export default ProductSection
