import axios from 'axios';

export const api = axios.create({
	baseURL: '/api/v1/',
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		try {
			if (error.response.status === 403) {
				const response = await api.get('auth/refresh');
				localStorage.setItem('token', response.data.accessToken);
				return api.request(error.config);
			}
		} catch (error) {}

		return Promise.reject(error);
	},
);
