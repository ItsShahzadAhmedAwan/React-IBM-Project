export const plantsData = [
  {
    id: 1,
    name: 'Lavender Plant',
    description: 'Beautiful purple lavender with calming fragrance',
    price: 1299,
    imageUrl: 'https://images.unsplash.com/photo-1545604645-1dd57f6211ed?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 15,
  },
  {
    id: 2,
    name: 'Rose Geranium',
    description: 'Fragrant rose geranium with pink flowers',
    price: 899,
    imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 20,
  },
  {
    id: 3,
    name: 'Mint Plant',
    description: 'Fresh green mint for cooking and tea',
    price: 599,
    imageUrl: 'https://images.unsplash.com/photo-1531512073830-ba890ca3e9b9?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 25,
  },
  {
    id: 4,
    name: 'Jasmine Vine',
    description: 'Elegant jasmine with sweet fragrance',
    price: 1199,
    imageUrl: 'https://images.unsplash.com/photo-1502793396482-b81a2f4fc0ce?w=400&h=400&fit=crop',
    category: 'Aromatic Plants',
    stock: 12,
  },
  {
    id: 5,
    name: 'Aloe Vera',
    description: 'Medicinal aloe vera gel for skin care',
    price: 799,
    imageUrl: 'https://images.unsplash.com/photo-1582184897733-21291e0eb7d4?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 30,
  },
  {
    id: 6,
    name: 'Tulsi Plant',
    description: 'Holy basil tulsi with medicinal properties',
    price: 699,
    imageUrl: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 22,
  },
  {
    id: 7,
    name: 'Neem Plant',
    description: 'Powerful medicinal neem for immunity',
    price: 1099,
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f8194371?w=400&h=400&fit=crop',
    category: 'Medicinal Plants',
    stock: 18,
  },
  {
    id: 8,
    name: 'Lemon Grass',
    description: 'Aromatic lemongrass for tea and cooking',
    price: 749,
    imageUrl: 'https://images.unsplash.com/photo-1592150612556-6b4ee3e96c12?w=400&h=400&fit=crop',
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
