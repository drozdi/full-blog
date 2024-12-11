import { postsApi } from '../api';
import { setPost } from './index';
export const addComment = (post_id, data) => (dispatch, getState) =>
	postsApi.addComment(post_id, { ...data }).then(({ data }) => {
		const post = getState().post;
		post.comments.push({ ...data });
		dispatch(setPost(post));
	});
