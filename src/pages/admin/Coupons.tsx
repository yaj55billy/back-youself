import { useState } from "react";
import { Link } from "react-router-dom";
import {
	ChevronLeft,
	ChevronRight,
	Calendar,
	Percent,
	Power,
} from "lucide-react";

// 模擬優惠券數據
const mockCoupons = [
	{
		id: "1",
		name: "優惠券四",
		discount: 90,
		expiryDate: "2024-04-07",
		isEnabled: false,
	},
	{
		id: "2",
		name: "新優惠券二",
		discount: 90,
		expiryDate: "2024-01-31",
		isEnabled: true,
	},
	{
		id: "3",
		name: "新優惠券一",
		discount: 90,
		expiryDate: "2024-02-02",
		isEnabled: true,
	},
	{
		id: "4",
		name: "優惠券三",
		discount: 85,
		expiryDate: "2024-02-29",
		isEnabled: true,
	},
];

export default function Coupons() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	return (
		<div>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
				<h2 className="text-2xl font-bold text-gray-900">優惠券列表</h2>
				<Link
					to="/admin/coupons/new"
					className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full sm:w-auto text-center"
				>
					新增優惠券
				</Link>
			</div>

			{/* 響應式優惠券列表 */}
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{mockCoupons.map((coupon) => (
					<div
						key={coupon.id}
						className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-medium text-gray-900">
								{coupon.name}
							</h3>
							<span
								className={`px-3 py-1 rounded-full text-sm font-medium ${
									coupon.isEnabled
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
							>
								{coupon.isEnabled ? "啟用" : "未啟用"}
							</span>
						</div>

						<div className="space-y-3 mb-4">
							<div className="flex items-center space-x-2 text-sm">
								<Percent className="w-4 h-4 text-gray-400" />
								<span className="text-gray-600">折扣：{coupon.discount}折</span>
							</div>
							<div className="flex items-center space-x-2 text-sm">
								<Calendar className="w-4 h-4 text-gray-400" />
								<span className="text-gray-600">
									到期日：{coupon.expiryDate}
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
