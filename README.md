# Paradise Nursery - Shopping Cart Application

🌿 A fully functional e-commerce shopping cart application for an online plant shop built with React, Redux Toolkit, and React Router.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Implemented Features](#implemented-features)
- [Known Issues](#known-issues)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

Paradise Nursery is a modern, responsive e-commerce application that showcases a collection of aromatic and medicinal plants. Users can browse products by category, add them to their cart, manage quantities, and proceed with checkout. The application features dynamic state management using Redux Toolkit and persists cart data using localStorage.

## ✨ Features

### Core Functionality
- ✅ **Landing Page** - Beautiful homepage with plant collection overview
- ✅ **Product Listing** - Browse plants organized by categories
- ✅ **Shopping Cart** - Add/remove items, adjust quantities
- ✅ **Navigation Bar** - Sticky navbar with cart badge showing total items
- ✅ **Category Filtering** - Filter products by Aromatic or Medicinal plants
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### State Management
- ✅ **Redux Toolkit Integration** - Modern Redux setup with slices
- ✅ **Cart Persistence** - localStorage integration for cart persistence
- ✅ **Real-time Updates** - Instant updates to cart count and totals

### User Experience
- ✅ **Add to Cart Feedback** - Button state changes to show "Added" status
- ✅ **Quantity Controls** - Easy +/- buttons to adjust item quantities
- ✅ **Delete Confirmation** - Confirmation dialog before removing items
- ✅ **Price Formatting** - Currency formatting using Intl.NumberFormat (PKR)
- ✅ **Stock Indicators** - Low stock warnings on product cards

### Accessibility & Code Quality
- ✅ **Semantic HTML** - Proper use of HTML5 semantic tags
- ✅ **ARIA Labels** - Accessibility labels for all interactive elements
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Component Reusability** - Well-organized, modular components
- ✅ **Error Handling** - Graceful error handling for localStorage

## 🚀 Live Demo

[Deploy your app here and add the URL]
- Live URL: https://ItsShahzadAhmedAwan.github.io/React-IBM-Project/

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ItsShahzadAhmedAwan/React-IBM-Project.git
   cd React-IBM-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 💻 Usage

### Navigation
- **Landing Page** (`/`) - Start here for an overview
- **Products** (`/products`) - Browse and add plants to cart
- **Cart** (`/cart`) - Review and manage cart items

### Adding Items
1. Go to Products page
2. Click "Add to Cart" on any plant card
3. Watch the cart badge update in the navbar

### Managing Cart
1. Click the 🛒 Cart icon in the navbar
2. Use +/− buttons to adjust quantities
3. Click Delete to remove items (with confirmation)
4. Click Checkout to complete your order

### Filtering
- Use the category filter on the Products page
- Select "All Plants" or specific categories
- Products update instantly

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── ProductCard.jsx
│   ├── ProductCard.css
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── CartItem.jsx
│   ├── CartItem.css
│   ├── CartSummary.jsx
│   └── CartSummary.css
├── pages/               # Page components
│   ├── Landing.jsx
│   ├── Landing.css
│   ├── Products.jsx
│   ├── Products.css
│   ├── Cart.jsx
│   └── Cart.css
├── redux/              # Redux store and slices
│   ├── store.js
│   └── features/
│       └── cart/
│           ├── cartSlice.js
│           └── cartSelectors.js
├── data/               # Data files
│   └── plantsData.js
├── utils/              # Utility functions
│   └── helpers.js
├── App.jsx             # Main App component
├── App.css
├── index.js            # React entry point
├── index.css           # Global styles
├── public/
│   ├── index.html
│   └── manifest.json
└── package.json
```

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Redux Toolkit** - State management
- **React-Redux** - Redux bindings for React

### Styling
- **CSS3** - Modern CSS with Grid and Flexbox
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and effects

### Build & Deployment
- **Create React App** - Project bootstrapping
- **gh-pages** - GitHub Pages deployment

## 📝 Implemented Features

### Required Features (100% Complete)
- [x] React app with CRA setup
- [x] React Router with 3 routes (/, /products, /cart)
- [x] Navigation bar on all pages
- [x] Cart item count badge in navbar
- [x] Product array with 8 plants (2 categories)
- [x] Product cards with all details
- [x] 2 plant categories with filtering
- [x] Add to Cart functionality
- [x] Cart page with quantity controls
- [x] Cart totals calculation
- [x] Continue Shopping & Checkout buttons
- [x] Redux integration with slices
- [x] useSelector/useDispatch hooks
- [x] Dynamic cart updates
- [x] localStorage persistence
- [x] Deployment ready

### Quality Features (Bonus)
- [x] Responsive design (desktop, tablet, mobile)
- [x] Accessibility features (ARIA labels, semantic HTML)
- [x] Category filtering on products page
- [x] Delete confirmation dialog
- [x] Price formatting with currency symbol
- [x] Stock indicators on product cards
- [x] Add to cart feedback animation
- [x] Smooth animations and transitions
- [x] Clean, modular component structure
- [x] Meaningful git commits

## 🐛 Known Issues

- Checkout button shows an alert (can be enhanced with a checkout form)
- Product images are from Unsplash CDN (may vary based on connection)
- Stock is managed locally (no backend integration)

## 🎁 Future Enhancements

- [ ] Search functionality for products
- [ ] Sort products by price/name
- [ ] Product detail page with more information
- [ ] Checkout form with validation
- [ ] Order confirmation page
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Backend integration with API
- [ ] Payment gateway integration
- [ ] Unit tests with Jest
- [ ] E2E tests with Cypress

## 📱 Screenshots

### Landing Page
[Add screenshot of landing page]

### Products Page
[Add screenshot of products page with categories]

### Cart Page
[Add screenshot of cart page with items]

## 👨‍💻 Development Notes

### Adding New Plants
Edit `src/data/plantsData.js` and add items to the `plantsData` array:

```javascript
{
  id: 9,
  name: 'Plant Name',
  description: 'Plant description',
  price: 999,
  imageUrl: 'https://image-url.com/image.jpg',
  category: 'Aromatic Plants',
  stock: 20,
}
```

### Redux Store
The cart state includes:
- `items[]` - Array of cart items
- `totalQuantity` - Total number of items
- `totalPrice` - Total price of all items

### LocalStorage
Cart data is automatically saved and restored from localStorage with key: `cart`

## 📄 License

This project is part of the IBM/Linux Foundation React course final project.

## 👥 Author

- **Repository**: [ItsShahzadAhmedAwan/React-IBM-Project](https://github.com/ItsShahzadAhmedAwan/React-IBM-Project)
- **GitHub**: [@ItsShahzadAhmedAwan](https://github.com/ItsShahzadAhmedAwan)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## ❓ Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy Coding! 🌿🚀**

*Made with ❤️ for the Paradise Nursery*
