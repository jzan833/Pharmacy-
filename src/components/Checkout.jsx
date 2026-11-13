import { useState } from 'react'
import products from '../data/products.json'
import { useCart } from '../context/useCart'
import Cart from './Cart'
import OrderSummary from './OrderSummary'
import OrderHistory from './OrderHistory'
import './Checkout.css'

const ORDERS_STORAGE_KEY = 'soe-myitter-orders'

function Checkout({ onContinueShopping }) {
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState('cart')
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' })
  const [completedOrder, setCompletedOrder] = useState(null)
  const [saveError, setSaveError] = useState('')

  const orderItems = cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product)
    .map(({ id, quantity, product }) => ({
      id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    }))
  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0)

  function handleSubmit(event) {
    event.preventDefault()
    setSaveError('')

    const order = {
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`,
      createdAt: new Date().toISOString(),
      customer,
      items: orderItems,
      totalPrice,
    }

    try {
      let savedOrders = []
      try {
        const storedOrders = JSON.parse(window.localStorage.getItem(ORDERS_STORAGE_KEY) || '[]')
        savedOrders = Array.isArray(storedOrders) ? storedOrders : []
      } catch {
        savedOrders = []
      }

      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([...savedOrders, order]))
      setCompletedOrder(order)
      setStep('complete')
      clearCart()
    } catch {
      setSaveError('အော်ဒါကို သိမ်းဆည်းလို့မရပါ။ ထပ်မံကြိုးစားပေးပါ။')
    }
  }

  if (step === 'complete' && completedOrder) {
    return (
      <main className="checkout-page">
        <section className="checkout-card order-confirmation">
          <header className="receipt-header">
            <p className="checkout-eyebrow">မှာယူမှု အတည်ပြုပြီး</p>
            <h1>မှာယူမှု အကျဉ်းချုပ်</h1>
            <div className="receipt-meta">
              <p><span>အော်ဒါနံပါတ်</span><strong>{completedOrder.id}</strong></p>
              <p><span>ရက်စွဲ</span><strong>{formatOrderDate(completedOrder.createdAt)}</strong></p>
            </div>
          </header>

          <section className="receipt-customer" aria-label="ဝယ်သူအချက်အလက်">
            <h2>ဝယ်သူအချက်အလက်</h2>
            <p><span>အမည်</span><strong>{completedOrder.customer.name}</strong></p>
            <p><span>ဖုန်း</span><strong>{completedOrder.customer.phone}</strong></p>
            <p><span>ပို့ဆောင်ရမည့်လိပ်စာ</span><strong>{completedOrder.customer.address}</strong></p>
          </section>

          <OrderSummary items={completedOrder.items} totalPrice={completedOrder.totalPrice} />

          <p className="screenshot-instruction">
            ဒီစာမျက်နှာကို Screenshot ရိုက်ပြီး SoeMyitter Pharmacy ရဲ့ Viber (09 977 260 146) ကို ပို့ပေးပါ
          </p>
          <a
            className="viber-button"
            href="viber://chat?number=%2B959977260146"
          >
            Viber ဖွင့်မည်
          </a>
          <p className="thank-you-message">ကျေးဇူးတင်ပါတယ်၊ SoeMyitter Pharmacyက ဖုန်းပြန်ဆက်ပါလိမ့်မယ်</p>
          <button className="checkout-secondary-button" onClick={() => setStep('history')} type="button">
            ကျွန်တော့် order history ကြည့်မည်
          </button>
        </section>
      </main>
    )
  }

  if (step === 'history') {
    return <OrderHistory onBack={() => setStep('cart')} />
  }

  if (step === 'form') {
    return (
      <main className="checkout-page">
        <section className="checkout-card">
          <button className="checkout-back-button" onClick={() => setStep('cart')} type="button">
            ခြင်းသို့ပြန်သွားမည်
          </button>
          <p className="checkout-eyebrow">နောက်ဆုံးအဆင့်</p>
          <h1>ပို့ဆောင်ရန် အချက်အလက်</h1>
          <OrderSummary items={orderItems} totalPrice={totalPrice} />
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>
              ဝယ်သူအမည်
              <input autoComplete="name" name="name" onChange={(event) => setCustomer({ ...customer, name: event.target.value })} required value={customer.name} />
            </label>
            <label>
              ဖုန်းနံပါတ်
              <input
                autoComplete="tel"
                inputMode="tel"
                name="phone"
                onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                onInput={(event) => event.currentTarget.setCustomValidity('')}
                onInvalid={(event) => event.currentTarget.setCustomValidity('09 ဖြင့်စသော ဂဏန်း ၉ လုံးမှ ၁၁ လုံးအထိ ထည့်ပါ။')}
                pattern="09[0-9]{7,9}"
                placeholder="09xxxxxxxxx"
                required
                title="09 ဖြင့်စသော ဂဏန်း ၉ လုံးမှ ၁၁ လုံးအထိ ထည့်ပါ။"
                value={customer.phone}
              />
            </label>
            <label>
              ပို့ဆောင်ရမည့်လိပ်စာ
              <textarea autoComplete="street-address" name="address" onChange={(event) => setCustomer({ ...customer, address: event.target.value })} required rows="3" value={customer.address} />
            </label>
            {saveError && <p className="checkout-error" role="alert">{saveError}</p>}
            <button className="checkout-primary-button" type="submit">အတည်ပြုမည်</button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="checkout-store-heading">
        <button className="checkout-back-button" onClick={onContinueShopping} type="button">← ဆေးစာရင်းသို့ ပြန်သွားမည်</button>
        <p>SoeMyitter <strong>Pharmacy</strong></p>
      </div>
      <Cart
        onCheckout={() => setStep('form')}
        onContinueShopping={onContinueShopping}
        onOrderHistory={() => setStep('history')}
      />
    </main>
  )
}

function formatOrderDate(date) {
  return new Intl.DateTimeFormat('my-MM', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))
}

export default Checkout
