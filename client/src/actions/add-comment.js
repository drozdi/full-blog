import { genDate } from '../utils/gen-date';
import { setPost } from './index';
export const addComment = (rep, data) => (dispatch, getState) =>
	rep
		.post({ ...data, published_at: genDate() })
		.then((res) => res.json())
		.then((comment) => {
			const post = getState().post;
			const user = getState().user;
			post.comments.push({ ...comment, author: user.login });
			dispatch(setPost(post));
		});
