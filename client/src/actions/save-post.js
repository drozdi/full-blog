import { genDate } from '../utils/gen-date';
import { setPost } from './set-post';
export const savePost = (rep, post) => (dispatch) => {
	return post.id
		? rep.patch(post.id, post).then(() => {
				dispatch(setPost(post));
				return post;
			})
		: rep
				.post({
					...post,
					published_at: genDate(),
				})
				.then((res) => res.json())
				.then((data) => {
					dispatch(setPost(data));
					return data;
				});
};
