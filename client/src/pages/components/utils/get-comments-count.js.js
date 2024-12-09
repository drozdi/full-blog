export const getCommentsCount = (comments = [], postId) => {
	return comments.filter(({ post_id }) => post_id === postId).length;
};
