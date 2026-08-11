import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

// Import GSAP and Lenis
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

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
      ['Espresso Shot', 'Seedha dil pe lagti hai yeh teekhi wali chhoot!'],
      ['Cappuccino', 'Foam itna ki shaadi ke sapne aa jaayein']
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
      ['Veg & Noodle Wrap', 'Noodles twist, Zaika lift!'],
    ],
  },
  {
    title: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1600&auto=format&fit=crop',
    items: [
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
      ['VEG NOODLES VIBE', 'Simple nahi, seductive hai – slurp karo, flirt karo!'],
      ['HAKKA HO JA! (Hakka Noodles)', 'Full toss of taste – street wala swag, five-star wala feel!'],
      ['SINGAPORE SWING (Singapore Noodles)', 'Ek bite aur tu globe-trotter – spice ka passport ready hai!'],
      ['CHILLI GARLIC NOODLES', 'Thoda tezz, thoda tease – dil mein garam, mood mein charm!'],
      ['SCHEZWAN SIZZLE RICE', 'Laal mirch ka jadoo – har grain mein China Town ka thrill!'],
      ['CHILLY GARLIC GROOVE', 'Garlic ka glow-up – thoda hot, thoda hypnotic!'],
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
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1600&auto=format&fit=crop',
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
      ['SIZZLER BROWNIE' , 'Garami bhi, mithaas bhi – hot plate, hotter date!'],
      ['NUTELLA NIRVANA' , 'Hazelnut ka husn – spread the love, lick the happiness!'],
      ['HAZELNUT BROWNIE HIGH' , 'Crunchy, gooey aur thoda luxury – yeh brownie nahi, fantasy hai!'],
      ['SIZZLER BROWNIE WITH ICE CREAM' , 'Heat meets sweet – perfect couple goals dessert!']
    ],
  },                                                                                                                                                                                     
]

