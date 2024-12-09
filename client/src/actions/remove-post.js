export const removePost = (rep, id, repComment) => (dispatch, getState) => {
	const post = getState().post;
	[...post.comments].forEach(async (comment) => {
		await repComment?.delete(comment.id);
	});
	return rep.delete(id);
};
