import { Link } from 'react-router-dom'
import './menu.css'

const sections = [
  {
    title: 'Tea Tasting Menu',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Ginger Josh', 'AKadak chai for kadak moods!,Pure adrak wali feeling — ek sip aur neend bhaag jaaye,Thoda tezz, thoda jazba!'],
      ['Masala Masti', 'Jab chai aur charcha dono ho thode spicy,Ginger, Elaichi, Saunf aur thoda drama bhi, Adds more fire than your group chat!'],
      ['Ginger Cinnamon Swag', 'Sweet bhi, heat bhi — dono full power mein!,Jab adrak mila dalchini se, sparks ud gaye,Perfect for un logon ke liye jo chai bhi attitude se peete hain.'],
      ['Tulsi Tantra', 'Sanskari chai, thoda global swag ke saath,Tulsi ke blessings har cup mein,“Om sip namah” vibes only.'],
    ],
  },
  {
    title: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Desi Hot Coffee', 'Gaon wali feel, sheher wali style'],
      ['South Indian Filter Coffee', 'Idli sambhar ke asli soulmate'],
      ['Espresso Shot', 'Seedha dil pe lagti hai yeh teekhi wali chhoot!'],
      ['Classic Americano', 'Bilkul straight, no drama'],
      ['Cafe Latte', 'Doodh bhi, pyaar bhi'],
      ['Caramel Coffee', 'Thoda meetha, thoda classy'],
      ['Cappuccino', 'Foam itna ki shaadi ke sapne aa jaayein'],
      ['Cortado', 'Half-half jaise complicated rishtay']
    ],
  },
  {
    title: 'Cold Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Cold Coffee', 'Simple, sweet aur seedha dil mein'],
      ['Cold Coffee with Ice-Cream', 'Thandi coffee, garam jazbaat'],
      ['Cold Coffee with Choco Chips', 'Coffee ki shaadi ho gayi dessert se']
    ],
  },
  {
    title: 'Indian Special Soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Adraki Tamatar Shorba', 'Garam garam tomato soup with a zing of adrak — perfect for sukoon bhari shaam'],
      ['Veg Clear Soup', 'Halke-phulke mood ke liye — light, fresh aur full of flavour']
    ],
  },
  {
    title: 'Oriental Specials',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Hot & Sour Soup', 'Thoda teekha, thoda khatta — ek dum Indo-Chinese mood! Perfect to warm up your day'],
      ['Veg Manchow Soup', 'Crunchy noodles ke saath spicy soup ka ultimate combo — full street-style comfort']
    ],
  },
  {
    title: 'Maggi Specials',
    image: 'https://images.unsplash.com/photo-1692273212247-f5efb3fc9b87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFnZ2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
    items: [
      ['Classic Masala Maggi', 'Wahi old-school taste… garam, masaledaar aur full nostalgia!'],
      ['Veggie Loaded Maggi', 'Fresh veggies, full flavour – thoda healthy, thoda tasty!'],
      ['Cheese Burst Maggi', 'Melty cheese + masala Maggi = swad ka explosion!'],
      ['Tandoori Tadka Maggi', 'Smoky flavour, spicy twist – ekdum dhaba style!'],
      ['Peri Peri Maggi', 'Thodi hatke, thodi spicy – perfect for the bold souls!'],
      ['Butter Garlic Maggi', 'Soft noodles + makhan + lahsun = comfort ka ultimate combo!']
    ],
  },
  {
    title: 'Parathas',
    image: 'https://images.unsplash.com/photo-1683533761804-5fc12be0f684?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyYXRoYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
    items: [
      ['Aloo Paratha'],
      ['Pyaz Paratha'],
      ['Gobhi Paratha'],
      ['Besan Pyaz Paratha'],
      ['Bhujia Paratha'],
      ['Mix Veg Paratha'],
      ['Paneer Bhujji Paratha']
    ],
  },
  {
    title: 'Halka Fulka Khana',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop',
    items: [
      { 
        group: 'Idli Special',
        items: [
          ['Podi Idli'],
          ['Peri Peri Idli'],
          ['Fried Idli'],
          ['Vaghar Idli'],
          ['Idli Sambhar'],
        ]
      },
      ['Pav Bhaji', 'Buttered bread + veggie mash = happiness smeared generously'],
      ['Dahi K Shole', 'Yogurt + spice = flavor fireworks!'],
      ['Rajma Chawal', 'The ultimate comfort cuddle in a plate'],
      ['Chole Chawal', `When your stomach says, "I want something chole-licious!"`],
      ['Hara Bhara Kebab', 'Green, mean, and totally bean-credible'],
    ],
  },
  {
    title: 'Chaat Corner',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop',
    items: [
      { 
        group: 'Street Legends',
        items: [
          ['Vada Pav', 'Spicy, और थोड़ा Naughty!'],
          ['Maska Bun', 'Butter का Love Affair'],
          ['Kachchi Dabeli', 'Mmm… मस्ती Full On!'],
          ['Cheese Maska Bun', 'Extra Cheese, Extra Kissable ?']
        ]
      },
      { 
        group: 'Dahi & Pakoda Love',
        items: [
          ['Dahi Vada', 'Soft, Spicy, और थोड़ा Sexy'],
          ['Dal Pakoda', 'Crispy Love In Every Bite'],
          ['Paneer Pakoda', 'Fried To Perfection, Heart Thief'],
          ['Mel Jhol Pakoda', 'Saucy, Spicy, Full On Mood']
        ]
      },
      { 
        group: 'Samosa Affair',
        items: [
          ['Samosa Chat with Chole', 'Desi Romance In A Plate']
        ]
      }
    ]
  },
    {
    title: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Veg Crispy Burger', 'क्रंच करो , मस्त र!'],
      ['Veg Onion Burger', 'प्या ज़ की चा ल, Taste धल!'],
      ['Veg Cheese Slice Burger', 'Cheese ka Hug, Bite ka Thug'],
      ['Veg Onion & Tomato Burger', 'Classic Combo, Zaika Full On'],
      ['Veg Tandoori Burger', 'Thoda Tandoor, Full-On Swag'],
      ['Veg Double Tikki Burger', 'Double Tikki, Double Masti!'],
      ['Veg Paneer Burger', 'Paneer ka Swag, Mood Ka Tag'],
    ],
  },
  {
    title: 'Perfect Roll',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Classic Paneer Wrap', 'पर classic swag, Bite magic!'],
      ['Veggie Delight Wrap', 'Veggies full tadka, Mood full ध!'],
      ['Aloo Tikki Wrap', 'Crispy Tikki, Chatpata Zaika'],
      ['Tandoori Paneer Wrap', 'Tandoor, Full-On Swag'],
      ['Veg & Noodle Wrap', 'Noodles twist, Zaika lift!'],
    ],
  },
  {
    title: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['VEG-ILICIOUS (Vegetable Sandwich)', 'Har bite mein garden party 🌿 — thoda green, thoda queen!'],
      ['COLESLAW SWAG (Coleslaw Sandwich)', 'Creamy vibes only — coolness ka overdose'],
      ['CLUB WALA LOVE (Club Sandwich)', '3 layers of temptation — ek khaya, dil gaya!'],
      ['BOMBAY MAGIC (Bombay Sandwich)', 'Masala, memories & masti — ek bite aur local train miss!'],
      ['CORN-SPINACH AFFAIR (Corn & Spinach Sandwich)', 'Healthy bhi, hot bhi — bilkul tere jaise'],
      ['TANDOORI ROMANCE (Tandoori Paneer Sandwich)', 'Desi tadka, firangi touch — dil garden garden ho gaya!'],
    ],
  },
  {
    title: 'China Town',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['ROLL WITH IT (Spring Roll)', 'Outside crisp, andar full romance ❤ — एक bite और ल ल ल!'],
      ['CRISPY CORN CRUSH', 'मुँह में crunch, ल punch — snack , swag !'],
      ['MANCHURIAN MOOD', 'spicy, saucy — full Chinese chemistry! (Dry / Gravy)'],
      ['PANEER CHILLI CHARMER', 'Paneer toh baby, attitude (Dry / Gravy)'],
      ['CHILLI MUSHROOM MASALA', 'Bold flavour, soft ल — hero , zero calories (almost)!'],
      ['KUNG PAO PYAAR (Kung Pao Paneer)', 'Kung Fu taste kicks 💥 — प्र knockout punch!'],
      ['SEOUL-MATE PANEER (Korean Paneer)', 'Sweet + spicy = perfect Jodi! 🇰🇷 — एक bite aur oppa wow!'],
    ],
  },
  {
    title: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['ALFREDO AFFAIR', 'Creamy vibes, dreamy feels — itna smooth ke ल घल ए!'],
      ['AGLIO E OLIO ATTITUDE', 'Simple, sexy aur full Italian tashan 🇮🇹 — olive oil bhi blush kare!'],
      ['ARRABBIATA ANGER MANAGEMENT', 'Thoda tezz, thoda jazba — spice level: ex-boyfriend revenge!'],
      ['ROSY VEG ROMANCE', 'White + Red = Love Story — pasta bhi filmy nikla!'],
      ['PESTO PASSION', 'Green, fresh, aur full of life — हर bite – mamma mia!'],
      ['SPICY SHIITAKE DRAMA', 'मशरूम mast madness taste itna bold, censor board fail!'],
    ],
  },
  {
    title: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['FRESH LIME SWAG (Fresh Lime Soda)'],
      ['ICED TEA TANTRA (Lemon / Peach / Strawberry / Passion Fruit)'],
      ['BLUE LAGOON BABE'],
      ['VIRGIN MOJITO VIBE (Orange / Strawberry)'],
      ['MINT MOJITO MAGIC'],
      ['VIRGIN PIÑA COLADA PARADISE'],
      ['FROZEN MARGARITA MASTI (Strawberry / Kiwi)'],
      ['FRUIT PUNCH PYAAR'],
      ['SPICY GUAVA GOSSIP'],
    ],
  },
  {
    title: 'Noodles & Rice',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['BBQ BABY CORN DRAMA', 'Smoky, saucy aur full attitude – corn bhi hot ho sakta hai!'],
      ['VEG NOODLES VIBE', 'Simple nahi, seductive hai – slurp karo, flirt karo!'],
      ['HAKKA HO JA! (Hakka Noodles)', 'Full toss of taste – street wala swag, five-star wala feel!'],
      ['SINGAPORE SWING (Singapore Noodles)', 'Ek bite aur tu globe-trotter – spice ka passport ready hai!'],
      ['CHILLI GARLIC NOODLES', 'Thoda tezz, thoda tease – dil mein garam, mood mein charm!'],
      ['VEGETABLE RICE RAGA', 'Simple soul food – rice bhi classy lag sakta hai!'],
      ['SCHEZWAN SIZZLE RICE', 'Laal mirch ka jadoo – har grain mein China Town ka thrill!'],
      ['CHILLY GARLIC GROOVE', 'Garlic ka glow-up – thoda hot, thoda hypnotic!'],
      ['KERALA VEG BIRYANI', 'Coconut, curry aur coastal romance – desi heart, global art!'],
    ],
  },

  {
    title: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['MARGHERITA MAGIC', 'Simple, classy aur full Italian crush 🇮🇹 – हर bite  "Mama Mia!"'],
      ['SWEET EMOTION', 'Cheese ke saath thoda romance – sweet bhi, heat bhi!'],
      ['MEXICAN MASALA', 'Desi soul, firangi goal – jalapeño jalsa in every slice!'],
      ['FIERY HOT FANTASY', 'जल – this pizza plays with fire… and feelings!'],
      ['CILANTRO GREEN ONION', 'Fresh, funky, aur full attitude – herb ka swag level: MAX!'],
      ['PESTO PASSION', 'Green dreams, creamy schemes – हर bite  "Bellissimo!"'],
      ['QUATTRO FORMAGGI', '4 cheeses, 1 love story – dil melt, mood set!'],
      ['BBQ PANEER PARTY', 'Desi grill, videsi thrill – paneer ka bold avatar!'],
      ['CHEESE BURST BLISS', 'Cheese ka tsunami – mouth full, soul full!'],
      ['MORE THAN WORDS', 'Soft base, deep feels – itna pyaar pizza mein bhi ho sakta hai!']
    ],
  },
  {
    title: 'Shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['VANILLA VIBE', 'Simple, sexy aur evergreen – classic taste, killer grace!'],
      ['STRAWBERRY SIZZLE', 'Pink wala pyaar – sweet talk in a glass!'],
      ['BLACK CURRENT BUZZ', 'Berry bold, berry beautiful – thoda fancy, thoda filmy!'],
      ['DARK CHOCOLATE DESIRE', 'Deep, dark, aur full drama – ek sip aur dil ho gaya blackout!'],
      ['KITKAT KISS', 'Break bhi mile, taste bhi mile – ek sip aur mood set ho gaya!'],
      ['OREO OBSESSION', 'Black & white ka perfect love story – dip it, sip it, flip it!'],
      ['CHOCOLATE CHIP CHARMER ', 'Chocolate rain aur chip storm – sip karo, melt ho jao!'],
      ['CHOCO HAZELNUT HANGOVER ', 'Ek sip aur mind blown – itna smooth ke guilty feel hi na ho!'],
      ['BUTTERSCOTCH BABY ', 'Golden vibes, sugar high – cute bhi, kick bhi!'],
      ['CHOCOLATE-BROWNIE BLISS ', 'Brownie ka bold andaaz – thick, rich & thoda naughty!'],
      ['NUTELLA NAZAAKAT ', 'Hazelnut ka husn – ek sip aur duniya soft lagne lage!'],
      ['OREO NUTELLA AFFAIR ', 'Double trouble, triple temptation – yeh toh shake nahi, sin hai!'],
      ['FERRERO ROCHER FANTASY', 'Luxury in a glass – hazelnut aur chocolate ka royal romance!']
    ],
  },
  {
    title: 'Chakna',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['CHANA JOR GARAM ', 'Tikki-masala vibes – ek bite aur dil ho gaya full dhamaal!'],
      ['PEANUT MASALA ', 'Crunchy, chatpata aur bilkul bindass – mood bhi masaledaar!'],
      ['KALA CHANA CHAKHNA ', 'Protein + punch – thoda desi, thoda daring!'],
      ['SPROUTS WITH MINT SAUCE ', 'Healthy bhi, hatke bhi – ek bite aur feel light aur right!'],
      ['CHINESE BHEL ', 'Thoda Indo, thoda Chinese – har bite mein fusion ka tadka!'],
      ['SAUTÉED VEGETABLES ', 'Colorful, crisp aur totally fresh – ek bite aur heart fresh!'],
      ['CHEESY VEGGIE NACHOS ', 'Cheese ka dhamaal + salsa ka jhatka – ek plate aur party shuru!']
    ],
  },
  {
    title: 'Waffles',
    image: 'https://images.unsplash.com/photo-1613483515012-8879be29b578?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhZmZsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
    items: [
      ['RED VELVET RAAZ' , 'Thoda classy, thoda sexy – Har bite ek Valentine vibe!'],
      ['BROWNIE BLISS' , 'Soft inside, bold outside – ek bite aur love story shuru! ❤'],
      ['DARK CHOCOLATE DESIRE' , 'Deep, dark aur dangerous – yeh dessert nahi, mood hai!'],
      ['CHOCOCHIP CHARMER' , 'Chocolate rain, chip storm – bite karo aur smile born!'],
      ['HOT CHOCOLATE HUG' , 'Ek sip mein comfort, ek sip mein crush – liquid love story!'],
      ['MILK CHOCOLATE MAGIC' , 'Simple, smooth aur fully mood booster – sweetness ka overdose!'],
      ['KITKAT CRUNCH' , 'Break bhi, bake bhi – ek crunch aur zindagi set!'],
      ['OREO OBSESSION' , 'Black & white wala jazba – thoda cookie, thoda naughty!'],
      ['TRIPLE CHOCOLATE TEMPTATION' , 'Teen guna chocolate, ek hi crime – overdose of delicious sin!'],
      ['BISCOFF BLISS' , 'Caramel dreams & cinnamon feels – London ka taste, India ka dil!'],
      ['SIZZLER BROWNIE' , 'Garami bhi, mithaas bhi – hot plate, hotter date!'],
      ['NUTELLA NIRVANA' , 'Hazelnut ka husn – spread the love, lick the happiness!'],
      ['HAZELNUT BROWNIE HIGH' , 'Crunchy, gooey aur thoda luxury – yeh brownie nahi, fantasy hai!'],
      ['SIZZLER BROWNIE WITH ICE CREAM' , 'Heat meets sweet – perfect couple goals dessert!']
    ],
  },                                                                                                                                                                                     
]

