# Paradise Nursery - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ and npm/yarn
- Git
- A code editor (VS Code recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/ItsShahzadAhmedAwan/React-IBM-Project.git
cd React-IBM-Project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```
The app will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 📁 Project Structure Explanation

### `/public`
- `index.html` - Main HTML file
- `manifest.json` - PWA manifest

### `/src/components`
Reusable UI components:
- **Navbar** - Navigation with cart badge
- **ProductCard** - Individual plant card
- **ProductList** - Grid of products with filtering
- **CartItem** - Single cart item row
- **CartSummary** - Order summary and checkout

### `/src/pages`
Full page components:
- **Landing** - Home page with hero section
- **Products** - Product listing page
- **Cart** - Shopping cart page

### `/src/redux`
State management with Redux Toolkit:
- **store.js** - Redux store configuration
- **cartSlice.js** - Cart reducer and actions
- **cartSelectors.js** - Selectors for cart state

### `/src/data`
Data files:
- **plantsData.js** - Array of plant products with helper functions

### `/src/utils`
Utility functions:
- **helpers.js** - Formatting and helper functions

---

## 🎯 Key Features Implementation

### 1. Redux State Management
**Location**: `src/redux/features/cart/cartSlice.js`

```javascript
// Actions available:
- addItem(product) - Add item or increase quantity
- removeItem(id) - Remove item completely
- increaseQty(id) - Increment quantity
- decreaseQty(id) - Decrement quantity
- clearCart() - Empty cart
- loadCart(data) - Load from localStorage
```

**Usage in Components**:
```javascript
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/features/cart/cartSlice';
import { selectTotalQuantity } from '../redux/features/cart/cartSelectors';

// In component:
const dispatch = useDispatch();
const totalQty = useSelector(selectTotalQuantity);

dispatch(addItem(product));
```

### 2. localStorage Persistence
**Location**: `src/App.jsx`

Cart is automatically saved to localStorage whenever it changes:
- Reads cart on app mount
- Writes cart on every update
- Key: `'cart'`

### 3. Routing
**Location**: `src/App.jsx`

```javascript
- / → Landing page
- /products → Products listing
- /cart → Shopping cart
```

### 4. Component Communication
- **Parent → Child**: Props
- **Global State**: Redux for cart data
- **Side Effects**: useEffect for localStorage

---

## 🎨 Styling Approach

### CSS Organization
- Global styles in `src/index.css`
- Component-scoped styles (Navbar.css, ProductCard.css, etc.)
- Responsive breakpoints at 768px and 480px

### CSS Grid & Flexbox
- Products grid: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- Cart layout: 2-column on desktop, 1-column on mobile
- Navbar: Flex with hamburger menu for mobile

### Responsive Design
```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Small Mobile */
@media (max-width: 480px) { ... }
```

---

## 📊 State Shape

### Cart State
```javascript
{
  cart: {
    items: [
      {
        id: 1,
        name: "Lavender Plant",
        price: 1299,
        imageUrl: "...",
        quantity: 2,
        subtotal: 2598
      }
    ],
    totalQuantity: 2,
    totalPrice: 2598
  }
}
```

---

## 🔧 Customization Guide

### Adding New Plants
Edit `src/data/plantsData.js`:

```javascript
export const plantsData = [
  {
    id: 9,
    name: 'New Plant',
    description: 'Description here',
    price: 999,
    imageUrl: 'https://...',
    category: 'Aromatic Plants', // or 'Medicinal Plants'
    stock: 10,
  },
  // ... more plants
];
```

### Changing Currency
Edit `src/utils/helpers.js`:

```javascript
// Change 'en-PK' to your locale
// Change 'PKR' to your currency code
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
  }).format(price);
};
```

### Modifying Colors
Edit `src/index.css` or component CSS files:

```css
/* Primary color */
.btn-primary {
  background-color: #27ae60; /* Change this */
}
```

Common colors used:
- Primary Green: `#27ae60`
- Dark Green: `#229954`
- Text Dark: `#2c3e50`
- Text Light: `#7f8c8d`
- Background: `#f5f5f5`

### Adding New Routes
Edit `src/App.jsx`:

```javascript
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/products" element={<Products />} />
  <Route path="/cart" element={<Cart />} />
  {/* Add new route here */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

---

## 🧪 Testing the Application

### Manual Testing Checklist

**Landing Page**
- [ ] Hero section displays correctly
- [ ] Feature boxes are responsive
- [ ] "Start Shopping" button links to products
- [ ] All images load

**Products Page**
- [ ] All 8 plants display
- [ ] Products grouped by category
- [ ] Category filter works
- [ ] Add to cart button works

**Cart Page**
- [ ] Items display correctly
- [ ] +/- buttons update quantity
- [ ] Delete button removes items
- [ ] Totals update correctly
- [ ] Continue Shopping button works
- [ ] Checkout button works

**Navbar**
- [ ] Links work correctly
- [ ] Cart badge shows correct count
- [ ] Responsive menu opens on mobile
- [ ] Menu closes when item clicked

**Persistence**
- [ ] Add items to cart
- [ ] Refresh page
- [ ] Cart items are still there

---

## 🚨 Common Issues & Solutions

### Issue: "npm start" fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Issue: Cart not persisting
**Solution**: Check browser's localStorage is enabled
```javascript
// In browser console:
localStorage.getItem('cart')
```

### Issue: Images not loading
**Solution**: Check internet connection (images from Unsplash CDN)

### Issue: Deployment not working
**Solution**: Ensure `homepage` in package.json is correct:
```json
"homepage": "https://USERNAME.github.io/REPO_NAME/"
```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit Guide](https://redux-toolkit.js.org)
- [React Router v6](https://reactrouter.com)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [JavaScript Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

---

## 📝 Git Workflow

### Making Changes
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add feature description"

# Push to GitHub
git push origin feature/your-feature-name
```

### Useful Git Commands
```bash
# Check status
git status

# View commit history
git log --oneline

# Revert to previous commit
git reset --hard HEAD~1

# Stash changes
git stash
```

---

## 🎯 Next Steps

1. Run the project locally
2. Explore each component
3. Modify colors and styles
4. Add more plants to the data
5. Deploy to GitHub Pages
6. Share with friends!

---

## ❓ FAQ

**Q: How do I change the plant images?**
A: Edit the `imageUrl` property in `src/data/plantsData.js`

**Q: Can I add more categories?**
A: Yes, add a new `category` value to plants in `plantsData.js`

**Q: How do I deploy to GitHub Pages?**
A: Run `npm run deploy` (requires gh-pages package)

**Q: Can I integrate a real backend?**
A: Yes, modify `src/redux/features/cart/cartSlice.js` to call APIs instead

**Q: Is the checkout process real?**
A: No, it's a confirmation dialog. Add a checkout form for real functionality

---

## 🎓 Learning Outcomes

By completing this project, you've learned:
✅ React component composition
✅ React Hooks (useState, useEffect)
✅ Redux Toolkit for state management
✅ React Router for navigation
✅ localStorage API
✅ Responsive CSS design
✅ Git version control
✅ Deployment to GitHub Pages

---

## 📞 Support

Need help? 
- Check the README.md
- Review the code comments
- Check browser console for errors
- Create a GitHub issue

---

**Happy Coding! 🌿**
