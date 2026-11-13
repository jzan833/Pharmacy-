const shopAddress = 'ဘုရင့်နောင်လမ်းနှင့် စိန်ချယ်လမ်းထောင့်၊ ၄၄ ရပ်ကွက်၊ မြောက်ဒဂုံမြို့နယ်၊ ရန်ကုန်'
const shopPhone = '09977260146'
const mapAddress = encodeURIComponent('ဘုရင့်နောင်လမ်းနှင့် စိန်ချယ်လမ်းထောင့်၊ ၄၄ ရပ်ကွက်၊ မြောက်ဒဂုံမြို့နယ်၊ ရန်ကုန်')

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-intro"><span className="section-kicker">CONTACT & LOCATION</span><h1>ဆိုင်ကို ဆက်သွယ်ပါ</h1><p>ပစ္စည်းရရှိမှုနဲ့ ဈေးနှုန်းကို မလာမီ ဖုန်းဆက်အတည်ပြုနိုင်ပါတယ်။</p></div>
      <div className="contact-layout">
        <div className="contact-card">
          <div className="contact-line"><span>⌖</span><div><small>ဆိုင်လိပ်စာ</small><strong>{shopAddress}</strong></div></div>
          <div className="contact-line"><span>☎</span><div><small>ဖုန်းနံပါတ်</small><a href={`tel:${shopPhone}`}>09 977 260 146</a></div></div>
          <div className="contact-line"><span>◷</span><div><small>ဆိုင်ဖွင့်ချိန်</small><strong>ဆိုင်သို့ ဖုန်းဆက်မေးမြန်းပါ</strong></div></div>
          <a className="contact-call-button" href={`tel:${shopPhone}`}>ဖုန်းခေါ်မည် <span>→</span></a>
          <a className="contact-viber-button" href="viber://chat?number=%2B959977260146">Viber ဖွင့်မည်</a>
        </div>
        <div className="map-card">
          <div className="map-heading"><div><strong>ဆိုင်တည်ရှိရာအနီးဝန်းကျင်</strong><small>North Dagon · Yangon</small></div><span className="approximate-badge">အနီးဝန်းကျင်</span></div>
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=96.145%2C16.86%2C96.19%2C16.905&layer=mapnik&marker=16.88333%2C96.16667"
            title="မြောက်ဒဂုံမြို့နယ် အနီးဝန်းကျင်မြေပုံ"
          />
          <a className="map-directions" href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`} rel="noreferrer" target="_blank">Google Maps မှာဖွင့်ရန် ↗</a>
        </div>
      </div>
      <p className="map-disclaimer">မြေပုံမှာပြထားတာ မြောက်ဒဂုံမြို့နယ်အနီးဝန်းကျင်သာ ဖြစ်ပြီး ဆိုင်တံခါးပေါက်အတိအကျကို မညွှန်ပြပါ။</p>
    </section>
  )
}

export default ContactPage
