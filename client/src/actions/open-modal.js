import { ACTION_TYPE } from './types';

export const openModal = (params) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: params,
});
