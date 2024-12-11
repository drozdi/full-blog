import axios from 'axios';
import { apiEndpoint } from '../config/apiEndpoint.js';

const api = axios.create({
	baseURL: apiEndpoint + '/posts/',
});

export const postsApi = {
	getPosts: async (search, page, limit) => {
		const { data } = await api.get(`?search=${search}&page=${page}&limit=${limit}`);
		return data;
	},
	getPost: async (id) => {
		const { data } = await api.get(`${id}`);
		return data;
	},
	addPost: async (payload) => {
		const { data } = await api.post(``, payload);
		return data;
	},
	updatePost: async (id, payload) => {
		const { data } = await api.patch(`${id}`, payload);
		return data;
	},
};
