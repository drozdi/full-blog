import { postsApi } from '../api';
import { setPost } from './index';
export const removeComment = (post_id, id) => (dispatch, getState) =>
	postsApi.removeComment(post_id, id).then(() => {
		const post = getState().post;
		post.comments = (post.comments || []).filter((comment) => comment.id !== id);
		dispatch(setPost(post));
	});
