import { postsApi } from '../api';
import { setPost } from './set-post';
export const loadPost = (id) => (dispatch) =>
	postsApi.getPost(id).then(({ data }) => {
		dispatch(setPost(data));
		return data;
	});