const imageMapping = {
  "ginger josh": "/menu/ginger_josh.jpg",
  "masala masti": "/menu/masala_masti.jpg",
  "ginger cinnamon swag": "/menu/ginger_cinnamon_swag.jpg",
  "tulsi tantra": "/menu/tulsi_tantra.jpg",
  "espresso shot": "/menu/espresso_shot.jpg",
  "cappuccino": "/menu/cappuccino.jpg",
  "cortado": "/menu/cortado.jpg",
  "cold coffee": "/menu/cold_coffee.jpg",
  "cold coffee with ice-cream": "/menu/cold_coffee_with_ice_cream.jpg",
  "cold coffee with choco chips": "/menu/cold_coffee_with_choco_chips.jpg",
  "adraki tamatar shorba": "/menu/adraki_tamatar_shorba.jpg",
  "veg clear soup": "/menu/veg_clear_soup.jpg",
  "hot & sour soup": "/menu/hot_sour_soup.jpg",
  "veg manchow soup": "/menu/veg_manchow_soup.jpg",
  "classic masala maggi": "/menu/classic_masala_maggi.jpg",
  "veggie loaded maggi": "/menu/veggie_loaded_maggi.jpg",
  "cheese burst maggi": "/menu/cheese_burst_maggi.jpg",
  "tandoori tadka maggi": "/menu/tandoori_tadka_maggi.jpg",
  "butter garlic maggi": "/menu/butter_garlic_maggi.jpg",
  "aloo paratha": "/menu/aloo_paratha.jpg",
  "pyaz paratha": "/menu/pyaz_paratha.jpg",
  "gobhi paratha": "/menu/gobhi_paratha.jpg",
  "besan pyaz paratha": "/menu/besan_pyaz_paratha.jpg",
  "bhujia paratha": "/menu/bhujia_paratha.jpg",
  "mix veg paratha": "/menu/mix_veg_paratha.jpg",
  "paneer bhujji paratha": "/menu/paneer_bhujji_paratha.jpg",

  "vada pav": "/menu/vada_pav.jpg",
  "maska bun": "/menu/maska_bun.jpg",
  "kachchi dabeli": "/menu/kachchi_dabeli.jpg",
  "cheese maska bun": "/menu/cheese_maska_bun.jpg",
  "dahi vada": "/menu/dahi_vada.jpg",
  "dal pakoda": "/menu/dal_pakoda.jpg",
  "paneer pakoda": "/menu/paneer_pakoda.jpg",
  "mel jhol pakoda": "/menu/mel_jhol_pakoda.jpg",
  "samosa chat with chole": "/menu/samosa_chat_with_chole.jpg",
  "veg crispy burger": "/menu/veg_crispy_burger.jpg",
  "veg onion burger": "/menu/veg_onion_burger.jpg",
  "veg cheese slice burger": "/menu/veg_cheese_slice_burger.jpg",
  "veg onion & tomato burger": "/menu/veg_onion_tomato_burger.jpg",
  "veg tandoori burger": "/menu/veg_tandoori_burger.jpg",
  "veg double tikki burger": "/menu/veg_double_tikki_burger.jpg",
  "veg paneer burger": "/menu/veg_paneer_burger.jpg",
  "classic paneer wrap": "/menu/classic_paneer_wrap.jpg",
  "veggie delight wrap": "/menu/veggie_delight_wrap.jpg",
  "aloo tikki wrap": "/menu/aloo_tikki_wrap.jpg",
  "tandoori paneer wrap": "/menu/tandoori_paneer_wrap.jpg",
  "veg & noodle wrap": "/menu/veg_noodle_wrap.jpg",
  "veg-ilicious (vegetable sandwich)": "/menu/veg_ilicious_vegetable_sandwich.jpg",
  "coleslaw swag (coleslaw sandwich)": "/menu/coleslaw_swag_coleslaw_sandwich.jpg",
  "club wala love (club sandwich)": "/menu/club_wala_love_club_sandwich.jpg",
  "bombay magic (bombay sandwich)": "/menu/bombay_magic_bombay_sandwich.jpg",
  "corn-spinach affair (corn & spinach sandwich)": "/menu/corn_spinach_affair_corn_spinach_sandwich.jpg",
  "tandoori romance (tandoori paneer sandwich)": "/menu/tandoori_romance_tandoori_paneer_sandwich.jpg",
  "roll with it (spring roll)": "/menu/roll_with_it_spring_roll.jpg",
  "crispy corn crush": "/menu/crispy_corn_crush.jpg",
  "manchurian mood": "/menu/manchurian_mood.jpg",
  "paneer chilli charmer": "/menu/paneer_chilli_charmer.jpg",
  "chilli mushroom masala": "/menu/chilli_mushroom_masala.jpg",
  "kung pao pyaar (kung pao paneer)": "/menu/kung_pao_pyaar_kung_pao_paneer.jpg",
  "seoul-mate paneer (korean paneer)": "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&auto=format&fit=crop",
  "alfredo affair": "/menu/alfredo_affair.jpg",
  "aglio e olio attitude": "/menu/aglio_e_olio_attitude.jpg",
  "arrabbiata anger management": "/menu/arrabbiata_anger_management.jpg",
  "rosy veg romance": "/menu/rosy_veg_romance.jpg",
  "pesto passion (pasta)": "https://images.unsplash.com/photo-1598866539377-f5198f5c63f4?q=80&w=400&auto=format&fit=crop",
  "pesto passion (pizzas)": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=400&auto=format&fit=crop",
  "spicy shiitake drama": "/menu/spicy_shiitake_drama.jpg",
  "fresh lime swag (fresh lime soda)": "/menu/fresh_lime_swag_fresh_lime_soda.jpg",
  "iced tea tantra (lemon / peach / strawberry / passion fruit)": "/menu/iced_tea_tantra_lemon_peach_strawberry_passion_fruit.jpg",
  "blue lagoon babe": "/menu/blue_lagoon_babe.jpg",
  "virgin mojito vibe (orange / strawberry)": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=400&auto=format&fit=crop",
  "mint mojito magic": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop",
  "virgin piña colada paradise": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop",
  "frozen margarita masti (strawberry / kiwi)": "/menu/frozen_margarita_masti_strawberry_kiwi.jpg",
  "fruit punch pyaar": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=400&auto=format&fit=crop",
  "spicy guava gossip": "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=400&auto=format&fit=crop",
  "bbq baby corn drama": "/menu/bbq_baby_corn_drama.jpg",
  "veg noodles vibe": "/menu/veg_noodles_vibe.jpg",
  "hakka ho ja! (hakka noodles)": "/menu/hakka_ho_ja_hakka_noodles.jpg",
  "singapore swing (singapore noodles)": "/menu/singapore_swing_singapore_noodles.jpg",
  "chilli garlic noodles": "/menu/chilli_garlic_noodles.jpg",
  "vegetable rice raga": "/menu/vegetable_rice_raga.jpg",
  "schezwan sizzle rice": "/menu/schezwan_sizzle_rice.jpg",
  "chilly garlic groove": "/menu/chilly_garlic_groove.jpg",
  "kerala veg biryani": "/menu/kerala_veg_biryani.jpg",
  "margherita magic": "/menu/margherita_magic.jpg",
  "sweet emotion": "/menu/sweet_emotion.jpg",
  "mexican masala": "/menu/mexican_masala.jpg",
  "fiery hot fantasy": "/menu/fiery_hot_fantasy.jpg",
  "cilantro green onion": "/menu/cilantro_green_onion.jpg",
  "quattro formaggi": "/menu/quattro_formaggi.jpg",
  "bbq paneer party": "/menu/bbq_paneer_party.jpg",
  "cheese burst bliss": "/menu/cheese_burst_bliss.jpg",
  "more than words": "/menu/more_than_words.jpg",
  "vanilla vibe": "/menu/vanilla_vibe.jpg",
  "strawberry sizzle": "/menu/strawberry_sizzle.jpg",
  "black current buzz": "/menu/black_current_buzz.jpg",
  "dark chocolate desire (shakes)": "/menu/dark_chocolate_desire.jpg",
  "dark chocolate desire (waffles)": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop",
  "kitkat kiss": "/menu/kitkat_kiss.jpg",
  "oreo obsession (shakes)": "/menu/oreo_obsession.jpg",
  "oreo obsession (waffles)": "https://images.unsplash.com/photo-1613483515012-8879be29b578?q=80&w=400&auto=format&fit=crop",
  "chocolate chip charmer": "/menu/chocolate_chip_charmer.jpg",
  "choco hazelnut hangover": "/menu/choco_hazelnut_hangover.jpg",
  "butterscotch baby": "/menu/butterscotch_baby.jpg",
  "chocolate-brownie bliss": "/menu/chocolate_brownie_bliss.jpg",
  "nutella nazaakat": "/menu/nutella_nazaakat.jpg",
  "oreo nutella affair": "/menu/oreo_nutella_affair.jpg",
  "ferrero rocher fantasy": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400&auto=format&fit=crop",
  "chana jor garam": "/menu/chana_jor_garam.jpg",
  "peanut masala": "/menu/peanut_masala.jpg",
  "kala chana chakhna": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
  "sprouts with mint sauce": "/menu/sprouts_with_mint_sauce.jpg",
  "chinese bhel": "/menu/chinese_bhel.jpg",
  "sautéed vegetables": "/menu/saut_ed_vegetables.jpg",
  "cheesy veggie nachos": "/menu/cheesy_veggie_nachos.jpg",
  "red velvet raaz": "/menu/red_velvet_raaz.jpg",
  "brownie bliss": "/menu/brownie_bliss.jpg",
  "chocochip charmer": "/menu/chocochip_charmer.jpg",
  "hot chocolate hug": "/menu/hot_chocolate_hug.jpg",
  "milk chocolate magic": "/menu/milk_chocolate_magic.jpg",
  "kitkat crunch": "/menu/kitkat_crunch.jpg",
  "triple chocolate temptation": "/menu/triple_chocolate_temptation.jpg",
  "biscoff bliss": "/menu/biscoff_bliss.jpg",
  "sizzler brownie": "/menu/sizzler_brownie.jpg",
  "nutella nirvana": "/menu/nutella_nirvana.jpg",
  "hazelnut brownie high": "/menu/hazelnut_brownie_high.jpg",
  "sizzler brownie with ice cream": "/menu/sizzler_brownie_with_ice_cream.jpg"
};

