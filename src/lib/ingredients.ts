export type ScentProfile = 'Woody' | 'Citrus' | 'Floral' | 'Spicy' | 'Fresh' | 'Oriental' | 'Fruity' | 'Gourmand';
export type NoteType = 'Top' | 'Heart' | 'Base';

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  scentProfile: ScentProfile[];
  noteType: NoteType[];
  imageId: string;
}

export const ingredients: Ingredient[] = [
  // Top Notes
  {
    id: 'bergamot',
    name: 'Bergamot',
    description: 'A fresh, sweet, citrusy scent with a slightly spicy-balsamic undertone. Bright and uplifting.',
    scentProfile: ['Citrus', 'Fresh'],
    noteType: ['Top'],
    imageId: 'ingredient-citrus'
  },
  {
    id: 'lemon',
    name: 'Lemon',
    description: 'A sharp, zesty, and clean citrus aroma that provides a sparkling and cheerful top note.',
    scentProfile: ['Citrus', 'Fresh'],
    noteType: ['Top'],
    imageId: 'ingredient-citrus'
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    description: 'A strong, camphoraceous, and medicinal aroma with a cool, woody-sweet undertone.',
    scentProfile: ['Fresh'],
    noteType: ['Top'],
    imageId: 'ingredient-fresh'
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    description: 'A sharp, spicy, and peppery scent that adds a vibrant and stimulating kick.',
    scentProfile: ['Spicy'],
    noteType: ['Top', 'Heart'],
    imageId: 'ingredient-spicy'
  },
  // Heart Notes
  {
    id: 'rose',
    name: 'Rose',
    description: 'The classic floral scent: romantic, rich, and slightly sweet. The heart of many timeless perfumes.',
    scentProfile: ['Floral'],
    noteType: ['Heart'],
    imageId: 'ingredient-floral'
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    description: 'An intensely floral, sweet, and rich scent with a warm, musky edge. Highly sensual and exotic.',
    scentProfile: ['Floral', 'Oriental'],
    noteType: ['Heart'],
    imageId: 'ingredient-floral'
  },
  {
    id: 'ylang-ylang',
    name: 'Ylang-Ylang',
    description: 'A sweet, exotic, and slightly fruity floral note. Known for its rich and narcotic aroma.',
    scentProfile: ['Floral', 'Fruity'],
    noteType: ['Heart'],
    imageId: 'ingredient-floral'
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    description: 'A warm, sweet, and comforting spicy scent, reminiscent of baked goods and cozy evenings.',
    scentProfile: ['Spicy', 'Gourmand'],
    noteType: ['Heart'],
    imageId: 'ingredient-spicy'
  },
  // Base Notes
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    description: 'A soft, warm, smooth, creamy, and milky precious-wood scent. Provides a rich and lasting foundation.',
    scentProfile: ['Woody'],
    noteType: ['Base'],
    imageId: 'ingredient-woody'
  },
  {
    id: 'cedarwood',
    name: 'Cedarwood',
    description: 'A dry, woody, and slightly sweet scent reminiscent of pencil shavings and antique chests.',
    scentProfile: ['Woody'],
    noteType: ['Base'],
    imageId: 'ingredient-woody'
  },
  {
    id: 'vanilla',
    name: 'Vanilla',
    description: 'A sweet, cozy, and comforting scent with a creamy, rich character. A popular and versatile base note.',
    scentProfile: ['Gourmand', 'Oriental'],
    noteType: ['Base'],
    imageId: 'ingredient-oriental'
  },
  {
    id: 'amber',
    name: 'Amber',
    description: 'A warm, musky, rich and honey-like, and also somewhat earthy scent. Adds depth and warmth.',
    scentProfile: ['Oriental', 'Woody'],
    noteType: ['Base'],
    imageId: 'ingredient-oriental'
  },
];
