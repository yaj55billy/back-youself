import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
	Menu,
	Package,
	Tag,
	FileText,
	ShoppingCart,
	LogOut,
	X,
} from "lucide-react";

export default function AdminLayout() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const location = useLocation();

	const navigation = [
		{ name: "產品列表", href: "/admin/products", icon: Package },
		{ name: "優惠券列表", href: "/admin/coupons", icon: Tag },
		{ name: "訂單列表", href: "/admin/orders", icon: ShoppingCart },
		{ name: "文章列表", href: "/admin/articles", icon: FileText },
	];

	const isActive = (path: string) => {
		return location.pathname.startsWith(path);
	};

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-gray-900 text-white sticky top-0 z-30">
				<div className="px-4 py-3 flex items-center justify-between">
					<div className="flex items-center">
						<button
							onClick={() => setIsSidebarOpen(!isSidebarOpen)}
							className="p-1 rounded-lg hover:bg-gray-800 lg:hidden"
						>
							<Menu className="w-6 h-6" />
						</button>
						<h1 className="ml-4 text-lg font-semibold">後台管理頁面</h1>
					</div>
					<div className="flex items-center space-x-4">
						<Link to="/" className="text-sm hover:text-gray-300">
							回首頁
						</Link>
						<button className="flex items-center text-sm hover:text-gray-300">
							<LogOut className="w-4 h-4 mr-1" />
							<span className="hidden sm:inline">登出</span>
						</button>
					</div>
				</div>
			</header>

			<div className="flex">
				{/* Mobile Sidebar Overlay */}
				{isSidebarOpen && (
					<div
						className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
						onClick={() => setIsSidebarOpen(false)}
					/>
				)}

				{/* Sidebar */}
				<aside
					className={`
            fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-48px)]
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
				>
					<div className="flex items-center justify-between p-4 lg:hidden">
						<h2 className="text-lg font-semibold text-gray-900">選單</h2>
						<button
							onClick={() => setIsSidebarOpen(false)}
							className="p-1 rounded-lg hover:bg-gray-100"
						>
							<X className="w-6 h-6" />
						</button>
					</div>
					<nav className="p-4 space-y-1">
						{navigation.map((item) => {
							const Icon = item.icon;
							return (
								<Link
									key={item.name}
									to={item.href}
									onClick={() => setIsSidebarOpen(false)}
									className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
										isActive(item.href)
											? "bg-primary text-white"
											: "text-gray-700 hover:bg-gray-100"
									}`}
								>
									<Icon className="w-5 h-5 mr-3" />
									{item.name}
								</Link>
							);
						})}
					</nav>
				</aside>

				{/* Main Content */}
				<main className="flex-1 p-4 sm:p-6 w-full overflow-x-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
