import products from '../data/products.json'
import { useCart } from '../context/useCart'
import './Cart.css'

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart()
  const cartProducts = cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product)
  const itemCount = cartProducts.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  return (
    <aside className="cart-panel" aria-label="ဝယ်ခြင်း">
      <div className="cart-heading">
        <h2>ဝယ်ခြင်း</h2>
        <span className="cart-count">{itemCount.toLocaleString('my-MM')} မျိုး</span>
      </div>

      {cartProducts.length === 0 ? (
        <p className="cart-empty">ခြင်းထဲမှာ ပစ္စည်းမရှိသေးပါ။</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartProducts.map(({ id, quantity, product }) => (
              <li className="cart-item" key={id}>
                <img src={product.image} alt="" />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>{(product.price * quantity).toLocaleString('my-MM')} ကျပ်</p>
                  <div className="quantity-controls" aria-label={`${product.name} အရေအတွက်`}>
                    <button onClick={() => decreaseQuantity(id)} type="button" aria-label="အရေအတွက်လျှော့">
                      −
                    </button>
                    <span>{quantity.toLocaleString('my-MM')}</span>
                    <button onClick={() => increaseQuantity(id)} type="button" aria-label="အရေအတွက်တိုး">
                      +
                    </button>
                    <button
                      className="remove-item-button"
                      onClick={() => removeFromCart(id)}
                      type="button"
                    >
                      ဖယ်ရှားမည်
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>စုစုပေါင်း</span>
            <strong>{totalPrice.toLocaleString('my-MM')} ကျပ်</strong>
          </div>
          <button className="clear-cart-button" onClick={clearCart} type="button">
            ခြင်းရှင်းမည်
          </button>
        </>
      )}
    </aside>
  )
}

export default Cart
