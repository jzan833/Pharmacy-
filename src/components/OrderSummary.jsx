function OrderSummary({ items, totalPrice }) {
  return (
    <section className="order-summary">
      <h2>မှာယူမည့်ပစ္စည်းများ</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name} × {item.quantity.toLocaleString('my-MM')}</span>
            <strong>{(item.price * item.quantity).toLocaleString('my-MM')} ကျပ်</strong>
          </li>
        ))}
      </ul>
      <p className="order-summary-total">
        <span>စုစုပေါင်း</span>
        <strong>{totalPrice.toLocaleString('my-MM')} ကျပ်</strong>
      </p>
    </section>
  )
}

export default OrderSummary
