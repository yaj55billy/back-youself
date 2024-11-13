import { useState } from "react";
import {
	ChevronLeft,
	ChevronRight,
	Calendar,
	Mail,
	DollarSign,
	CheckCircle,
	XCircle,
} from "lucide-react";

// 模擬訂單數據
const mockOrders = [
	{
		id: "1",
		date: "2024-02-01",
		email: "test3@gmail.com",
		items: [
			{ name: "瑜珈進階課(2024 4月場次)", quantity: 1 },
			{ name: "瑜珈入門課 (2024 3月場次)", quantity: 3 },
		],
		totalAmount: 3600,
		isPaid: true,
	},
	{
		id: "2",
		date: "2024-02-01",
		email: "test2@gmail.com",
		items: [
			{ name: "靜坐導引課(2024 1月場次)", quantity: 1 },
			{ name: "靜坐導引課(2024 3月場次)", quantity: 2 },
		],
		totalAmount: 2997,
		isPaid: false,
	},
	{
		id: "3",
		date: "2024-02-01",
		email: "test@gmail.com",
		items: [
			{ name: "食療課(2024 3月場次)", quantity: 2 },
			{ name: "食療課(2024 1月場次)", quantity: 3 },
		],
		totalAmount: 2750,
		isPaid: true,
	},
	{
		id: "4",
		date: "2024-01-28",
		email: "aaaaa@gmail.com",
		items: [
			{ name: "食療課(2024 4月場次)", quantity: 8 },
			{ name: "食療課(2024 1月場次)", quantity: 1 },
		],
		totalAmount: 4950,
		isPaid: false,
	},
	{
		id: "5",
		date: "2024-01-24",
		email: "aaa@gmail.com",
		items: [
			{ name: "一日靜修工作坊(2024 3月場次)", quantity: 1 },
			{ name: "瑜珈進階課(2024 4月場次)", quantity: 3 },
			{ name: "食療課(2024 1月場次)", quantity: 1 },
		],
		totalAmount: 7150,
		isPaid: true,
	},
];

export default function Orders() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	return (
		<div>
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-gray-900">訂單列表</h2>
			</div>

			{/* 響應式訂單列表 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{mockOrders.map((order) => (
					<div
						key={order.id}
						className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
					>
						{/* 訂單標頭 */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center space-x-2 text-sm text-gray-500">
								<Calendar className="w-4 h-4" />
								<span>{order.date}</span>
							</div>
							<span
								className={`px-3 py-1 rounded-full text-sm font-medium ${
									order.isPaid
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
							>
								{order.isPaid ? "已付款" : "未付款"}
							</span>
						</div>

						{/* 訂單內容 */}
						<div className="space-y-3 mb-4">
							<div className="flex items-center space-x-2 text-sm">
								<Mail className="w-4 h-4 text-gray-400" />
								<span className="text-gray-600">{order.email}</span>
							</div>

							<div className="bg-gray-50 rounded-lg p-3">
								<h4 className="text-sm font-medium text-gray-700 mb-2">
									購買項目：
								</h4>
								<ul className="space-y-2">
									{order.items.map((item, index) => (
										<li
											key={index}
											className="text-sm text-gray-600 flex justify-between"
										>
											<span>{item.name}</span>
											<span className="text-gray-500">x {item.quantity}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-sm text-gray-500">總金額</span>
								<span className="text-lg font-medium text-primary">
									NT$ {order.totalAmount.toLocaleString()}
								</span>
							</div>
						</div>

						{/* 操作按鈕 */}
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
