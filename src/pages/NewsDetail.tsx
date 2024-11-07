import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { ChevronLeft } from "lucide-react";

// 模擬新聞數據
const mockNews = {
	id: "1",
	title: "新生優惠：尋找藝術之魂的最佳時刻來臨了！",
	category: "優惠活動",
	imageUrl:
		"https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
	datetime: "2024-03-15T10:00:00",
	description: "藝享一年只有一次的新學員優惠來啦！跟著我們一起種源藝術的魔法！",
	content: `藝享一年只有一次的新學員優惠來啦！跟著我們一起種源藝術的魔法！

起緊加入我們的藝術課程，開啟一段充滿創意的冒險之旅吧～現在加入，您將享受優惠的學費折扣，獲得學習藝術的獨特機會。

藝術將在您的生活中綻放出絢爛光彩，創造無限可能。

優惠內容：
- 新生報名任意課程享85折優惠
- 同時報名兩堂課程可享8折優惠
- 舊生推薦新生，雙方皆可獲得優惠券

優惠期間：
2024/03/15 - 2024/04/15

注意事項：
- 優惠不得與其他折扣合併使用
- 每人限用一次新生優惠
- 課程需於優惠期間內報名並完成付款`,
};

// 模擬相關新聞
const relatedNews = [
	{
		id: "2",
		title: "新課預告「軟裝設計入門」",
		category: "新課預告",
		imageUrl:
			"https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80",
		datetime: "2024-03-10T14:00:00",
		description: "想要讓居家空間更有品味？快來參加我們的軟裝設計入門課程！",
	},
	{
		id: "3",
		title: "限時優惠來囉！！",
		category: "優惠活動",
		imageUrl:
			"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
		datetime: "2024-03-05T09:00:00",
		description: "春季限定優惠，指定課程買一送一，趕快把握機會！",
	},
];

export default function NewsDetail() {
	const { id } = useParams();
	const news = mockNews; // 之後會根據 id 從 API 獲取數據

	return (
		<div className="bg-gray-50 min-h-screen py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* 返回按鈕 */}
				<Link
					to="/news"
					className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
				>
					<ChevronLeft className="w-5 h-5 mr-1" />
					返回最新消息
				</Link>

				{/* 文章內容 */}
				<article className="bg-white rounded-lg shadow-md overflow-hidden">
					<img
						src={news.imageUrl}
						alt={news.title}
						className="w-full h-[400px] object-cover"
					/>
					<div className="p-8">
						<div className="flex items-center gap-3 mb-4">
							<span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
								#{news.category}
							</span>
							<time className="text-sm text-gray-500">
								{format(new Date(news.datetime), "yyyy/MM/dd", {
									locale: zhTW,
								})}
							</time>
						</div>
						<h1 className="text-3xl font-bold text-gray-900 mb-6">
							{news.title}
						</h1>
						<div className="prose prose-lg max-w-none">
							{news.content.split("\n\n").map((paragraph, index) => (
								<p key={index} className="mb-4 text-gray-600">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</article>

				{/* 相關文章 */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">相關文章</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{relatedNews.map((item) => (
							<Link
								key={item.id}
								to={`/news/${item.id}`}
								className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
							>
								<img
									src={item.imageUrl}
									alt={item.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
											#{item.category}
										</span>
										<time className="text-sm text-gray-500">
											{format(new Date(item.datetime), "yyyy/MM/dd", {
												locale: zhTW,
											})}
										</time>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600 line-clamp-2">
										{item.description}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
