const Post = require('../models/Post');

async function addPost(post) {
	const newPost = await Post.create(post);

	await newPost.populate({
		path: 'comments',
		populate: 'author',
	});

	return newPost;
}

async function editPost(id, post) {
	const newPost = await Post.findByIdAndUpdate(id, post, { returnDocument: 'after' });

	await newPost.populate({
		path: 'comments',
		populate: 'author',
	});

	return newPost;
}

async function deletePost(id) {
	const post = await Post.findById(id).populate({
		path: 'comments',
		populate: 'author',
	});
	post.comments.map(async (comment) => {
		await comment.deleteOne();
	});
	return Post.deleteOne({ _id: id });
}

async function getPosts(search = '', limit = 6, page = 1) {
	const [posts, count] = await Promise.all([
		Post.find({ title: { $regex: search, $options: 'i' } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 }),
		Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
	]);

	return {
		posts,
		lastPage: Math.ceil(count / limit),
	};
}

function getPost(id) {
	return Post.findById(id).populate({
		path: 'comments',
		populate: 'author',
	});
}

module.exports = {
	addPost,
	editPost,
	deletePost,
	getPosts,
	getPost,
};
