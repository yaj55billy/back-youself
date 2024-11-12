import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Mail, Lock } from "lucide-react";

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const validateForm = () => {
		let isValid = true;
		const newErrors = {
			email: "",
			password: "",
		};

		if (!formData.email) {
			newErrors.email = "請輸入電子郵件";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "請輸入有效的電子郵件";
			isValid = false;
		}

		if (!formData.password) {
			newErrors.password = "請輸入密碼";
			isValid = false;
		} else if (formData.password.length < 6) {
			newErrors.password = "密碼長度至少需要6個字元";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// TODO: 處理登入邏輯
			console.log("Form submitted:", formData);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// 清除該欄位的錯誤訊息
		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			{/* 回首頁按鈕 */}
			<div className="p-4">
				<Link
					to="/"
					className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
				>
					<ChevronLeft className="w-5 h-5 mr-1" />
					回首頁
				</Link>
			</div>

			{/* 登入表單 */}
			<div className="flex-grow flex items-center justify-center px-4">
				<div className="w-full max-w-md">
					<div className="bg-white rounded-lg shadow-md p-8">
						<div className="text-center mb-8">
							<h1 className="text-2xl font-bold text-gray-900">歡迎回來</h1>
							<p className="text-gray-600 mt-2">請登入您的帳號</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									電子郵件
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`block w-full pl-10 pr-3 py-2 border ${
											errors.email ? "border-red-500" : "border-gray-300"
										} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
										placeholder="your@email.com"
									/>
								</div>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									密碼
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="password"
										id="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										className={`block w-full pl-10 pr-3 py-2 border ${
											errors.password ? "border-red-500" : "border-gray-300"
										} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
										placeholder="••••••"
									/>
								</div>
								{errors.password && (
									<p className="mt-1 text-sm text-red-500">{errors.password}</p>
								)}
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-700"
									>
										記住我
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-primary hover:text-primary-dark"
									>
										忘記密碼？
									</a>
								</div>
							</div>

							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
							>
								登入
							</button>

							<div className="text-center text-sm text-gray-600">
								還沒有帳號？{" "}
								<Link
									to="/register"
									className="font-medium text-primary hover:text-primary-dark"
								>
									立即註冊
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
