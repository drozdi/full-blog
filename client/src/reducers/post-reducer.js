import { ACTION_TYPE } from '../actions';

const initialState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	comments: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_POST_DATA:
			return { ...state, ...payload };
		case ACTION_TYPE.RESET_POST_DATA:
			return initialState;
		default:
			return state;
	}
};
