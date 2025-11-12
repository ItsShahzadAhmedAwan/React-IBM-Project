# Paradise Nursery - Quick Reference Guide

## 🚀 Getting Started (30 seconds)

```bash
# Navigate to project
cd "c:\Users\hp\Desktop\React Nursery\React-IBM-Project"

# Start development server
npm start

# Done! Opens at http://localhost:3000
```

---

## 📍 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Home with hero section |
| `/products` | Products | Browse plants by category |
| `/cart` | Cart | View and manage cart items |

---

## 🧩 Components Overview

### **Navbar** (`src/components/Navbar.jsx`)
- Sticky navigation bar
- Cart badge with item count
- Hamburger menu for mobile
- Links to all pages

### **ProductCard** (`src/components/ProductCard.jsx`)
- Individual plant card
- Image, name, description, price
- Add to cart button with feedback
- Stock indicator

### **ProductList** (`src/components/ProductList.jsx`)
- Grid of product cards
- Category filtering
- Responsive layout

### **CartItem** (`src/components/CartItem.jsx`)
- Single cart item row
- Quantity controls (+/-)
- Delete with confirmation
- Line subtotal

### **CartSummary** (`src/components/CartSummary.jsx`)
- Order summary
- Total price calculation
- Continue/Checkout buttons
- Sticky on desktop

---

## 🎛️ Redux Store Structure

```javascript
store.cart = {
  items: [
    {
      id: 1,
      name: "Plant Name",
      price: 1299,
      imageUrl: "...",
      quantity: 2,
      subtotal: 2598
    }
  ],
  totalQuantity: 2,
  totalPrice: 2598
}
```

---

## 📝 Redux Actions

### In Cart Slice (`src/redux/features/cart/cartSlice.js`)

```javascript
// Add item (or increase quantity if exists)
dispatch(addItem({ id, name, price, imageUrl }))

// Remove item completely
dispatch(removeItem(id))

// Increase quantity
dispatch(increaseQty(id))

// Decrease quantity (if > 1)
dispatch(decreaseQty(id))

// Clear entire cart
dispatch(clearCart())

// Load from localStorage
dispatch(loadCart(cartData))
```

---

## 🔍 Redux Selectors

```javascript
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalPrice
} from '../redux/features/cart/cartSelectors'

const items = useSelector(selectCartItems)
const qty = useSelector(selectTotalQuantity)
const price = useSelector(selectTotalPrice)
```

---

## 📦 Plant Data Structure

```javascript
{
  id: 1,
  name: "Lavender Plant",
  description: "Beautiful purple lavender...",
  price: 1299,
  imageUrl: "https://...",
  category: "Aromatic Plants",
  stock: 15
}
```

### Categories
- Aromatic Plants
- Medicinal Plants

---

## 🎨 Key CSS Classes

### Common Classes
- `.btn` - Base button style
- `.btn-primary` - Green button
- `.btn-secondary` - Blue button
- `.btn-danger` - Red button
- `.container` - Max-width container
- `.cart-badge` - Notification badge

### Component Classes
- `.navbar-*` - Navbar elements
- `.product-card` - Product card
- `.product-grid` - Product grid
- `.cart-item` - Cart item row
- `.cart-summary` - Summary card

---

## 💾 localStorage

**Key**: `'cart'`
**Format**: JSON string of cart state

```javascript
// Read from localStorage
const savedCart = localStorage.getItem('cart')
const cartData = JSON.parse(savedCart)

// Write to localStorage
localStorage.setItem('cart', JSON.stringify(cartState))
```

---

## 🎯 Common Tasks

### Add a New Plant
Edit `src/data/plantsData.js`:
```javascript
{
  id: 9,
  name: 'New Plant',
  description: 'Description',
  price: 999,
  imageUrl: 'https://...',
  category: 'Aromatic Plants',
  stock: 20
}
```

### Change Primary Color
Edit `src/index.css`:
```css
.btn-primary {
  background-color: #YOUR_COLOR;
}
```

### Add New Route
Edit `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

### Format Price
Use helper from `src/utils/helpers.js`:
```javascript
import { formatPrice } from '../utils/helpers'
formatPrice(1299) // Returns: "Rs. 1,299.00"
```

### Use Cart from Redux
```javascript
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectTotalQuantity } from '../redux/...'
import { addItem, removeItem } from '../redux/...'

const items = useSelector(selectCartItems)
const qty = useSelector(selectTotalQuantity)
const dispatch = useDispatch()

dispatch(addItem(product))
dispatch(removeItem(id))
```

---

## 🔄 Data Flow

```
User Action (Click)
        ↓
Component Handler
        ↓
Dispatch Redux Action
        ↓
