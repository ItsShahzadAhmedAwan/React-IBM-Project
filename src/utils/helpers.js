// Format price to Pakistani Rupees (PKR)
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Format price to USD (if needed)
export const formatPriceUSD = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Truncate text to specified length
export const truncateText = (text, length = 100) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

// Show toast notification
export const showToast = (message, type = 'success', duration = 3000) => {
  // This will be used with a Toast component
  return { message, type, duration };
};
