import { setPost } from './set-post';

export const loadPost = (rep, id) => (dispatch) =>
	rep
		.get(id)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setPost(data));
			return data;
		});
