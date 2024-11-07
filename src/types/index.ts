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

export type CourseCategory = "meditation" | "yoga" | "diet" | "singing-bowl";

export interface NewsItem {
	id: string;
	title: string;
	imageUrl: string;
	datetime: string;
	category: string;
	description: string;
	content: string;
}

export interface CartItem {
	courseId: string;
	quantity: number;
}