export default function MenuPage() {
  return (
    <div className="menu-page">
      <header className="menu-hero">
        <div className="menu-hero__inner">
          <h1>Our Menu</h1>
          <p>Elegantly curated beverages and bites crafted with care.</p>
          <Link to="/" className="btn btn--light">← Back to Home</Link>
        </div>
      </header>

      <main className="menu-wrapper">
        {sections.map((sec) => (
          <section key={sec.title} className="menu-section">
            {sec.image && (
              <div className="menu-section__image">
                <img src={sec.image} alt={sec.title} loading="lazy" />
              </div>
            )}
            <div className="menu-section__content">
              <h2>{sec.title}</h2>
              <ul>
                {sec.items.map((item) => {
                  if (item && item.group && Array.isArray(item.items)) {
                    // Special elegant layout for "Idli Special"
                    if (item.group === 'Idli Special') {
                      return (
                        <li key={item.group} className="item-group idli-special">
                          <div className="item-name">{item.group}</div>
                          <ul className="idli-grid">
                            {item.items.map((sub) => {
                              const subName = Array.isArray(sub) ? sub[0] : sub
                              const subDesc = Array.isArray(sub) && sub[1] ? sub[1] : ''
                              return (
                                <li key={subName} className="idli-card">
                                  <div className="idli-card__title">{subName}</div>
                                  {subDesc ? <div className="idli-card__desc">{subDesc}</div> : null}
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      )
                    }

                    // Default group rendering
                    return (
                      <li key={item.group} className="item-group">
                        <div className="item-name">{item.group}</div>
                        <ul className="group-list">
                          {item.items.map((sub) => {
                            const subName = Array.isArray(sub) ? sub[0] : sub
                            const subDesc = Array.isArray(sub) && sub[1] ? sub[1] : ''
                            return (
                              <li key={subName} className="sub-item">
                                <span className="item-name">{subName}</span>
                                {subDesc ? <span className="item-desc">{subDesc}</span> : null}
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  }
  
                  const name = Array.isArray(item) ? item[0] : item
                  const desc = Array.isArray(item) && item[1] ? item[1] : ''
                  return (
                    <li key={name}>
                      <span className="item-name">{name}</span>
                      {desc ? <span className="item-desc">{desc}</span> : null}
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        ))}
      </main>

      <footer className="menu-footer">
        <p>Devour Cafe • Fresh brews, natural ambience</p>
      </footer>
    </div>
  )
}


