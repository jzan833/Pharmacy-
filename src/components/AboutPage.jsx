function AboutPage({ onViewCatalog }) {
  return (
    <section className="info-page">
      <span className="section-kicker">ABOUT US</span>
      <h1>SoeMyitter Pharmacy</h1>
      <p className="info-lead">မြောက်ဒဂုံရပ်ကွက်အတွင်းရှိ ဆေးဝါးနှင့် ကျန်းမာရေးအသုံးအဆောင်ဆိုင်။</p>
      <div className="about-values">
        <article><span>01</span><h2>ရှင်းလင်းတဲ့အချက်အလက်</h2><p>ပစ္စည်းအမျိုးအစားနဲ့ ဈေးနှုန်းကို စစ်ဆေးလွယ်အောင် ပြသပေးရန် ရည်ရွယ်ထားပါတယ်။</p></article>
        <article><span>02</span><h2>တိုက်ရိုက်ဆက်သွယ်နိုင်မှု</h2><p>ပစ္စည်းရရှိမှု၊ ပို့ဆောင်မှုနဲ့ အခြားမေးခွန်းတွေကို ဆိုင်ကို ဖုန်းဆက်မေးနိုင်ပါတယ်။</p></article>
        <article><span>03</span><h2>ဆိုင်မှာအတည်ပြုမှာယူမှု</h2><p>ဒီစာမျက်နှာရှိ catalog ကို နမူနာအဖြစ်သာပြထားပြီး လက်ရှိဈေးနှုန်းနဲ့ stock ကို ဖုန်းဖြင့်အတည်ပြုပါ။</p></article>
      </div>
      <button className="hero-cta" onClick={onViewCatalog} type="button">ပစ္စည်းစာရင်းကြည့်ရန် →</button>
    </section>
  )
}

export default AboutPage
