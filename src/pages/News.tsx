import { useState } from "react";
import { Link } from "react-router-dom";
import { NewsItem } from "../types";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

// 模擬新聞數據
const mockNews: NewsItem[] = [
	{
		id: "1",
		title: "新生優惠：尋找藝術之魂的最佳時刻來臨了！",
		category: "優惠活動",
		imageUrl:
			"https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
		datetime: "2024-03-15T10:00:00",
		description:
			"藝享一年只有一次的新學員優惠來啦！跟著我們一起種源藝術的魔法！起緊加入我們的藝術課程，開啟一段充滿創意的冒險之旅吧～",
		content:
			"現在加入，您將享受優惠的學費折扣，獲得學習藝術的獨特機會。藝術將在您的生活中綻放出絢爛光彩，創造無限可能。",
	},
	{
		id: "2",
		title: "新課預告「軟裝設計入門」",
		category: "新課預告",
		imageUrl:
			"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80",
		datetime: "2024-03-10T14:00:00",
		description: "想要讓居家空間更有品味？快來參加我們的軟裝設計入門課程！",
		content:
			"本課程將帶您了解軟裝設計的基本原則，從色彩搭配到材質選擇，讓您的居家空間煥然一新。",
	},
	{
		id: "3",
		title: "限時優惠來囉！！",
		category: "優惠活動",
		imageUrl:
			"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
		datetime: "2024-03-05T09:00:00",
		description: "春季限定優惠，指定課程買一送一，趕快把握機會！",
		content:
			"春暖花開的季節，我們推出了超值的課程優惠，讓您以最實惠的價格體驗最優質的課程。",
	},
];

const categories = ["全部", "優惠活動", "新課預告", "課程異動"];

export default function NewsPage() {
	const [activeCategory, setActiveCategory] = useState("全部");

	const filteredNews = mockNews.filter(
		(news) => activeCategory === "全部" || news.category === activeCategory
	);

	return (
		<div className="bg-gray-50 min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-8">最新消息</h1>

				{/* 分類過濾 */}
				<div className="mb-8">
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
										activeCategory === category
											? "bg-primary text-white"
											: "bg-gray-100 text-gray-600 hover:bg-gray-200"
									}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* 新聞列表 */}
				<div className="grid grid-cols-1 gap-6">
					{filteredNews.map((news) => (
						<Link
							key={news.id}
							to={`/news/${news.id}`}
							className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="md:col-span-1">
									<img
										src={news.imageUrl}
										alt={news.title}
										className="w-full h-48 md:h-full object-cover"
									/>
								</div>
								<div className="md:col-span-2 p-6">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
											#{news.category}
										</span>
										<span className="text-sm text-gray-500">
											{format(new Date(news.datetime), "yyyy/MM/dd", {
												locale: zhTW,
											})}
										</span>
									</div>
									<h2 className="text-xl font-bold text-gray-900 mb-3">
										{news.title}
									</h2>
									<p className="text-gray-600 mb-4 line-clamp-2">
										{news.description}
									</p>
									<div className="flex justify-end">
										<span className="inline-block text-primary font-medium hover:text-primary-dark">
											更多詳情
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
