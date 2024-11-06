export interface Course {
  id: string;
  title: string;
  imageUrl: string;
  datetime: string;
  maxParticipants: number;
  category: 'meditation' | 'yoga' | 'diet' | 'singing-bowl';
  description: string;
  details: string;
  originalPrice: number;
  specialPrice: number;
  notes: string;
}