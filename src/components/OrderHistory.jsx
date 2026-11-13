import { useState } from 'react'
import './OrderHistory.css'

const ORDERS_STORAGE_KEY = 'soe-myitter-orders'

function getSavedOrders() {
  try {
    const orders = JSON.parse(window.localStorage.getItem(ORDERS_STORAGE_KEY) || '[]')
    return Array.isArray(orders) ? orders : []
  } catch {
    return []
  }
}

function OrderHistory({ onBack }) {
  const [orders] = useState(getSavedOrders)

  return (
    <main className="order-history-page">
      <section className="order-history-card">
        <button className="checkout-back-button" onClick={onBack} type="button">ပြန်သွားမည်</button>
        <h1>ကျွန်ုပ်၏ မှာယူမှုမှတ်တမ်း</h1>
        {orders.length === 0 ? (
          <p>မှာယူထားတဲ့ အော်ဒါမရှိသေးပါ။</p>
        ) : (
          <div className="order-history-list">
            {orders.slice().reverse().map((order) => (
              <article className="history-order" key={order.id}>
                <div className="history-order-heading">
                  <strong>အော်ဒါ {order.id}</strong>
                  <time dateTime={order.createdAt}>{new Intl.DateTimeFormat('my-MM', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(order.createdAt))}</time>
                </div>
                <p>{order.customer?.name} · {order.customer?.phone}</p>
                <p>ပစ္စည်း {order.items?.length ?? 0} မျိုး</p>
                <strong>{Number(order.totalPrice || 0).toLocaleString('my-MM')} ကျပ်</strong>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default OrderHistory