const getItemImage = (name, category) => {
  const n = name.toLowerCase().trim();
  const cat = category.toLowerCase().trim();
  const keyWithCat = `${n} (${cat})`;

  if (imageMapping[keyWithCat]) {
    return imageMapping[keyWithCat];
  }
  if (imageMapping[n]) {
    return imageMapping[n];
  }
  const c = category.toLowerCase();
  
  if (n.includes('cold coffee')) {
    return 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('coffee') || n.includes('espresso') || n.includes('americano') || n.includes('latte') || n.includes('cappuccino') || n.includes('cortado') || c.includes('coffee')) {
    return 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('tea') || n.includes('chai') || n.includes('ginger') || n.includes('masala') || n.includes('tulsi')) {
    return 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('soup') || n.includes('shorba') || c.includes('soup')) {
    return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('maggi')) {
    return 'https://images.unsplash.com/photo-1692273212247-f5efb3fc9b87?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('paratha')) {
    return 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('idli')) {
    return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('pav bhaji')) {
    return 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('vada pav')) {
    return 'https://images.unsplash.com/photo-1606491959725-d72b22bb6689?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('samosa')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('pakoda') || n.includes('dahi vada') || n.includes('pakoda') || n.includes('shole') || n.includes('kebab')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('burger')) {
    return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('wrap') || n.includes('roll') || n.includes('spring roll')) {
    return 'https://images.unsplash.com/photo-1626700051175-6518c4793f06?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('sandwich')) {
    return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('pasta') || n.includes('alfredo') || n.includes('pesto') || n.includes('aglio') || n.includes('arrabbiata')) {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('pizza') || n.includes('margherita') || c.includes('pizzas')) {
    return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('shake') || n.includes('smoothie')) {
    return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('waffle') || n.includes('brownie')) {
    return 'https://images.unsplash.com/photo-1613483515012-8879be29b578?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('mocktail') || n.includes('mojito') || n.includes('lime') || n.includes('iced tea') || n.includes('blue lagoon') || n.includes('colada') || n.includes('margarita') || c.includes('mocktails')) {
    return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('nachos') || n.includes('chana') || n.includes('peanut') || n.includes('sprouts') || n.includes('chakna') || c.includes('chakna')) {
    return 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=400&auto=format&fit=crop';
  }
  if (c.includes('noodle') || c.includes('rice') || n.includes('rice') || n.includes('noodles') || n.includes('biryani')) {
    return 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=400&auto=format&fit=crop';
  }
  if (n.includes('manchurian') || n.includes('paneer chilli') || n.includes('mushroom') || n.includes('kung pao') || n.includes('korean paneer') || c.includes('china town')) {
    return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&auto=format&fit=crop';
  }

  return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop';
};

