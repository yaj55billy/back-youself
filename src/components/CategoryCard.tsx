import { Link } from 'react-router-dom';
import { Flame, Leaf, Music, Sparkles } from 'lucide-react';
import { CourseCategory } from '../types';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  category: CourseCategory;
}

const getCategoryIcon = (category: CourseCategory) => {
  switch (category) {
    case 'meditation':
      return <Sparkles className="w-8 h-8 text-primary mb-4" />;
    case 'yoga':
      return <Flame className="w-8 h-8 text-primary mb-4" />;
    case 'diet':
      return <Leaf className="w-8 h-8 text-primary mb-4" />;
    case 'singing-bowl':
      return <Music className="w-8 h-8 text-primary mb-4" />;
  }
};

export default function CategoryCard({ title, description, href, category }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="block group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
    >
      {getCategoryIcon(category)}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}