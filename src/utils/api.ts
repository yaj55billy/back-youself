import axios from "axios";
const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const apiBase = axios.create({
	baseURL: `${VITE_API_BASE}`,
});

/* 後台 */

export const getAdminProducts = () => {
	return apiBase
		.get(`/api/${VITE_API_PATH}/admin/products`)
		.then((res) => res.data)
		.catch((error) => {
			console.error("Error fetching admin products:", error);
			throw error;
		});
};

// https://ec-course-api.hexschool.io/v2/api/{api_path}/admin/products

/* 前台 */

export const getProducts = () => {
	return apiBase
		.get(`/api/${VITE_API_PATH}/products`)
		.then((res) => res.data)
		.catch((error) => {
			console.error("Error fetching products:", error);
			throw error;
		});
};

// https://ec-course-api.hexschool.io/v2/api/{api_path}/products
