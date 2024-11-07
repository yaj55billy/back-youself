// import { useState } from "react";

const categories = [
	{ id: "all", name: "全部" },
	{ id: "meditation", name: "靜坐" },
	{ id: "yoga", name: "瑜珈" },
	{ id: "diet", name: "生活" },
	{ id: "singing-bowl", name: "頌缽" },
	{ id: "design", name: "設計" },
];

interface CourseFilterProps {
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

export default function CourseFilter({
	activeCategory,
	onCategoryChange,
}: CourseFilterProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{categories.map((category) => (
				<button
					key={category.id}
					onClick={() => onCategoryChange(category.id)}
					className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
							activeCategory === category.id
								? "bg-primary text-white"
								: "bg-gray-100 text-gray-600 hover:bg-gray-200"
						}`}
				>
					{category.name}
				</button>
			))}
		</div>
	);
}
