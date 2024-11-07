// import { useParams } from "react-router-dom";
import { Course } from "../types";
// import { format } from "date-fns";
import { Users, Calendar, Tag } from "lucide-react";

// 模擬課程數據
const mockCourse: Course = {
	id: "1",
	title: "街頭攝影",
	imageUrl:
		"https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
	datetime: "2023-04-22 14:00-17:00",
	maxParticipants: 20,
	category: "meditation",
	description: "學習如何捕捉城市中的精彩瞬間，培養街拍敏銳度。",
	details:
		"本課程將帶領學員探索街頭攝影的魅力，從觀察、構圖到後期處理，全方位提升攝影技巧。課程包含實地拍攝練習，讓學員能夠實際運用所學。",
	originalPrice: 1599,
	specialPrice: 1299,
	notes: "建議攜帶相機，課程將安排戶外拍攝實習。",
};

// 模擬相關課程
const relatedCourses: Course[] = [
	{
		id: "2",
		title: "人物攝影",
		imageUrl:
			"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80",
		datetime: "2023-04-26 14:00-17:00",
		maxParticipants: 20,
		category: "meditation",
		description: "學習人像攝影的基礎技巧。",
		details: "探索人像攝影的各種可能性。",
		originalPrice: 1599,
		specialPrice: 1299,
		notes: "請攜帶相機。",
	},
	// ... 更多相關課程
];

export default function CourseDetail() {
	// const { id } = useParams();
	const course = mockCourse; // 之後會根據 id 從 API 獲取數據

	return (
		<div className="bg-gray-50 min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* 課程主圖 */}
				<div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
					<img
						src={course.imageUrl}
						alt={course.title}
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* 課程資訊 */}
					<div className="lg:col-span-2">
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							{course.title}
						</h1>
						<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								課程介紹
							</h2>
							<p className="text-gray-600 mb-6">{course.description}</p>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								課程內容
							</h2>
							<p className="text-gray-600 mb-6">{course.details}</p>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								注意事項
							</h2>
							<p className="text-gray-600">{course.notes}</p>
						</div>

						{/* 相關課程 */}
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								相關課程
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{relatedCourses.map((relatedCourse) => (
									<div
										key={relatedCourse.id}
										className="bg-white rounded-lg shadow-sm overflow-hidden"
									>
										<img
											src={relatedCourse.imageUrl}
											alt={relatedCourse.title}
											className="w-full h-48 object-cover"
										/>
										<div className="p-4">
											<h3 className="font-semibold text-gray-900 mb-2">
												{relatedCourse.title}
											</h3>
											<p className="text-gray-600 text-sm mb-2">
												{relatedCourse.description}
											</p>
											<div className="text-primary font-semibold">
												NT$ {relatedCourse.specialPrice}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* 報名資訊 */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
							<div className="mb-6">
								<div className="text-2xl font-bold text-primary mb-2">
									NT$ {course.specialPrice}
								</div>
								{course.originalPrice > course.specialPrice && (
									<div className="text-gray-400 line-through">
										NT$ {course.originalPrice}
									</div>
								)}
							</div>

							<div className="space-y-4 mb-6">
								<div className="flex items-center text-gray-600">
									<Calendar className="w-5 h-5 mr-2" />
									<span>{course.datetime}</span>
								</div>
								<div className="flex items-center text-gray-600">
									<Users className="w-5 h-5 mr-2" />
									<span>限額 {course.maxParticipants} 人</span>
								</div>
								<div className="flex items-center text-gray-600">
									<Tag className="w-5 h-5 mr-2" />
									<span>
										{course.category === "meditation" && "靜坐"}
										{course.category === "yoga" && "瑜珈"}
										{course.category === "diet" && "飲食"}
										{course.category === "singing-bowl" && "頌缽"}
									</span>
								</div>
							</div>

							<button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
								立即報名
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
