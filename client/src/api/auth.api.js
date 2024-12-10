import axios from 'axios';
import { apiEndpoint } from '../config/apiEndpoint.js';

const httpAuth = axios.create({
	baseURL: apiEndpoint + '/auth/',
});

export const authApi = {
	register: async (payload) => {
		const { data } = await httpAuth.post(`signUp`, payload);
		return data;
	},
	login: async ({ login, password }) => {
		const { data } = await httpAuth.post(`signIn`, {
			login,
			password,
		});
		return data;
	},
	logout: async () => {
		const { data } = await httpAuth.post('logout');
		return data;
	},
};
