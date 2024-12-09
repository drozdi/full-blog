import { setPost } from './index';
export const removeComment = (rep, id) => (dispatch, getState) =>
	rep.delete(id).then((res) => {
		const post = getState().post;
		post.comments = (post.comments || []).filter((comment) => comment.id !== id);
		dispatch(setPost(post));
	});
