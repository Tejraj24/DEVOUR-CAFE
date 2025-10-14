import { Link } from 'react-router-dom'
import './menu.css'

const sections = [
  {
    title: 'Tea Tasting Menu',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Cinnamon Tea'],
      ['Masala Chai'],
      ['Devour Special Tea'],
      ['Ginger Tea', 'Fenugreek seeds, ginger, cardamom, rich milk'],
      ['Special Tea', 'Carom seeds, ginger, cinnamon, rich milk'],
    ],
  },
  {
    title: 'Coffee Specials',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Hazelnut Coffee'],
      ['Cold Coffee'],
      ['Classic Frappe'],
      ['Choco Chip Frappe'],
    ],
  },
  {
    title: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Americano'],
      ['Espresso Shot'],
      ['Classic Cappuccino'],
      ['Cafe Latte'],
    ],
  },
  {
    title: 'Cold Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Iced Latte'],
    ],
  },
  {
    title: 'Continental Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Dubarry Soup'],
      ['Orange Carrot Soup'],
      ['Porcini Mushroom'],
      ['Roasted Tomato Basil Bell Pepper Soup'],
    ],
  },
  {
    title: 'Oriental Soup',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Veg Clear Soup'],
      ['Hot & Sour'],
      ['Tom Yum'],
      ['Manchow'],
    ],
  },
  {
    title: 'Healthy Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Greek Salad', 'Bell pepper, onion, olive, cherry tomato, feta, lettuce in classic Greek dressing'],
      ['Beetroot Carpaccio', 'Bocconcini, roasted beetroot, salt, pepper, balsamic dressing'],
      ['Caesar Salad', 'Iceberg, croutons, sun-dried tomato, black olives, parmesan, Caesar dressing'],
      ['Fruit & Nut Salad', 'Apple, banana, grapes, papaya, pomegranate, honey-yogurt dressing'],
      ['Avocado Quinoa Salad', 'Avocado, quinoa, onion, tomato, salt, olive oil, pepper dressing'],
      ['Green Burrata', 'Burrata, cherry tomato, sun-dried tomato, pepper, arugula, balsamic'],
    ],
  },
  {
    title: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Margherita', 'Tomato, mozzarella, basil'],
      ['Sweet Emotion', 'Sauteed spinach, caramelized onion, mushroom, mozzarella'],
      ['Mexican Pizza', 'Bell pepper, onion, jalapeno, paprika chili'],
      ['Fiery Hot', 'Red pepper, paprika chili, onion, capers'],
      ['Cilantro Green Onion', 'Zucchini, spring onion, coriander, mozzarella, parmesan sprinkle'],
      ['Pesto Pizza', 'Basil pesto, English vegetables, black olives, parmesan'],
      ['Quattro Formaggi', 'Ricotta, mozzarella, parmesan, feta, fried garlic, extra virgin olive oil'],
      ['BBQ Paneer', 'Paneer in barbecue sauce, onion, homemade sauce'],
      ['Cheese Burst Pizza', 'Blend of cheeses with arugula leaves'],
      ['More Than Words', 'Black olives, broccoli, sun-dried tomato, zucchini, onion, feta, mozzarella'],
    ],
  },
  {
    title: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Alfredo'],
      ['Aglio e Olio', 'Chili and garlic in olive oil, spaghetti or penne'],
      ['Arrabbiata', 'Vegetables in a spicy tomato sauce'],
      ['Rosy Veg', 'Corn, spinach, mushroom in a creamy tomato sauce'],
      ['Barbacceca', 'Sliced mushrooms, corn, vegetables sautéed in garlic butter with choice of pasta'],
      ['Spicy Shiitake Mushroom', 'Shiitake mushrooms and chili in tomato, garlic, olive oil'],
      ['Pesto', 'Basil pesto, garlic, parmesan in a creamy sauce'],
    ],
  },
  {
    title: 'Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-c4076d0cbe8f?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Mushroom Risotto', 'Mushrooms with onion and garlic in a creamy sauce'],
      ['Asparagus & Sun-dried Tomato Risotto', 'Asparagus in butter with onion, sun-dried tomatoes, vegetable stock, parmesan'],
      ['Spicy Shiitake Mushroom Risotto', 'Shiitake mushrooms with onion and garlic in a creamy sauce'],
      ['Zucchini & Basil Risotto', 'Bell peppers and zucchini stir-fried with basil'],
    ],
  },
  {
    title: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Fresh Lime Soda'],
      ['Iced Tea', 'Lemon / Peach / Strawberry / Passion Fruit'],
      ['Blue Lagoon'],
      ['Virgin Mojito', 'Orange / Strawberry'],
      ['Mint Mojito'],
      ['Virgin Pina Colada'],
      ['Frozen Margarita', 'Strawberry / Kiwi'],
      ['Fruit Punch'],
    ],
  },
  {
    title: 'Oriental Starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Spring Roll'],
      ['Veg Salt ‘n’ Pepper'],
      ['Crispy Corn'],
      ['Veg Manchurian', 'Dry / Gravy'],
      ['Paneer Chili', 'Dry / Gravy • Cottage cheese with onion, bell pepper, soya, chili garlic, pepper sauce'],
      ['Chili Mushroom', 'Fried button mushrooms with dark soya and chili sauce'],
      ['Kung Pao Paneer', 'Fried cottage cheese with oyster, hoisin, dark soya, cashew, chili, bell pepper'],
      ['Korean Paneer', 'Fried cottage cheese with gochujang, gochugaru, chili paste, sesame seeds'],
    ],
  },
  {
    title: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Vegetable Sandwich', 'Grilled / Normal'],
      ['Corn & Spinach Sandwich'],
      ['Coleslaw Sandwich'],
      ['Pesto Sandwich'],
      ['Club Sandwich'],
    ],
  },
  {
    title: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Aloo Tikki Burger'],
      ['Farmhouse'],
      ['Mexican'],
      ['Barbecue Cottage Cheese Burger'],
    ],
  },
  {
    title: 'Thai Curries',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Green Thai Curry', 'Served with rice'],
      ['Red Thai Curry', 'Served with rice'],
    ],
  },
  {
    title: 'Noodles & Rice',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Veg Noodles'],
      ['Singapore Noodles'],
      ['Chili Garlic Noodles'],
      ['Vegetable Rice'],
      ['Sichuan Rice'],
      ['Chili Garlic Rice'],
    ],
  },
  {
    title: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['French Fries'],
      ['Peri Peri French Fries'],
      ['Cheese Peri Peri French Fries'],
      ['Garlic Bread'],
      ['Garlic Bread with Cheese'],
      ['Veggie Croquettes', 'Assorted vegetables with crushed corn, peanuts, chilies, mashed potato; crumb-fried; garlic mayo'],
    ],
  },
  {
    title: 'Small Plates',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Tacos', 'Kidney beans, bell peppers, corn, cheese in Mexican sauce; sour cream salsa'],
      ['Crispy Parmesan Potato Cake', 'Parmesan, avocado, cilantro coulis'],
      ['Spinach Feta Cigars', 'Spring rolls with spinach and feta; salsa dip'],
      ['BBQ Baby Corn', 'Butter-fried baby corn in homemade BBQ sauce'],
      ['Mushroom Arancini Balls', 'Crispy arancini stuffed with mushroom, pesto, cheese'],
      ['Cranberry Cream Cheese Bruschetta'],
      ['Harissa Cottage Cheese', 'Cottage cheese marinated with harissa, dukkah, pistachio, olive oil'],
      ['Quesadilla', 'Bell peppers, corn, kidney beans, Mexican sauce; sour cream salsa'],
      ['Crostini with Caramelised Onion and Goat Cheese'],
      ['Avocado Tacos', 'Soft tacos with peri-peri, chili sauce, mango, corn, avocado, salsa'],
      ['Ginger Pineapple Striker', 'Crumb-fried pineapple fritters stuffed with cheese, green chili, ginger'],
    ],
  },
  {
    title: 'Main Course',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop',
    items: [
      ['Veg Cannelloni', 'Ricotta and spinach stuffed cannelloni, baked and served'],
      ['Veg Au Gratin Rotatalini', 'Carrot, mushroom, peas, spinach, bell pepper tossed in olive oil and garlic; baked'],
      ['Cottage Cheese Paprika (Chunky Stir Sauce)', 'Grilled cottage cheese, bell pepper, zucchini, basil in tangy sauce; served with rice'],
      ['Veg Lasagne', 'Layered pasta with seasonal vegetables baked with mozzarella'],
      ['Cottage Cheese Paprika'],
      ['Cottage Cheese Steak', 'Grilled paneer with spinach, mushroom, herbs, spicy carrot puree'],
      ['Mushroom Polenta', 'Polenta with sautéed mushrooms, grilled onion, parmesan'],
      ['Enchilada', 'Soft tortillas stuffed with corn, kidney beans, bell pepper; topped with Mexican sauce and baked'],
      ['Baked Corn & Spinach Spaghetti', 'Corn and spinach in creamy sauce with spaghetti and garlic bread'],
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


