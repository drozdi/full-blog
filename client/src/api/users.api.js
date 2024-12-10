import axios from 'axios';
import { apiEndpoint } from '../config/apiEndpoint.js';

const httpAuth = axios.create({
	baseURL: apiEndpoint + '/users/',
});

export const usersApi = {
	getUsers: async () => {
		const { data } = await httpAuth.get('');
		return data;
	},
	getRoles: async () => {
		const { data } = await httpAuth.get('roles');
		return data;
	},
};
