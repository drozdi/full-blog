import { postsApi } from '../api';
import { setPost } from './set-post';
export const savePost = (post) => (dispatch) => {
	return post.id
		? postsApi.updatePost(post.id, post).then(({ data }) => {
				dispatch(setPost(data));
				return data;
			})
		: postsApi.addPost(post).then(({ data }) => {
				dispatch(setPost(data));
				return data;
			});
};
