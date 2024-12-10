import { JacketCategory } from '@/types/jacket';
import { cn } from '@/lib/utils';

interface CategoryCard {
  category: JacketCategory;
  title: string;
  description: string;
  imageUrl: string;
}

const categories: CategoryCard[] = [
  {
    category: 'insulated',
    title: 'Insulated',
    description: 'Warmth for cold conditions',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
  },
  {
    category: 'shell',
    title: 'Shell',
    description: 'Protection from wind and rain',
    imageUrl: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114',
  },
  {
    category: 'lightweight',
    title: 'Lightweight',
    description: 'Breathable comfort for mild conditions',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
  },
];

interface JacketCategoriesProps {
  selectedCategory: JacketCategory | null;
  onSelectCategory: (category: JacketCategory | null) => void;
}

export function JacketCategories({ selectedCategory, onSelectCategory }: JacketCategoriesProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Shop By Category</h2>
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => onSelectCategory(cat.category)}
            className={cn(
              'relative h-96 group overflow-hidden rounded-lg',
              selectedCategory === cat.category && 'ring-2 ring-primary'
            )}
          >
            <div className="absolute inset-0">
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-white/80">{cat.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}