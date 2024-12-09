import { ACTION_TYPE } from '../actions';

const initialState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: { ...state.modal, ...payload, isOpen: true },
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return initialState;
		default:
			return state;
	}
};
