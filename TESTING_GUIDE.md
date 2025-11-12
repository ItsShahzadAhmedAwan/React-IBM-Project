# 🧪 Testing Guide - Paradise Nursery

## Quick Start Testing

### **Local Development Testing**

1. **Start the app:**
   ```powershell
   npm start
   ```

2. **The app should open at:**
   ```
   http://localhost:3000
   ```

3. **You should see:**
   - ✅ Green Navbar at the top
   - ✅ Hero section with "Welcome to Paradise Nursery" title
   - ✅ Subtitle about aromatic and medicinal plants
   - ✅ Three feature boxes (Premium Quality, Fast Delivery, Expert Care)
   - ✅ "Start Shopping" button
   - ✅ Plant hero image from Pexels
   - ✅ "Why Choose Paradise Nursery?" section with 4 info cards
   - ✅ Call-to-action section at bottom
   - ✅ Footer with copyright info

---

## **Route Testing**

| Route | Expected | Status |
|-------|----------|--------|
| `/` | Landing page with hero section | ✅ |
| `/products` | Products list with all 8 plants | ✅ |
| `/cart` | Shopping cart (empty initially) | ✅ |

---

## **Feature Testing Checklist**

### **Homepage (Landing Page)**
- [ ] Page loads immediately when app starts
- [ ] All text content is visible (not hidden)
- [ ] Hero image displays from Pexels
- [ ] Feature boxes (3 boxes) are displayed horizontally
- [ ] "Start Shopping" button links to `/products`
- [ ] Info cards (4 cards) show Paradise Nursery benefits
- [ ] Call-to-action section visible at bottom
- [ ] Footer shows copyright info

### **Navigation**
- [ ] Navbar is sticky at top
- [ ] Logo links to home (/)
- [ ] "Home" link in navbar works
- [ ] "Products" link goes to `/products`
- [ ] "Cart" link goes to `/cart`
- [ ] Cart badge shows "0" initially

### **Products Page**
- [ ] All 8 plants are displayed
- [ ] Each plant has:
  - [ ] Product image from Pexels
  - [ ] Plant name
  - [ ] Description
  - [ ] Price in PKR
  - [ ] Stock indicator
  - [ ] "Add to Cart" button

### **Add to Cart**
- [ ] Click "Add to Cart" on any product
- [ ] Cart badge updates (shows "1")
- [ ] Page shows success feedback
- [ ] Multiple items can be added

### **Shopping Cart Page**
- [ ] Shows all added items
- [ ] Each item shows:
  - [ ] Product name
  - [ ] Price
  - [ ] Quantity
  - [ ] +/- buttons to adjust qty
  - [ ] Delete button
  - [ ] Subtotal

### **Cart Summary**
- [ ] Shows total quantity
- [ ] Shows total price in PKR
- [ ] Displays formatted currency (e.g., "Rs. 1,500.00")
- [ ] "Continue Shopping" button works
- [ ] "Checkout" button shows alert

### **Data Persistence**
- [ ] Add items to cart
- [ ] Refresh page (F5)
- [ ] Cart items are still there
- [ ] Quantities are preserved

### **Responsive Design**
- [ ] Desktop (1920px) - All content visible
- [ ] Tablet (768px) - Layout adapts, single column for features
- [ ] Mobile (480px) - Fully responsive, readable text
- [ ] Mobile (320px) - No broken elements

---

## **Image Loading Test**

Check that images load correctly:

1. **Plant Product Images** (in `/products`)
   - All 8 plants should show images
   - Images from: `images.pexels.com`

2. **Landing Page Hero Image**
   - Should display plant collection image

3. **Console Check** (Press F12)
   - No 404 errors for images
   - No red X's on image placeholders

---

## **Browser Console Test**

Press **F12** to open developer tools:

1. **Console Tab** - Should show NO red errors:
   - ✅ Green checkmarks for successful loads
   - ❌ No FAILED messages

2. **Network Tab** - Click and check:
   - Images from `pexels.com` load successfully
   - API calls complete

3. **Application Tab** - Check localStorage:
   - Key: `cart`
   - Value: JSON array of items

---

## **Performance Test**

1. **Page Load Speed**
   - Homepage should load in < 2 seconds
   - Products page should load < 1 second
   - Cart page should load instantly

2. **Responsiveness**
   - No lag when clicking buttons
   - Instant feedback on interactions
   - Smooth transitions

---

## **Build & Deployment Test**

### **Local Production Build**

```powershell
# Build for production
npm run build

# Test the build locally
npm install -g serve
serve -s build
```

Should open at `http://localhost:5000` and work identically to development.

### **GitHub Pages Deployment Test**

```powershell
# Deploy to GitHub Pages
npm run deploy
```

Check at: `https://YOUR_USERNAME.github.io/React-IBM-Project/`

---

## **Common Issues & Solutions**

### **Issue: "Only see Navbar and Footer, no Landing content"**

**Cause:** CSS layout issue
**Solution:**
```bash
# Clear cache and reload
git status
npm start
# Press Ctrl+Shift+Delete to clear browser cache
# Press F5 to refresh
```

### **Issue: "Images not loading"**

**Check:**
- Open DevTools (F12)
- Go to Network tab
- Refresh page
- Look for failed image requests (red)
- Should see pexels.com URLs

**Fix if needed:**
```bash
# Rebuild cache
npm run build
serve -s build
```

### **Issue: "Cart items not saving"**

**Check localStorage:**
1. Open DevTools (F12)
2. Go to Application tab
3. Click LocalStorage
4. Look for "cart" key
5. Should contain JSON data

### **Issue: "404 on page refresh (GitHub Pages only)"**

**Fix:**
- Ensure `homepage` in package.json is correct
- Should be: `https://YOUR_USERNAME.github.io/React-IBM-Project/`

---

## **User Acceptance Test (UAT)**

**Scenario: Buy Plants**

1. Open app → See landing page with hero content ✅
2. Click "Start Shopping" → Go to products ✅
3. See 8 plants with images ✅
4. Click "Add to Cart" on 3 different plants ✅
5. Cart badge shows "3" ✅
6. Click cart icon → See 3 items with prices ✅
7. Adjust quantities (increase one, decrease one) ✅
8. Delete one item → Shows 2 items ✅
9. Refresh page → Items still there ✅
10. Go to home → Come back to cart → Items still there ✅

**Result:** ✅ All steps successful = App is working!

---

## **Debugging Commands**

```powershell
# Check for errors
npm run build

# Clear node_modules and reinstall
rm -r node_modules
npm install

# Check git status
git status

# View recent commits
git log --oneline

# Start fresh
npm start

# Stop the server
# Ctrl + C
```

---

## **Final Verification**

✅ **Before deployment, verify:**

- [ ] Landing page displays with all content
- [ ] No console errors (F12 → Console)
- [ ] All images load from Pexels
- [ ] Add to cart works
- [ ] Cart persists on refresh
- [ ] All routes work (/, /products, /cart)
- [ ] Responsive on mobile (Ctrl+Shift+I)
- [ ] `npm run build` completes without errors
- [ ] `npm run deploy` succeeds (GitHub Pages)

---

## **Help & Support**

- **Stuck?** Check console errors (F12)
- **Images not loading?** Check network tab in DevTools
- **Cart not saving?** Check localStorage in Application tab
- **Page blank?** Clear cache (Ctrl+Shift+Delete) and refresh
- **Need to deploy?** Follow DEPLOYMENT_GUIDE.md

---

**All tests passing? 🎉 Your app is production-ready!**