const getItemPrice = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const minPrice = 12;
  const maxPrice = 22;
  const price = minPrice + Math.abs(hash % (maxPrice - minPrice + 1));
  return `$${price}`;
};

const getShapeClass = (globalIndex) => {
  const shapes = ['arch-bl', 'circle', 'circle', 'arch-bl', 'circle', 'arch-tr', 'circle', 'circle', 'circle'];
  return shapes[globalIndex % shapes.length];
};

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lenis & ScrollTrigger setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Mount animations
    const menuHeroTl = gsap.timeline();
    menuHeroTl.fromTo(".menu-hero h1", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
    menuHeroTl.fromTo(".menu-hero p", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      "-=0.5"
    );
    menuHeroTl.fromTo(".menu-hero .btn--light", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.5"
    );
    menuHeroTl.fromTo(".menu-search-container", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.4"
    );
    menuHeroTl.fromTo(".menu-nav-pill", 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "power3.out" },
      "-=0.3"
    );

    // 2. ScrollTrigger reveal for category titles
    const titles = gsap.utils.toArray(".menu-section__title");
    titles.forEach((title) => {
      gsap.fromTo(title, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    // 3. ScrollTrigger reveal for menu items inside each section grid
    const grids = gsap.utils.toArray(".menu-grid");
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll(".menu-item");
      gsap.fromTo(cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Update/Refresh ScrollTrigger and animate filtered items on search
  useEffect(() => {
    ScrollTrigger.refresh();

    if (searchTerm) {
      gsap.fromTo(".menu-item",
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.04, 
          ease: "power2.out",
          overwrite: "auto"
        }
      );
    }
  }, [searchTerm]);

  const scrollToCategory = (title) => {
    const id = title.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter sections and items based on search term
  const filteredSections = sections.map(sec => {
    const hasGroups = sec.items.some(item => item && item.group);
    
    if (!hasGroups) {
      const matchedItems = sec.items.filter(item => {
        const name = Array.isArray(item) ? item[0] : item;
        const desc = Array.isArray(item) && item[1] ? item[1] : '';
        return name.toLowerCase().includes(searchTerm.toLowerCase()) || 
               desc.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return { ...sec, items: matchedItems, hasGroups: false };
    } else {
      const matchedGroups = sec.items.map(item => {
        if (item && item.group && Array.isArray(item.items)) {
          const matchedSub = item.items.filter(sub => {
            const subName = Array.isArray(sub) ? sub[0] : sub;
            const subDesc = Array.isArray(sub) && sub[1] ? sub[1] : '';
            return subName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   subDesc.toLowerCase().includes(searchTerm.toLowerCase());
          });
          return { ...item, items: matchedSub };
        }
        const name = Array.isArray(item) ? item[0] : item;
        const desc = Array.isArray(item) && item[1] ? item[1] : '';
        const matches = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matches ? item : null;
      }).filter(Boolean);
      
      const finalGroups = matchedGroups.filter(item => {
        if (item.group) {
          return item.items.length > 0;
        }
        return true;
      });
      
      return { ...sec, items: finalGroups, hasGroups: true };
    }
  }).filter(sec => sec.items.length > 0);

  let globalItemIndex = 0;

  return (
    <div className="menu-page">
      <header className="menu-hero">
        <div className="menu-hero__inner">
          <h1>Our Menu</h1>
          <p>Our menu features fresh, organic, local ingredients.</p>
          <Link to="/" className="btn btn--light">← Back to Home</Link>
        </div>
      </header>

      {/* Instant Search Bar */}
      <div className="menu-search-container">
        <div className="menu-search-box">
          <input 
            type="text" 
            className="menu-search-input" 
            placeholder="Search coffee, waffles, pizzas, burgers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="menu-search-clear" onClick={() => setSearchTerm('')} aria-label="Clear search">×</button>
          )}
        </div>
      </div>

      {/* Sticky Category Quick Nav (Only show when not searching or matches exist) */}
      {filteredSections.length > 0 && (
        <div className="menu-nav-sticky">
          <div className="menu-nav-track">
            {sections.map((sec) => {
              const isRendered = filteredSections.some(fs => fs.title === sec.title);
              return (
                <button 
                  key={sec.title} 
                  className={`menu-nav-pill ${!isRendered ? 'menu-nav-pill--muted' : ''}`}
                  onClick={() => scrollToCategory(sec.title)}
                  disabled={!isRendered}
                >
                  {sec.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <main className="menu-wrapper">
        {filteredSections.length > 0 ? (
          filteredSections.map((sec) => {
            const hasGroups = sec.hasGroups;

            return (
              <section 
                key={sec.title} 
                id={sec.title.toLowerCase().replace(/\s+/g, '-')} 
                className="menu-section"
              >
                <h2 className="menu-section__title">{sec.title}</h2>
                
                {!hasGroups ? (
                  <ul className="menu-grid">
                    {sec.items.map((item) => {
                      const name = Array.isArray(item) ? item[0] : item;
                      const desc = Array.isArray(item) && item[1] ? item[1] : '';
                      const imgUrl = getItemImage(name, sec.title);
                      const currentIdx = globalItemIndex++;
                      const shapeClass = getShapeClass(currentIdx);
                      const price = getItemPrice(name);
                      return (
                        <li key={name} className="menu-item">
                          <div className={`menu-item__img-wrapper menu-item__img-wrapper--${shapeClass}`}>
                            <img src={imgUrl} alt={name} loading="lazy" />
                          </div>
                          <div className="menu-item__info">
                            <span className="menu-item__name">
                              {name} <span className="menu-item__price">{price}</span>
                            </span>
                            {desc ? <span className="menu-item__desc">{desc}</span> : null}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="menu-groups-container">
                    {sec.items.map((item, idx) => {
                      if (item && item.group && Array.isArray(item.items)) {
                        return (
                          <div key={item.group || idx} className="menu-group-block">
                            <h3 className="menu-group__title">{item.group}</h3>
                            <ul className="menu-grid">
                              {item.items.map((sub) => {
                                const subName = Array.isArray(sub) ? sub[0] : sub;
                                const subDesc = Array.isArray(sub) && sub[1] ? sub[1] : '';
                                const imgUrl = getItemImage(subName, sec.title);
                                const currentIdx = globalItemIndex++;
                                const shapeClass = getShapeClass(currentIdx);
                                const price = getItemPrice(subName);
                                return (
                                  <li key={subName} className="menu-item">
                                    <div className={`menu-item__img-wrapper menu-item__img-wrapper--${shapeClass}`}>
                                      <img src={imgUrl} alt={subName} loading="lazy" />
                                    </div>
                                    <div className="menu-item__info">
                                      <span className="menu-item__name">
                                        {subName} <span className="menu-item__price">{price}</span>
                                      </span>
                                      {subDesc ? <span className="menu-item__desc">{subDesc}</span> : null}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }

                      // Flat item inside a grouped section
                      const name = Array.isArray(item) ? item[0] : item;
                      const desc = Array.isArray(item) && item[1] ? item[1] : '';
                      const imgUrl = getItemImage(name, sec.title);
                      const currentIdx = globalItemIndex++;
                      const shapeClass = getShapeClass(currentIdx);
                      const price = getItemPrice(name);
                      return (
                        <div key={name} className="menu-group-block menu-group-block--flat">
                          <ul className="menu-grid">
                            <li className="menu-item">
                              <div className={`menu-item__img-wrapper menu-item__img-wrapper--${shapeClass}`}>
                                <img src={imgUrl} alt={name} loading="lazy" />
                              </div>
                              <div className="menu-item__info">
                                <span className="menu-item__name">
                                  {name} <span className="menu-item__price">{price}</span>
                                </span>
                                {desc ? <span className="menu-item__desc">{desc}</span> : null}
                              </div>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })
        ) : (
          <div className="menu-empty-state">
            <span className="menu-empty-state__icon">🔍</span>
            <h3>No items found</h3>
            <p>We couldn't find anything matching "{searchTerm}". Try another search term!</p>
            <button className="btn btn--light" onClick={() => setSearchTerm('')}>Clear Search</button>
          </div>
        )}
      </main>

      <footer className="menu-footer">
        <p>Devour Cafe • Fresh brews, natural ambience</p>
      </footer>
    </div>
  );
}


