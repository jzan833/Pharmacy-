# SoeMyitter Pharmacy

မြောက်ဒဂုံ၊ ရန်ကုန်ရှိ ဆေးဆိုင်အတွက် React + Vite storefront နမူနာ။

**Live demo:** [soe-myitter-store.vercel.app](https://soe-myitter-store.vercel.app)

## ပါဝင်သောအရာများ

- ဆေးပစ္စည်းစာရင်း၊ အမျိုးအစား၊ ရှာဖွေမှုနှင့် ဈေးနှုန်းစီခြင်း
- Desktop sidebar နှင့် mobile menu
- Light/dark theme
- Cart, checkout form, order summary နှင့် browser ပေါ်ရှိ order history
- ဆိုင်လိပ်စာ၊ ဖုန်း၊ Viber link နှင့် North Dagon အနီးဝန်းကျင် map
- Wikimedia Commons နမူနာပုံများနှင့် [image credits](public/image-credits.html)

## စတင်အသုံးပြုရန်

```sh
npm install
npm run dev
```

## စစ်ဆေးရန်

```sh
npm run lint
npm run build
```

## လက်ရှိကန့်သတ်ချက်များ

- ဆေးအမည်၊ ဓာတ်ပုံ၊ ဈေးနှုန်းနှင့် လက်ကျန်စာရင်းများသည် UI ပြသရန် နမူနာဒေတာများဖြစ်သည်။ ဆိုင်၏ တကယ့်စာရင်းနှင့် အစားထိုးပါ။
- Cart နှင့် order history ကို ဝယ်သူ၏ browser `localStorage` ထဲတွင်သာ သိမ်းထားသည်။ ဆိုင်ရှင်ထံ အော်ဒါမပို့နိုင်သေးပါ။
- အော်ဒါများကို ဆိုင်ဘက်သို့ ပို့ရန် backend သို့မဟုတ် serverless API နှင့် ဆိုင်ရှင်အတွက် order dashboard/notification လိုအပ်သည်။
- Map သည် မြောက်ဒဂုံအနီးဝန်းကျင်ကို ခန့်မှန်းပြထားပြီး ဆိုင်တံခါးပေါက်၏ တိကျသော pin မဟုတ်ပါ။

## အသုံးပြုထားသော နည်းပညာများ

- React
- Vite
- Tailwind CSS
- Oxlint
