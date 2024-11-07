import { useState } from "react";
import { Course } from "../types";
import CourseFilter from "../components/CourseFilter";
import CourseList from "../components/CourseList";

// 模擬課程數據
const mockCourses: Course[] = [
	{
		id: "1",
		title: "建築攝影",
		imageUrl:
			"https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
		datetime: "2023-05-07 19:00-21:00",
		maxParticipants: 20,
		category: "meditation",
		description: "學習建築攝影的基礎技巧，探索城市中的幾何美學。",
		details: "本課程將帶領學員探索建築攝影的奧妙，從構圖、光線到後期處理。",
		originalPrice: 1599,
		specialPrice: 1299,
		notes: "請攜帶相機和三腳架。",
	},
	{
		id: "2",
		title: "藝術鑑賞",
		imageUrl:
			"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80",
		datetime: "2023-05-03 19:00-21:00",
		maxParticipants: 20,
		category: "yoga",
		description: "深入了解藝術史和鑑賞技巧，培養藝術眼光。",
		details: "從古典到現代藝術，探索不同時期的藝術風格和創作理念。",
		originalPrice: 1299,
		specialPrice: 1099,
		notes: "課程包含美術館參訪。",
	},
	// ... 更多課程數據
];

export default function Courses() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredCourses = mockCourses.filter((course) => {
		const matchesCategory =
			activeCategory === "all" || course.category === activeCategory;
		const matchesSearch =
			course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			course.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="bg-gray-50 min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">課程列表</h1>
					<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
						<div className="flex-grow">
							<CourseFilter
								activeCategory={activeCategory}
								onCategoryChange={setActiveCategory}
							/>
						</div>
						<div className="w-full md:w-64">
							<input
								type="text"
								placeholder="搜尋課程..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
							/>
						</div>
					</div>
				</div>
				<CourseList courses={filteredCourses} />
			</div>
		</div>
	);
}
