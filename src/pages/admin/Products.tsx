import { useState } from "react";
import { Link } from "react-router-dom";
import {
	ChevronLeft,
	ChevronRight,
	Tag,
	DollarSign,
	Power,
} from "lucide-react";

// 模擬產品數據
const mockProducts = [
	{
		id: "test",
		category: "test",
		name: "test",
		originalPrice: 1000,
		price: 800,
		isEnabled: false,
	},
	{
		id: "food1",
		category: "飲食",
		name: "食療課(2024 4月場次)",
		originalPrice: 800,
		price: 550,
		isEnabled: true,
	},
	{
		id: "yoga1",
		category: "瑜珈",
		name: "瑜珈入門課 (2024 3月場次)",
		originalPrice: 1000,
		price: 800,
		isEnabled: true,
	},
	{
		id: "yoga2",
		category: "瑜珈",
		name: "瑜珈進階課(2024 4月場次)",
		originalPrice: 1600,
		price: 1200,
		isEnabled: true,
	},
	{
		id: "meditation1",
		category: "內觀",
		name: "一日靜修工作坊(2024 5月場次)",
		originalPrice: 3500,
		price: 3000,
		isEnabled: true,
	},
];

export default function Products() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	return (
		<div>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
				<h2 className="text-2xl font-bold text-gray-900">產品列表</h2>
				<Link
					to="/admin/products/new"
					className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full sm:w-auto text-center"
				>
					建立新的產品
				</Link>
			</div>

			{/* 響應式產品列表 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{mockProducts.map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
					>
						<div className="flex items-center justify-between mb-3">
							<span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
								{product.category}
							</span>
							<span
								className={`px-3 py-1 rounded-full text-sm font-medium ${
									product.isEnabled
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
							>
								{product.isEnabled ? "啟用" : "未啟用"}
							</span>
						</div>

						<h3 className="text-lg font-medium text-gray-900 mb-4">
							{product.name}
						</h3>

						<div className="space-y-2 mb-4">
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-500">原價</span>
								<span className="text-gray-600 line-through">
									NT$ {product.originalPrice.toLocaleString()}
								</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-500">售價</span>
								<span className="text-primary font-medium">
									NT$ {product.price.toLocaleString()}
								</span>
							</div>
						</div>

						<div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-100">
							<button className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
								編輯
							</button>
							<button className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
								刪除
							</button>
						</div>
					</div>
				))}
			</div>

			{/* 分頁控制 */}
			<div className="flex items-center justify-between mt-6">
				<div className="flex items-center space-x-2">
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<span className="px-3 py-2 rounded-lg bg-primary text-white">
						{currentPage}
					</span>
					<button
						onClick={() => setCurrentPage((prev) => prev + 1)}
						className="p-2 rounded-lg hover:bg-gray-100"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