Redux Reducer Updates State
        ↓
Component Rerender (via useSelector)
        ↓
localStorage Updated
        ↓
UI Reflects Changes
```

---

## 📱 Responsive Breakpoints

| Screen | Max Width | Layout |
|--------|-----------|--------|
| Large Desktop | 1200px+ | 3+ columns |
| Desktop | 1024px | 2-3 columns |
| Tablet | 768px | 2 columns |
| Mobile | 480px | 1 column |

---

## 🧪 Testing Checklist

- [ ] All routes work
- [ ] Add to cart works
- [ ] Quantity controls work
- [ ] Delete with confirmation works
- [ ] Cart persists on refresh
- [ ] Mobile menu works
- [ ] Cart badge updates
- [ ] Totals calculate correctly
- [ ] Continue Shopping links work
- [ ] Checkout button works

---

## 🐛 Debugging Tips

### Check Redux State
```javascript
// In browser console:
const state = store.getState()
console.log(state.cart)
```

### Check localStorage
```javascript
// In browser console:
localStorage.getItem('cart')
JSON.parse(localStorage.getItem('cart'))
```

### Check Cart Dispatch
```javascript
// In component:
console.log('Before:', useSelector(selectTotalQuantity))
dispatch(addItem(product))
console.log('After:', useSelector(selectTotalQuantity))
```

---

## 📚 File Locations Quick Reference

| What | Where |
|------|-------|
| Plant Data | `src/data/plantsData.js` |
| Redux Store | `src/redux/store.js` |
| Cart Actions | `src/redux/features/cart/cartSlice.js` |
| Cart Selectors | `src/redux/features/cart/cartSelectors.js` |
| Global Styles | `src/index.css` |
| Helper Functions | `src/utils/helpers.js` |
| Navbar | `src/components/Navbar.jsx` |
| Products | `src/pages/Products.jsx` |
| Cart Page | `src/pages/Cart.jsx` |
| Landing | `src/pages/Landing.jsx` |

---

## 🚀 Deployment Commands

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Start local dev server
npm start

# Run tests
npm test
```

---

## 🎯 Project URLs

- **Local Dev**: http://localhost:3000
- **Live Deploy**: https://ItsShahzadAhmedAwan.github.io/React-IBM-Project/
- **GitHub Repo**: https://github.com/ItsShahzadAhmedAwan/React-IBM-Project

---

## 💡 Quick Tips

1. **HMR (Hot Module Reload)**: Changes auto-reload in dev
2. **Redux DevTools**: Use browser extension for debugging
3. **React DevTools**: Use for component inspection
4. **Network Tab**: Check image loading (Unsplash CDN)
5. **Console**: Check for warnings/errors
6. **Mobile Dev Tools**: F12 → Responsive Design Mode

---

## 🔗 Important Hooks Used

- `useState` - Local component state
- `useEffect` - Side effects (localStorage)
- `useSelector` - Access Redux state
- `useDispatch` - Dispatch Redux actions
- `useParams` - URL parameters (if needed)
- `useNavigate` - Navigation between routes

---

## 📞 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Kill process: `lsof -i :3000` / `kill -9 <PID>` |
| npm not found | Install Node.js from nodejs.org |
| Images not loading | Check internet/CDN availability |
| Cart not persisting | Check localStorage enabled |
| Styles not applying | Hard refresh: Ctrl+Shift+R |

---

## 🌟 Key Features Reminder

✅ Cart badge updates in real-time
✅ Responsive on all devices
✅ Smooth animations
✅ Delete confirmation
✅ Price formatting
✅ localStorage persistence
✅ Category filtering
✅ Professional styling

---

## 📋 Performance Notes

- Lazy loading on images (`loading="lazy"`)
- Efficient Redux selectors
- CSS animations (GPU accelerated)
- Optimized grid layouts
- No unnecessary re-renders

---

## 🎓 Learning Notes

This project teaches:
- React component architecture
- Redux Toolkit modern patterns
- React Router navigation
- CSS Grid & Flexbox
- localStorage API
- Responsive design
- Accessibility basics
- Git version control

---

## ✨ Next Enhancements

If you want to extend this project:
- [ ] Add search functionality
- [ ] Implement product sorting
- [ ] Create checkout form
- [ ] Add user authentication
- [ ] Backend API integration
- [ ] Payment gateway
- [ ] Order history
- [ ] Product reviews

---

**Quick Links:**
- [Full Documentation](./README.md)
- [Setup Guide](./SETUP.md)
- [Contribution Guide](./CONTRIBUTING.md)
- [Project Summary](./PROJECT_SUMMARY.md)

---

**Happy Coding! 🌿**
