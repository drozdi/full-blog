import axios from 'axios';
import { apiEndpoint } from '../config/apiEndpoint.js';

const api = axios.create({
	baseURL: apiEndpoint + '/users/',
});

export const usersApi = {
	getUsers: async () => {
		const { data } = await api.get('');
		return data;
	},
	getRoles: async () => {
		const { data } = await api.get('roles');
		return data;
	},
	delete: async (id) => {
		const { data } = await api.delete(`${id}`);
		return data;
	},
	update: async (id, payload) => {
		const { data } = await api.patch(`${id}`, payload);
		return data;
	},
};
