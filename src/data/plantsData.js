export const plantsData = [
  {
    id: 1,
    name: 'Lavender Plant',
    description: 'Beautiful purple lavender with calming fragrance',
    price: 1299,
    imageUrl: 'https://images.pexels.com/photos/4501950/pexels-photo-4501950.jpeg?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 15,
  },
  {
    id: 2,
    name: 'Rose Geranium',
    description: 'Fragrant rose geranium with pink flowers',
    price: 899,
    imageUrl: 'https://images.pexels.com/photos/3954657/pexels-photo-3954657.jpeg?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 20,
  },
  {
    id: 3,
    name: 'Mint Plant',
    description: 'Fresh green mint for cooking and tea',
    price: 599,
    imageUrl: 'https://images.pexels.com/photos/4463616/pexels-photo-4463616.jpeg?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 25,
  },
  {
    id: 4,
    name: 'Jasmine Vine',
    description: 'Elegant jasmine with sweet fragrance',
    price: 1199,
    imageUrl: 'https://images.pexels.com/photos/3944299/pexels-photo-3944299.jpeg?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 12,
  },
  {
    id: 5,
    name: 'Aloe Vera',
    description: 'Medicinal aloe vera gel for skin care',
    price: 799,
    imageUrl: 'https://images.pexels.com/photos/6326380/pexels-photo-6326380.jpeg?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 30,
  },
  {
    id: 6,
    name: 'Tulsi Plant',
    description: 'Holy basil tulsi with medicinal properties',
    price: 699,
    imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 22,
  },
  {
    id: 7,
    name: 'Neem Plant',
    description: 'Powerful medicinal neem for immunity',
    price: 1099,
    imageUrl: 'https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 18,
  },
  {
    id: 8,
    name: 'Lemon Grass',
    description: 'Aromatic lemongrass for tea and cooking',
    price: 749,
    imageUrl: 'https://images.pexels.com/photos/5632632/pexels-photo-5632632.jpeg?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 20,
  },
];

export const getPlantsByCategory = (category) => {
  return plantsData.filter(plant => plant.category === category);
};

export const getAllCategories = () => {
  return [...new Set(plantsData.map(plant => plant.category))];
};

export const getPlantById = (id) => {
  return plantsData.find(plant => plant.id === id);
};
