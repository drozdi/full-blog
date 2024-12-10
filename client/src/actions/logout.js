import { authApi } from '../api';
import { ACTION_TYPE } from './types';
export const logout = () => {
	authApi.logout();
	return { type: ACTION_TYPE.LOGOUT };
};
