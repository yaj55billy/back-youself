export interface Course {
  id: string;
  title: string;
  imageUrl: string;
  datetime: string;
  maxParticipants: number;
  category: CourseCategory;
  description: string;
  details: string;
  originalPrice: number;
  specialPrice: number;
  notes: string;
}

export type CourseCategory = 'meditation' | 'yoga' | 'diet' | 'singing-bowl';

export interface News {
  id: string;
  title: string;
  imageUrl: string;
  datetime: string;
  maxParticipants: number;
  description: string;
  price?: number;
}

export interface CartItem {
  courseId: string;
  quantity: number;
}