# Contributing to Paradise Nursery

Thank you for your interest in contributing! This guide will help you get started.

## 🤝 How to Contribute

### 1. Fork the Repository
Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/React-IBM-Project.git
cd React-IBM-Project
```

### 3. Add Upstream Remote
```bash
git remote add upstream https://github.com/ItsShahzadAhmedAwan/React-IBM-Project.git
```

### 4. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 5. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update tests if applicable

### 6. Commit Your Changes
```bash
git commit -m "Add: Brief description of changes"
git commit -m "Fix: Brief description of fixes"
git commit -m "Docs: Update documentation"
```

### 7. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 8. Create a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your feature branch
- Describe your changes
- Submit the PR

## 📋 Commit Message Format

```
[TYPE]: Description

# Types: Add, Fix, Docs, Style, Refactor, Test, Chore
```

Examples:
- `Add: Product search functionality`
- `Fix: Cart total calculation bug`
- `Docs: Update README with API docs`
- `Style: Format CartItem component CSS`

## ✨ Code Style Guidelines

### JavaScript/React
```javascript
// Use const by default
const handleClick = () => { };

// Use camelCase for variables
const isLoading = true;

// Use descriptive names
const getUserCart = () => { };

// Add comments for complex logic
// Check if item already exists in cart
const existingItem = cart.items.find(item => item.id === newItem.id);
```

### CSS
```css
/* Use kebab-case for class names */
.product-card {
  /* Group related properties */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Use meaningful class names */
.cart-item-quantity {
  /* ... */
}

/* Mobile-first approach */
@media (min-width: 768px) {
  /* tablet and up */
}
```

## 🎯 Types of Contributions

### Bug Fixes
- Test thoroughly
- Provide before/after behavior
- Include test case if applicable

### Features
- Open an issue first for discussion
- Keep features focused and small
- Update documentation

### Documentation
- Fix typos and clarify explanations
- Add examples
- Update outdated links

### Performance
- Measure improvements
- Avoid premature optimization
- Document trade-offs

### Accessibility
- Test with screen readers
- Check keyboard navigation
- Verify color contrast

## 🧪 Testing Checklist

Before submitting a PR:
- [ ] Code runs without errors
- [ ] No console warnings
- [ ] Responsive on mobile/tablet
- [ ] Works on latest browsers
- [ ] Follows code style
- [ ] Comments added where needed
- [ ] No unused imports
- [ ] localStorage works correctly

## 📝 Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style change
- [ ] Refactoring

## Related Issue
Closes #(issue number)

## Testing
How to test the changes:
1. Step 1
2. Step 2

## Screenshots
[If applicable, add screenshots]

## Checklist
- [ ] Code follows style guidelines
- [ ] No console errors/warnings
- [ ] Self-reviewed code
- [ ] Comments added
- [ ] Documentation updated
- [ ] Tests pass
```

## 🚫 What NOT to Do

- ❌ Don't commit node_modules
- ❌ Don't use console.log() (use proper error handling)
- ❌ Don't hardcode values
- ❌ Don't make multiple unrelated changes in one PR
- ❌ Don't modify package.json without discussion
- ❌ Don't use deprecated React patterns

## 📚 Project Structure for New Features

If adding a feature:

```
src/
├── components/        # Add new component
│   └── NewFeature.jsx
│   └── NewFeature.css
├── redux/            # Add slice if managing state
│   └── features/
│       └── newFeature/
│           ├── featureSlice.js
│           └── featureSelectors.js
├── pages/            # Add page component if needed
│   └── NewPage.jsx
│   └── NewPage.css
└── utils/            # Add utility functions
    └── newFeatureHelpers.js
```

## 🐛 Bug Report Guidelines

When reporting bugs:

1. **Clear Title**: Describe the bug briefly
2. **Environment**: OS, browser, React version
3. **Steps to Reproduce**: Clear step-by-step instructions
4. **Expected Behavior**: What should happen
5. **Actual Behavior**: What actually happens
6. **Screenshots**: Visual evidence if applicable
7. **Console Errors**: Any error messages

Example:
```markdown
Title: Cart total not updating on quantity change

Browser: Chrome 120
OS: Windows 11

Steps to Reproduce:
1. Go to /products
2. Add any plant to cart
3. Go to /cart
4. Increase quantity of item
5. Total price stays the same (should update)

Expected: Total price updates immediately
Actual: Total price remains unchanged

Console Errors: None
```

## 🎓 Good Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Best Practices](https://react.dev/learn)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)

## 💡 Ideas for Contributions

### Easy (Good First PR)
- Add more plants to data
- Improve comments
- Update documentation
- Fix typos
- Add loading states

### Medium
- Add search functionality
- Add sorting options
- Improve error handling
- Add more animations
- Add unit tests

### Hard
- Backend integration
- Payment gateway
- User authentication
- Advanced filtering
- Performance optimization

## 🏆 Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Credited in commit history
- Thanked in README

## ❓ Questions?

- Open a GitHub Issue
- Check existing discussions
- Review the code comments

## 📋 Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help other contributors
- Follow the Code of Conduct

---

**Thank you for contributing to Paradise Nursery! 🌿**
