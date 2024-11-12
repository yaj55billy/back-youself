import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Cart from "./pages/Cart";
import { useEffect } from "react";

import { Product } from "./types/apiTypes"; // 引入型別
import { getProducts } from "./utils/api";

function App() {
	useEffect(() => {
		getProducts().then((data: Product[]) => {
			// const products = data as Product[];
			console.log(data);
		});
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="news" element={<News />} />
					<Route path="news/:id" element={<NewsDetail />} />
					<Route path="courses" element={<Courses />} />
					<Route path="courses/:id" element={<CourseDetail />} />
					<Route path="cart" element={<Cart />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
