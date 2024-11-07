import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function About() {
	return (
		<div className="bg-gray-50">
			{/* Hero Section */}
			<section
				className="relative h-[400px] bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80")',
				}}
			>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative h-full flex items-center justify-center text-center">
					<div className="max-w-3xl px-4">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							關於返家之路
						</h1>
						<p className="text-xl text-white/90">
							在這裡，找回內在的寧靜與平衡
						</p>
					</div>
				</div>
			</section>

			{/* Introduction Section */}
			<section className="py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								我們的理念
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									返家之路成立於2020年，我們深信每個人都應該擁有一個可以沉澱心靈的空間。
									在這裡，我們致力於創造一個寧靜且充滿能量的環境，幫助每個人找回內在的平靜。
								</p>
								<p>
									我們的課程涵蓋靜坐、瑜珈、飲食療癒到頌缽，每一個課程都經過精心設計，
									確保能夠滿足不同程度學員的需求。我們的導師們都擁有豐富的經驗，
									能夠為您提供專業且細心的指導。
								</p>
								<p>
									在返家之路，我們相信心靈的成長是一段永無止境的旅程，
									而我們很榮幸能夠陪伴您一同前行。
								</p>
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?auto=format&fit=crop&q=80"
								alt="靜心空間"
								className="rounded-lg shadow-lg w-full h-[400px] object-cover"
							/>
							<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-lg -z-10"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Environment Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						場所環境
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="space-y-4">
							<img
								src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80"
								alt="靜坐空間"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="text-xl font-semibold text-gray-900">靜心空間</h3>
							<p className="text-gray-600">
								寬敞舒適的靜坐空間，讓您能夠沉浸在寧靜的氛圍中。
							</p>
						</div>
						<div className="space-y-4">
							<img
								src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80"
								alt="瑜珈教室"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="text-xl font-semibold text-gray-900">瑜珈教室</h3>
							<p className="text-gray-600">
								明亮通風的瑜珈空間，配備專業的瑜珈器材。
							</p>
						</div>
						<div className="space-y-4">
							<img
								src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
								alt="休息區"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="text-xl font-semibold text-gray-900">休息區</h3>
							<p className="text-gray-600">
								溫馨的休息空間，您可以在這裡放鬆身心，享用熱茶。
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Location Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-8">
								聯絡資訊
							</h2>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">地址</h3>
										<p className="text-gray-600">
											台北市大安區和平東路二段xxx號
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">電話</h3>
										<p className="text-gray-600">02-xxxx-xxxx</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Email</h3>
										<p className="text-gray-600">contact@example.com</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											營業時間
										</h3>
										<p className="text-gray-600">週二至週日 10:00-21:00</p>
										<p className="text-gray-600">週一公休</p>
									</div>
								</div>
							</div>
						</div>
						<div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.004888756891!2d121.5336!3d25.026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzMzLjYiTiAxMjHCsDMyJzAxLjAiRQ!5e0!3m2!1sen!2stw!4v1635000000000!5m2!1sen!2stw"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Google Map"
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
